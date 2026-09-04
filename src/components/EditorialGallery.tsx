import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import {
  blockGalleryTouchPropagation,
  usePhotoSwipeNavigation,
} from '../hooks/usePhotoSwipeNavigation';
import {
  editorialGalleryGridClass,
  editorialGalleryImageSizes,
  editorialGalleryModalTileClass,
  editorialGalleryModalWrapperClass,
  editorialGalleryTileClass,
  editorialGalleryWrapperClass,
} from '../lib/editorialPropertyLayout';
import { GALLERY_PREVIEW_LIMIT } from '../lib/galleryPhotoOrder';
import { HERO_PHOTO } from '../config/cotswoldsPhotos';

const BLUR_PLACEHOLDER =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2U1ZTdlYiIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmM2Y0ZjYiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4=';

interface EditorialGalleryProps {
  photos: string[];
  propertyName?: string;
  previewLimit?: number;
}

export const EditorialGallery: React.FC<EditorialGalleryProps> = ({
  photos,
  propertyName = 'Cotswolds Estate',
  previewLimit = GALLERY_PREVIEW_LIMIT,
}) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const isModalOpen = showAllPhotos || selectedPhotoIndex !== null;

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const handlePhotoClick = (index: number) => {
    setIsImageLoading(true);
    setSelectedPhotoIndex(index);
  };

  const closeFullScreenPhoto = () => {
    setSelectedPhotoIndex(null);
  };

  const closeAllPhotos = () => {
    setShowAllPhotos(false);
    setSelectedPhotoIndex(null);
  };

  const navigatePhoto = useCallback(
    (direction: 'prev' | 'next') => {
      setIsImageLoading(true);
      setSelectedPhotoIndex((current) => {
        if (current === null) return null;
        if (direction === 'prev') {
          return current === 0 ? photos.length - 1 : current - 1;
        }
        return current === photos.length - 1 ? 0 : current + 1;
      });
    },
    [photos.length]
  );

  const goToNextPhoto = useCallback(() => navigatePhoto('next'), [navigatePhoto]);
  const goToPrevPhoto = useCallback(() => navigatePhoto('prev'), [navigatePhoto]);

  const { handleTouchStart, handleTouchMove, handleTouchEnd, handleTouchCancel } =
    usePhotoSwipeNavigation(goToNextPhoto, goToPrevPhoto);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showAllPhotos && selectedPhotoIndex === null) return;
      if (e.key === 'ArrowRight') navigatePhoto('next');
      else if (e.key === 'ArrowLeft') navigatePhoto('prev');
      else if (e.key === 'Escape') {
        if (selectedPhotoIndex !== null) closeFullScreenPhoto();
        else if (showAllPhotos) closeAllPhotos();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showAllPhotos, selectedPhotoIndex, navigatePhoto]);

  const previewPhotos = photos.slice(0, previewLimit);

  return (
    <>
      <div className={editorialGalleryWrapperClass} id="photos">
        <div className={editorialGalleryGridClass}>
          {previewPhotos.map((photo, index) => (
            <div
              key={photo}
              className={editorialGalleryTileClass}
              onClick={() => handlePhotoClick(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handlePhotoClick(index);
              }}
            >
              <Image
                src={photo}
                alt={`${propertyName} ${index + 1}`}
                fill
                sizes={editorialGalleryImageSizes}
                className="object-cover hover:scale-105 transition-transform duration-300"
                priority={index < 4}
                quality={index < 6 ? 85 : 75}
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
              />
            </div>
          ))}
        </div>
        {photos.length > previewLimit && (
          <div className="text-center mt-6">
            <button
              type="button"
              onClick={() => setShowAllPhotos(true)}
              className="inline-flex items-center px-6 py-2 bg-black hover:bg-gray-900 text-white rounded-full text-sm font-medium transition-colors"
            >
              View all {photos.length} photos
            </button>
          </div>
        )}
      </div>

      {showAllPhotos && (
        <div className="fixed inset-0 bg-black z-[100000] overflow-y-auto">
          <div className="flex justify-between items-center p-4 sticky top-0 bg-black/75 z-10">
            <h3 className="text-white font-medium text-sm sm:text-base">
              {propertyName} | All Photos ({photos.length})
            </h3>
            <button
              type="button"
              onClick={closeAllPhotos}
              className="text-white hover:text-gray-300 p-1"
              aria-label="Close gallery"
            >
              <X size={24} />
            </button>
          </div>
          <div className={`${editorialGalleryModalWrapperClass} ${editorialGalleryGridClass}`}>
            {photos.map((photo, index) => (
              <div
                key={photo}
                className={`${editorialGalleryModalTileClass} bg-gray-800`}
                onClick={() => handlePhotoClick(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') handlePhotoClick(index);
                }}
              >
                <Image
                  src={photo}
                  alt={`${propertyName} photo ${index + 1}`}
                  fill
                  sizes={editorialGalleryImageSizes}
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  quality={75}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedPhotoIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-[100001] flex items-center justify-center"
          onClick={closeFullScreenPhoto}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchCancel}
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white z-10 p-2"
            onClick={(e) => {
              e.stopPropagation();
              closeFullScreenPhoto();
            }}
            aria-label="Close photo"
          >
            <X size={32} />
          </button>
          <button
            type="button"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
            onClick={(e) => {
              e.stopPropagation();
              navigatePhoto('prev');
            }}
            aria-label="Previous photo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
            onClick={(e) => {
              e.stopPropagation();
              navigatePhoto('next');
            }}
            aria-label="Next photo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          <div
            className="relative w-full h-[calc(100vh-120px)] max-w-6xl mx-auto px-4"
            {...blockGalleryTouchPropagation}
            onClick={(e) => e.stopPropagation()}
          >
            {isImageLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <div className="flex items-center justify-center h-full">
              <img
                src={photos[selectedPhotoIndex]}
                alt={`${propertyName} photo ${selectedPhotoIndex + 1}`}
                className={`transition-opacity duration-300 max-h-full max-w-full w-auto h-auto object-contain ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoad={() => setIsImageLoading(false)}
                loading="eager"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = HERO_PHOTO;
                  setIsImageLoading(false);
                }}
              />
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
            {selectedPhotoIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
};
