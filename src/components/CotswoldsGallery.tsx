import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface CotswoldsGalleryProps {
  photos: string[];
  propertyName: string;
}

// Small blank base64 image to use as placeholder
const PLACEHOLDER_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

export const CotswoldsGallery = ({
  photos,
  propertyName,
}: CotswoldsGalleryProps) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean[]>(photos.map(() => true));
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  // Preload first batch of images
  useEffect(() => {
    const preloadCount = Math.min(10, photos.length);
    Promise.all(
      photos.slice(0, preloadCount).map((src) => {
        return new Promise((resolve) => {
          const img = document.createElement('img');
          img.src = src;
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
        });
      })
    ).then(() => {
      setImagesPreloaded(true);
    });
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
        left: -1000, // Changed from -300 to -1000 to skip roughly 3 photos
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 1000, // Changed from 300 to 1000 to skip roughly 3 photos
        behavior: 'smooth'
      });
    }
  };

  const handleImageLoad = (index: number) => {
    const newLoadingState = [...loading];
    newLoadingState[index] = false;
    setLoading(newLoadingState);
  };

  const handleImageError = (index: number) => {
    // Log error and try to reload the image
    console.error(`Failed to load image at index ${index}`);
    
    // Keep the loading spinner visible
    const newLoadingState = [...loading];
    newLoadingState[index] = true;
    setLoading(newLoadingState);
    
    // Force rerender with a timeout to retry loading the image
    setTimeout(() => {
      // Add cache-busting parameter to force reload
      const imgEl = document.querySelector(`#gallery-img-${index}`) as HTMLImageElement;
      if (imgEl && imgEl.src) {
        const src = new URL(imgEl.src);
        src.searchParams.set('t', Date.now().toString());
        imgEl.src = src.toString();
      }
    }, 1000);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      
      if (e.key === 'ArrowRight') {
        handleNextPhoto();
      } else if (e.key === 'ArrowLeft') {
        handlePrevPhoto();
      } else if (e.key === 'Escape') {
        closeFullScreenPhoto();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPhotoIndex]);

  // Preload neighboring images when in fullscreen mode
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      const preloadIndices = [
        (selectedPhotoIndex + 1) % photos.length,
        (selectedPhotoIndex + 2) % photos.length,
        (selectedPhotoIndex - 1 + photos.length) % photos.length,
        (selectedPhotoIndex - 2 + photos.length) % photos.length
      ];
      
      preloadIndices.forEach(index => {
        const img = document.createElement('img');
        img.src = photos[index];
      });
    }
  }, [selectedPhotoIndex, photos]);

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
                background: '#f0f0f0', // Light background for loading state
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10" 
                   style={{ display: loading[index] ? 'flex' : 'none' }}>
                <div className="w-10 h-10 border-4 border-t-green-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              </div>
              <Image
                id={`gallery-img-${index}`}
                src={photo}
                alt={`${propertyName} ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority={index < 8} // Prioritize loading for first 8 images
                quality={85} // Good quality with reasonable file size
                placeholder="blur"
                blurDataURL={PLACEHOLDER_IMAGE}
                onLoadingComplete={() => handleImageLoad(index)}
                onError={() => handleImageError(index)}
              />
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
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-16 h-16 border-4 border-t-green-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              </div>
              
              <Image
                src={photos[selectedPhotoIndex]}
                alt={`${propertyName} full view ${selectedPhotoIndex + 1}`}
                fill
                priority
                quality={90} // Higher quality for fullscreen view
                className="object-contain z-20"
                sizes="100vw"
                placeholder="blur"
                blurDataURL={PLACEHOLDER_IMAGE}
                onLoadingComplete={() => {
                  // Hide loader when image is loaded
                  const loaderEl = document.querySelector('.fullscreen-loader');
                  if (loaderEl) loaderEl.classList.add('hidden');
                }}
                onError={(e) => {
                  console.error("Failed to load fullscreen image");
                  // Try to reload the image
                  const target = e.target as HTMLImageElement;
                  if (target) {
                    const url = new URL(target.src);
                    url.searchParams.set('t', Date.now().toString());
                    target.src = url.toString();
                  }
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