import React, { useEffect, useState } from 'react';
import { Star, Sparkles, Heart, Cloud, ArrowRight, Phone } from 'lucide-react';

// Update image paths (from public/images, no /public prefix)
const images = [
  '/images/Donors.png',
  '/images/Donors1.png',
  '/images/Donors2.png',
  '/images/Donors3.png',
];

export default function VolunteerNannyPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-orange-200 via-orange-50 to-orange-200 
       overflow-hidden relative"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating elements */}
        <div className="absolute top-20 left-20 animate-bounce">
          <div className="w-20 h-20 bg-orange-200 rounded-full flex items-center justify-center"></div>
        </div>
        <div className="absolute top-32 right-32 animate-pulse">
          <Star className="w-16 h-16 text-yellow-400 fill-yellow-400" />
        </div>
        <div className="absolute bottom-40 left-16 animate-bounce delay-300">
          <div className="w-10 h-10 bg-blue-200 rounded-full"></div>
        </div>
        <div className="absolute top-64 left-1/4 animate-spin-slow">
          <Sparkles className="w-10 h-10 text-orange-400" />
        </div>
        {/* Dashed circles */}
        <div className="absolute bottom-20 left-10 w-24 h-24 border-2 border-dashed border-blue-300 rounded-full opacity-50"></div>
        <div className="absolute top-16 right-16 w-16 h-16 border-2 border-dashed border-orange-300 rounded-full opacity-50"></div>
        {/* Paper airplane */}
        <div className="absolute bottom-1/3 left-8 transform rotate-45 text-blue-300">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
          </svg>
        </div>
        {/* Bee (if any SVG or asset needed, add here) */}
        <div className="absolute bottom-32 right-1/3 text-yellow-500 animate-bounce"></div>
        {/* Cloud with rainbow */}
        <div className="absolute top-1/3 right-8">
          <div className="relative">
            <Cloud className="w-20 h-20 text-orange-200 fill-orange-200" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-red-300 via-yellow-300 to-blue-300 rounded-full opacity-70"></div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Left content */}
          <div className="flex-1 max-w-2xl lg:pr-8 flex flex-col items-center text-center">
            <div className="mb-6"></div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Roboto', sans-serif" }}>
              <span className="text-gray-800"> Welcome to Dear </span>
              <br />
              <span className="text-orange-400 align-text-top">Donors</span>
            </h1>
            <p className="text-gray-600 font-bold text-2xl mb-12 max-w-lg leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif" }}>
              " Together we can make a difference "
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                style={{ fontFamily: "'Roboto', sans-serif" }}
                onClick={() => window.location.href = 'https://forms.gle/Fw5pgBkutZipPgXAA'}
                aria-label="Donate Now"
              >
                Donate Now
                <ArrowRight className="w-10 h-10" />
              </button>
              <button
                className="border-2 border-blue-300 text-blue-600 hover:bg-green-300 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                style={{ fontFamily: "'Roboto', sans-serif" }}
                onClick={() => window.location.href = '/contact'}
                aria-label="Get In Touch"
              >
                Get In Touch
                <Phone className="w-10 h-10" />
              </button>
            </div>
          </div>
          {/* Right content - Character illustration with slideshow */}
          <div className="flex-1 flex justify-center items-center relative mt-8 lg:mt-0">
            <div
              className="relative"
              style={{ width: '400px', height: '400px' }} // fixed size for container
            >
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img.replace('/public', '/images')}
                  alt={`Volunteer Slide ${idx + 1}`}
                  className={`absolute w-full h-full object-contain transition-all duration-700 ${
                    currentIndex === idx ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-90 z-10'
                  }`}
                  style={{ left: 0, top: 0, fontFamily: "'Roboto', sans-serif" }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/volunteer-removebg-preview.png';
                  }}
                  loading="lazy"
                />
              ))}
              {/* Floating hearts */}
              <div className="absolute -top-8 -right-8 animate-pulse">
                <Heart className="w-10 h-10 text-pink-400 fill-pink-400" />
              </div>
              <div className="absolute -bottom-8 -left-8 animate-bounce delay-500">
                <Heart className="w-10 h-10 text-red-400 fill-red-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Custom animation styles */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
