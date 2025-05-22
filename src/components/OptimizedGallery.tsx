import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Define small blurred placeholder data URL - very small footprint
const TINY_PLACEHOLDER = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+L79iX9mHS/2k7rx9b6t4z8UeEj4Z8M2OsWsHhm10+5F9eahrlppMcst1fafewGJbM3aiC3tpCshBkkkCNGjfj3ibxJnGV5lg8Jl9aljqeIx1ShWhi51I04whQrTlKEqdGg5c0qtHljOcY8sZSabtb7XgHhrJ81yXMMwzDMK+X1cPgq1WhVwlOlKpUqVK+Ho04wnUrV6ajGNKrVcpU4SlzSjFOyv//Z';

interface OptimizedGalleryProps {
  photos: string[];
  propertyName: string;
}

export const OptimizedGallery = ({ 
  photos, 
  propertyName 
}: OptimizedGalleryProps) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean[]>(photos.map(() => true));
  const [failed, setFailed] = useState<boolean[]>(photos.map(() => false));
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const imageCacheUrls = useRef<string[]>([]);

  // Preload first 20 images at reduced quality for faster initial display
  useEffect(() => {
    // Create optimized URLs with reduced quality for faster loading
    const optimizedUrls = photos.slice(0, 20).map(photo => {
      // Add width, quality, and cache parameters
      return `${photo}?q=60&w=400&t=${Date.now()}`;
    });

    // Cache these optimized URLs
    imageCacheUrls.current = optimizedUrls;

    // Preload the images
    Promise.all(
      optimizedUrls.map((src, index) => {
        return new Promise<void>((resolve) => {
          const img = document.createElement('img');
          img.src = src;
          
          img.onload = () => {
            // Update loading state for this image
            setLoading(prevState => {
              const newState = [...prevState];
              newState[index] = false;
              return newState;
            });
            resolve();
          };
          
          img.onerror = () => {
            // Mark as failed
            setFailed(prevState => {
              const newState = [...prevState];
              newState[index] = true;
              return newState;
            });
            resolve();
          };
        });
      })
    );
  }, [photos]);

  const handlePhotoClick = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const handleNextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    }
  };

  const handlePrevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        (selectedPhotoIndex - 1 + photos.length) % photos.length
      );
    }
  };

  const closeFullScreenPhoto = () => {
    setSelectedPhotoIndex(null);
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -1000, // Skip around 3 images
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 1000, // Skip around 3 images
        behavior: 'smooth'
      });
    }
  };

  const handleImageLoad = (index: number) => {
    setLoading(prevState => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  const handleImageError = (index: number) => {
    // Mark image as failed
    setFailed(prevState => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
    
    // Keep loading state active
    setLoading(prevState => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
    
    // Retry loading with different parameters
    setTimeout(() => {
      const imgEl = document.querySelector(`#opt-gallery-img-${index}`) as HTMLImageElement;
      if (imgEl && imgEl.src) {
        // Retry with even lower quality and a cache-busting parameter
        const timestamp = Date.now();
        const newSrc = `${photos[index]}?q=40&w=300&t=${timestamp}`;
        imgEl.src = newSrc;
      }
    }, 2000);
  };

  // Get optimized image src with appropriate quality settings
  const getOptimizedSrc = (src: string, index: number, forFullscreen: boolean = false) => {
    const isPriority = index < 20;
    
    // Add a timestamp to prevent caching issues
    const timestamp = Date.now();
    
    // In development, Next.js might not optimize images with query params
    // So we'll rely on Next.js's built-in image optimization instead
    return src;
  };

  return (
    <>
      {/* Horizontal Scrolling Gallery */}
      <div className="relative w-full">
        {/* Left scroll button */}
        <button 
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md z-10 transition-all"
          style={{ 
            display: scrollPosition > 10 ? 'block' : 'none'
          }}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Gallery container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-6 hide-scrollbar" 
          style={{ 
            scrollBehavior: 'smooth',
            msOverflowStyle: 'none', /* Hide scrollbar in IE and Edge */
            scrollbarWidth: 'none' /* Hide scrollbar in Firefox */
          }}
          onScroll={handleScroll}
        >
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 relative w-80 h-64 mr-4 rounded-lg overflow-hidden cursor-pointer shadow-md"
              onClick={() => handlePhotoClick(index)}
              style={{ 
                background: '#f0f0f0', // Light background for placeholder
              }}
            >
              {/* Loading spinner */}
              {loading[index] && !failed[index] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                  <div className="w-10 h-10 border-4 border-t-green-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                </div>
              )}
              
              {/* Fallback for failed images */}
              {failed[index] && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 z-10 p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm text-gray-500">Image could not be loaded</p>
                  <button 
                    className="mt-2 px-3 py-1 bg-green-600 text-white text-xs rounded-md hover:bg-green-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Reset failed state and try again
                      setFailed(prev => {
                        const newState = [...prev];
                        newState[index] = false;
                        return newState;
                      });
                      handleImageError(index);
                    }}
                  >
                    Retry
                  </button>
                </div>
              )}

              {/* Actual image */}
              <Image
                id={`opt-gallery-img-${index}`}
                src={photo}
                alt={`${propertyName} ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority={index < 8} // Prioritize loading for first 8 images
                placeholder="blur"
                blurDataURL={TINY_PLACEHOLDER}
                quality={index < 20 ? 75 : 50} // Reduce quality for non-priority images
                width={index < 20 ? 400 : 300} // Use width to hint at optimal size
                height={index < 20 ? 320 : 240} // Calculate height to maintain aspect ratio
                onLoadingComplete={() => handleImageLoad(index)}
                onError={() => handleImageError(index)}
              />

              {/* Photo number indicator */}
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                {index + 1}/{photos.length}
              </div>
            </div>
          ))}
        </div>

        {/* Right scroll button */}
        <button 
          onClick={scrollRight}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md z-10 transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Fullscreen Photo View */}
      {selectedPhotoIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="absolute top-4 right-4 flex space-x-4">
            <button
              onClick={closeFullScreenPhoto}
              className="text-white bg-black bg-opacity-60 hover:bg-opacity-80 p-2 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-60 hover:bg-opacity-80 p-2 rounded-full transition-colors"
            onClick={handlePrevPhoto}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-auto px-4">
            <div className="relative w-full h-full">
              {/* Loading indicator for fullscreen view */}
              <div className="absolute inset-0 flex items-center justify-center z-10 fullscreen-loader">
                <div className="w-16 h-16 border-4 border-t-green-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              </div>
              
              {/* Fullscreen fallback for failed images */}
              {failed[selectedPhotoIndex] && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 z-20 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-lg text-gray-300 mb-4">This image could not be loaded</p>
                  <button 
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                    onClick={() => {
                      // Reset failed state and try again
                      setFailed(prev => {
                        const newState = [...prev];
                        newState[selectedPhotoIndex] = false;
                        return newState;
                      });
                      handleImageError(selectedPhotoIndex);
                    }}
                  >
                    Try Again
                  </button>
                </div>
              )}
              
              <Image
                src={photos[selectedPhotoIndex]}
                alt={`${propertyName} full view ${selectedPhotoIndex + 1}`}
                fill
                priority
                quality={75} // Higher quality for fullscreen
                className="object-contain z-20"
                sizes="100vw"
                placeholder="blur"
                blurDataURL={TINY_PLACEHOLDER}
                onLoadingComplete={() => {
                  // Hide loader when image is loaded
                  const loaderEl = document.querySelector('.fullscreen-loader');
                  if (loaderEl) loaderEl.classList.add('hidden');
                }}
                onError={() => {
                  // Mark as failed but don't redirect
                  setFailed(prev => {
                    const newState = [...prev];
                    newState[selectedPhotoIndex] = true;
                    return newState;
                  });
                }}
              />
            </div>
          </div>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-60 hover:bg-opacity-80 p-2 rounded-full transition-colors"
            onClick={handleNextPhoto}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Photo counter */}
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-white text-sm md:text-base bg-black bg-opacity-70 inline-block px-3 py-1 rounded-full">
              {selectedPhotoIndex + 1} / {photos.length}
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}; 