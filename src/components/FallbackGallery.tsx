import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface FallbackGalleryProps {
  photos: string[];
  propertyName: string;
}

export const FallbackGallery: React.FC<FallbackGalleryProps> = ({ photos, propertyName }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean[]>(photos.map(() => true));
  const [failed, setFailed] = useState<boolean[]>(photos.map(() => false));
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isMountedRef = useRef(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Special handling for the first 6 photos - just mark them as loaded immediately
  useEffect(() => {
    // Mark the first 6 photos as loaded immediately
    const newLoading = [...loading];
    for (let i = 0; i < 6 && i < photos.length; i++) {
      newLoading[i] = false;
    }
    setLoading(newLoading);
  }, []);

  // Regular image preloading for the rest
  useEffect(() => {
    if (isMountedRef.current) return;
    isMountedRef.current = true;
    
    // Only preload images from index 6 onwards
    for (let i = 6; i < photos.length; i++) {
      const img = document.createElement('img');
      img.src = photos[i];
      
      img.onload = () => {
        setLoading(prev => {
          const newLoading = [...prev];
          newLoading[i] = false;
          return newLoading;
        });
      };
      
      img.onerror = () => {
        setFailed(prev => {
          const newFailed = [...prev];
          newFailed[i] = true;
          return newFailed;
        });
      };
    }
  }, [photos]);

  const handlePhotoClick = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const handleCloseFullscreen = () => {
    setSelectedPhotoIndex(null);
  };

  const handlePrevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
    }
  };

  const handleNextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  // Modified scroll functions for mobile
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = isMobile ? 
        scrollContainerRef.current.offsetWidth : // Exactly one image width on mobile
        1000; // Default desktop value
      
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = isMobile ? 
        scrollContainerRef.current.offsetWidth : // Exactly one image width on mobile
        1000; // Default desktop value
      
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleImageLoad = (index: number) => {
    setLoading(prev => {
      const newLoading = [...prev];
      newLoading[index] = false;
      return newLoading;
    });
  };

  const handleImageError = (index: number) => {
    // Don't mark the first 6 as failed
    if (index < 6) return;
    
    setFailed(prev => {
      const newFailed = [...prev];
      newFailed[index] = true;
      return newFailed;
    });
  };

  const retryLoadingImage = (index: number) => {
    // Don't retry for the first 6
    if (index < 6) return;
    
    setFailed(prev => {
      const newFailed = [...prev];
      newFailed[index] = false;
      return newFailed;
    });
    
    setLoading(prev => {
      const newLoading = [...prev];
      newLoading[index] = true;
      return newLoading;
    });
    
    // Force reload the image with a stronger cache buster
    const cacheBuster = `?nocache=${Date.now()}-${Math.random()}`;
    const imgElement = document.getElementById(`fallback-img-${index}`) as HTMLImageElement;
    if (imgElement) {
      imgElement.src = `${photos[index]}${cacheBuster}`;
    }
  };

  // Hardcoded paths for the first 6 images that were having issues
  const hardcodedFirstSeven = [
    "/photos/listings/Cotswolds Luxury Retreat/224A5508.jpg",
    "/photos/listings/Cotswolds Luxury Retreat/224A5516.jpg", 
    "/photos/listings/Cotswolds Luxury Retreat/224A5307.jpg",
    "/photos/listings/Cotswolds Luxury Retreat/224A5435.jpg",
    "/photos/listings/Cotswolds Luxury Retreat/DJI_20250502143633_0658_D.jpg",
    "/photos/listings/Cotswolds Luxury Retreat/224A5368.jpg"
  ];

  return (
    <div className="relative w-full">
      {/* Left scroll button */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md z-10 transition-all"
        style={{ display: scrollPosition > 10 ? 'block' : 'none' }}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Gallery container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory"
        style={{
          scrollBehavior: 'smooth',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
        onScroll={handleScroll}
      >
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`flex-shrink-0 relative mr-4 rounded-lg overflow-hidden cursor-pointer shadow-md snap-center ${
              isMobile ? 'w-full' : 'w-80'
            }`}
            style={{ 
              height: '64rem',
              maxHeight: isMobile ? '40vh' : '64rem',
              width: isMobile ? 'calc(100% - 16px)' : '20rem',
              background: '#f0f0f0' 
            }}
            onClick={() => handlePhotoClick(index)}
          >
            {/* Loading spinner - don't show for first 6 */}
            {loading[index] && !failed[index] && index >= 6 && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                <div className="w-10 h-10 border-4 border-t-green-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {/* Error state - don't show for first 6 */}
            {failed[index] && index >= 6 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p className="text-gray-500 text-sm mb-2">Failed to load image</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    retryLoadingImage(index);
                  }}
                  className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700"
                >
                  Retry
                </button>
              </div>
            )}

            {/* For first 6 photos, use hardcoded paths */}
            {index < 6 ? (
              <img
                id={`fallback-img-${index}`}
                src={hardcodedFirstSeven[index]}
                alt={`${propertyName} ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="eager"
                fetchPriority="high"
              />
            ) : (
              <img
                id={`fallback-img-${index}`}
                src={photo}
                alt={`${propertyName} ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                style={{ display: loading[index] || failed[index] ? 'none' : 'block' }}
                onLoad={() => handleImageLoad(index)}
                onError={() => handleImageError(index)}
                loading={index < 10 ? 'eager' : 'lazy'}
                fetchPriority={index < 10 ? 'high' : 'auto'}
              />
            )}

            {/* Photo counter */}
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

      {/* Fullscreen view */}
      {selectedPhotoIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={handleCloseFullscreen}
            className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous button */}
          <button
            onClick={handlePrevPhoto}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Image container - use hardcoded paths for first 6 */}
          <div className="max-w-screen max-h-screen p-4">
            <img
              src={selectedPhotoIndex < 6 ? hardcodedFirstSeven[selectedPhotoIndex] : photos[selectedPhotoIndex]}
              alt={`${propertyName} full view ${selectedPhotoIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>

          {/* Next button */}
          <button
            onClick={handleNextPhoto}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <span className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full">
              {selectedPhotoIndex + 1} / {photos.length}
            </span>
          </div>
        </div>
      )}

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .snap-x {
          scroll-snap-type: x mandatory;
        }
        .snap-center {
          scroll-snap-align: center;
        }
        .snap-mandatory {
          scroll-snap-stop: always;
        }
      `}</style>
    </div>
  );
};