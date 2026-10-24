import React, { useEffect } from 'react';

interface LightboxProps {
  images: { src: string; title?: string }[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  onClose,
  onNavigate
}) => {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % images.length);
      }
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, images.length, onClose, onNavigate]);

  if (currentIndex === null || !images[currentIndex]) return null;

  const currentImg = images[currentIndex];

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 select-none">
      {/* Top Bar with Counter and Close Button */}
      <div className="absolute top-4 left-0 w-full px-6 flex justify-between items-center z-20">
        <div className="text-sm font-mono text-white/70 tracking-widest">
          {currentIndex + 1} / {images.length}
        </div>
        <button
          onClick={onClose}
          className="w-11 h-11 border border-white/20 hover:border-[#606e53] hover:text-[#606e53] text-white flex items-center justify-center transition-colors cursor-pointer text-xl"
          aria-label="Close Lightbox"
        >
          ✕
        </button>
      </div>

      {/* Prev Button */}
      <button
        onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-white/20 hover:border-[#606e53] hover:text-[#606e53] text-white flex items-center justify-center transition-all cursor-pointer z-20"
        aria-label="Previous Image"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={() => onNavigate((currentIndex + 1) % images.length)}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-white/20 hover:border-[#606e53] hover:text-[#606e53] text-white flex items-center justify-center transition-all cursor-pointer z-20"
        aria-label="Next Image"
      >
        ›
      </button>

      {/* Image Container */}
      <div
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImg.src}
          alt={currentImg.title || 'Botanical Café'}
          className="max-h-[80vh] max-w-full object-contain rounded-none shadow-2xl transition-all duration-300"
        />
        {currentImg.title && (
          <div className="mt-3 text-sm text-white/80 font-serif tracking-wider text-center">
            {currentImg.title}
          </div>
        )}
      </div>
    </div>
  );
};
