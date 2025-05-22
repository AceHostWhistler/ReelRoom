/**
 * Client-side image compression and resizing utility
 * Helps load large images quickly by creating smaller versions for thumbnails
 */

interface CompressedImage {
  url: string;
  width: number;
  height: number;
  compressed: boolean;
}

/**
 * Creates a compressed version of an image using the browser's canvas API
 * This is useful for creating thumbnails from large images without server-side processing
 */
export async function compressImage(
  src: string,
  maxWidth = 800,
  quality = 0.7
): Promise<CompressedImage | null> {
  return new Promise((resolve) => {
    try {
      // Handle fallback case
      const handleError = () => {
        console.warn(`Failed to compress image: ${src}`);
        resolve({
          url: src,
          width: 0,
          height: 0,
          compressed: false
        });
      };

      // Create a new image element
      const img = new Image();
      
      // Handle CORS issues
      img.crossOrigin = 'anonymous';
      
      // Set up event handlers
      img.onload = () => {
        try {
          // Calculate new dimensions while preserving aspect ratio
          let newWidth = img.width;
          let newHeight = img.height;
          
          if (newWidth > maxWidth) {
            const ratio = maxWidth / newWidth;
            newWidth = maxWidth;
            newHeight = Math.round(newHeight * ratio);
          }
          
          // Create a canvas element
          const canvas = document.createElement('canvas');
          canvas.width = newWidth;
          canvas.height = newHeight;
          
          // Draw the image on the canvas
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            return handleError();
          }
          
          // Draw with smoothing for better quality
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(img, 0, 0, newWidth, newHeight);
          
          // Convert to JPEG data URL
          const dataUrl = canvas.toDataURL('image/jpeg', quality);
          
          resolve({
            url: dataUrl,
            width: newWidth,
            height: newHeight,
            compressed: true
          });
        } catch (err) {
          console.error('Error during compression:', err);
          handleError();
        }
      };
      
      // Handle load errors
      img.onerror = handleError;
      
      // Start loading the image
      img.src = src;
    } catch (err) {
      console.error('Unexpected error during compression setup:', err);
      resolve({
        url: src,
        width: 0,
        height: 0,
        compressed: false
      });
    }
  });
}

/**
 * Creates a tiny placeholder image for blurring
 */
export async function createPlaceholder(src: string): Promise<string> {
  try {
    const compressed = await compressImage(src, 20, 0.3);
    return compressed?.url || '';
  } catch (error) {
    console.error('Failed to create placeholder:', error);
    return '';
  }
}

/**
 * Cache for compressed images to avoid recompressing the same image
 */
const imageCache: Record<string, CompressedImage> = {};

/**
 * Gets a compressed version of an image, using cache if available
 */
export async function getCompressedImage(
  src: string,
  maxWidth = 800,
  quality = 0.7
): Promise<CompressedImage> {
  // Generate a cache key
  const cacheKey = `${src}_${maxWidth}_${quality}`;
  
  // Check if we have this image in cache
  if (imageCache[cacheKey]) {
    return imageCache[cacheKey];
  }
  
  // Compress the image
  const compressed = await compressImage(src, maxWidth, quality);
  
  // Cache the result if compression was successful
  if (compressed && compressed.compressed) {
    imageCache[cacheKey] = compressed;
  }
  
  // Return the image data
  return compressed || { url: src, width: 0, height: 0, compressed: false };
} 