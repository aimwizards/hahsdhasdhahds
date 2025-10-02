import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';
import { ResultImage } from '../types';

interface ResultsGalleryProps {
  images: ResultImage[];
}

const ResultsGallery: React.FC<ResultsGalleryProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImage = images[activeIndex];

  if (!currentImage) return null;

  return (
    <div className="max-w-7xl mx-auto">
      {/* Gallery Title */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-stone-600 to-stone-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg">
          <Star className="w-5 h-5 fill-current" />
          Alla Resultat
        </div>
      </div>

      {/* Main Gallery */}
      <div className="bg-gradient-to-br from-white to-stone-50 rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

          {/* Image Section */}
          <div className="relative overflow-hidden bg-black">
            <div className="relative h-full min-h-[400px] lg:min-h-[600px]">
              <img
                src={currentImage.afterImage}
                alt={`${currentImage.treatment} behandling`}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Treatment Badge */}
              <div className="absolute top-6 right-6 z-10">
                <div className="bg-stone-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  {currentImage.treatment}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Auto-play indicator */}
              {isAutoPlaying && (
                <div className="absolute bottom-6 left-6 z-10">
                  <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-full text-xs font-medium flex items-center gap-2">
                    <Play className="w-3 h-3" />
                    Auto
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-6 h-6 text-yellow-500 fill-current" />
                  <span className="text-stone-600 font-medium text-sm uppercase tracking-wide">
                    Verkligt Resultat
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4" style={{ fontFamily: 'serif' }}>
                  {currentImage.title}
                </h3>

                <p className="text-lg text-stone-600 leading-relaxed mb-6">
                  {currentImage.description}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-stone-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-stone-800" style={{ fontFamily: 'serif' }}>
                    {activeIndex + 1}
                  </div>
                  <div className="text-sm text-stone-500">av {images.length}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-stone-800" style={{ fontFamily: 'serif' }}>
                    100%
                  </div>
                  <div className="text-sm text-stone-500">Naturligt</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-stone-800" style={{ fontFamily: 'serif' }}>
                    {currentImage.treatment}
                  </div>
                  <div className="text-sm text-stone-500">Behandling</div>
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-4">
                <a
                  href="https://www.bokadirekt.se/places/dr-hadde-beauty-131864"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-stone-600 to-stone-700 text-white px-8 py-4 rounded-full font-semibold hover:from-stone-700 hover:to-stone-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Boka {currentImage.treatment}
                  <ChevronRight className="w-5 h-5" />
                </a>

                <p className="text-sm text-stone-500">
                  Kostnadsfri konsultation • Legitimerad läkare • Naturliga resultat
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="bg-stone-100 p-6">
          <div className="flex gap-3 justify-center overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  index === activeIndex
                    ? 'border-stone-600 shadow-lg transform scale-110'
                    : 'border-transparent hover:border-stone-300 hover:scale-105'
                }`}
              >
                <img
                  src={image.afterImage}
                  alt={`${image.treatment} thumbnail`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center mt-8">
        <div className="flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-stone-600 w-8'
                  : 'bg-stone-300 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsGallery;