import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface CotswoldsGalleryProps {
  photos: string[];
  propertyName: string;
}

export const CotswoldsGallery = ({
  photos,
  propertyName,
}: CotswoldsGalleryProps) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean[]>(photos.map(() => true));
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  const handleImageLoad = (index: number) => {
    const newLoadingState = [...loading];
    newLoadingState[index] = false;
    setLoading(newLoadingState);
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
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10" 
                   style={{ display: loading[index] ? 'flex' : 'none' }}>
                <div className="w-10 h-10 border-4 border-t-green-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              </div>
              <Image
                src={photo}
                alt={`${propertyName} ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover transition-transform duration-300 hover:scale-105"
                onLoadingComplete={() => handleImageLoad(index)}
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
                className="object-contain z-20"
                sizes="100vw"
                onLoadingComplete={() => {
                  // Hide loader when image is loaded
                  const loaderEl = document.querySelector('.fullscreen-loader');
                  if (loaderEl) loaderEl.classList.add('hidden');
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