import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const images = [
  '/images/than.png',
  '/images/child3.png',
  '/images/child4.png',
  '/images/child6.png',
  '/images/child7.png',
  '/images/child9.png',
];

const KindergartenHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef(null);

  // Fade-in effect for content
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Image carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  // Handle contact button click
  const handleContactClick = () => {
    try {
      window.open('/contact', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error opening contact page:', error);
    }
  };

  return (
    <section
      className="relative bg-gradient-to-br from-orange-200 via-orange-50 to-orange-200 overflow-hidden"
      style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
      role="banner"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top Left - Star */}
        <div className="absolute top-6 left-8 opacity-60 animate-spin-slow">
          <svg width="36" height="36" viewBox="0 0 36 36" className="text-yellow-300" aria-hidden="true">
            <polygon points="18,2 22,14 35,14 24,22 28,34 18,27 8,34 12,22 1,14 14,14" fill="currentColor" />
          </svg>
        </div>
        {/* Top Right - Heart */}
        <div className="absolute top-4 right-8 opacity-70 animate-bounce">
          <svg width="32" height="32" viewBox="0 0 32 32" className="text-pink-300" aria-hidden="true">
            <path d="M23.6,5.6c-2.1,0-4,1-5.6,2.7C16.4,6.6,14.5,5.6,12.4,5.6C8.6,5.6,6,8.7,6,12.1c0,6.2,10,13.3,10,13.3s10-7.1,10-13.3
              C26,8.7,23.4,5.6,19.6,5.6z" fill="currentColor" />
          </svg>
        </div>
        {/* Bottom Left - Circle */}
        <div className="absolute bottom-10 left-10 w-12 h-12 bg-blue-200 rounded-full opacity-40 animate-pulse"></div>
        {/* Bottom Right - Square */}
        <div className="absolute bottom-8 right-12 w-10 h-10 bg-green-200 rounded-lg opacity-40 animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8 py-12 min-h-[420px]">
        {/* Left Content */}
        <div
          ref={contentRef}
          className={`w-full lg:w-1/2 text-left pt-10 sm:pt-12 lg:pt-0 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-8 leading-tight">
            <span className="block text-gray-600 ">Gather & Share</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-orange-400">
              Foundation
            </span>
          </h1>
          <p className="text-lg sm:text-2xl text-gray-700 mb-8 max-w-xl leading-relaxed font-medium">
            Empowering lives, spreading hope and building a brighter tomorrow—one act of kindness at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="https://forms.gle/KyHMuXK5da1zZzEp6"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-4 rounded-full hover:from-orange-500 hover:to-orange-600 transition-all duration-500 font-bold text-lg sm:text-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              aria-label="Become a volunteer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Become a volunteer</span>
              <ArrowRight size={28} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              className="group inline-flex items-center gap-3 border-2 border-blue-300 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-500 font-bold text-lg sm:text-2xl transform hover:-translate-y-1"
              onClick={handleContactClick}
              aria-label="Get in touch"
            >
              <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
              <span>Get In Touch</span>
            </button>
          </div>
        </div>

        {/* Right Content - Animated Carousel */}
        <div
          className={`w-full lg:w-1/2 mt-10 sm:mt-12 lg:mt-0 flex justify-center items-center relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <div
            className="relative bg-gradient-to-br from-orange-400 to-yellow-100 rounded-full overflow-hidden shadow-2xl flex items-center justify-center"
            style={{
              width: 'clamp(18rem, 90vw, 30rem)',
              height: 'clamp(18rem, 90vw, 30rem)',
            }}
            role="region"
            aria-label="Image carousel"
          >
            {/* Carousel Images */}
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Child image ${idx + 1}`}
                className={`absolute object-cover rounded-full transition-all duration-700 ${
                  currentIndex === idx
                    ? 'opacity-100 scale-100 z-20 animate-hero-bounce'
                    : 'opacity-0 scale-90 z-10'
                }`}
                style={{
                  width: '100%',
                  height: '100%',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/fallback-image.png';
                }}
                loading={currentIndex === idx ? 'eager' : 'lazy'}
              />
            ))}
            {/* Floating decorative elements */}
            <div className="absolute -top-8 -left-8 w-12 h-12 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-80 animate-bounce" aria-hidden="true"></div>
            <div className="absolute -bottom-8 -right-8 w-10 h-10 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-70 animate-pulse" aria-hidden="true"></div>
            <div className="absolute top-1/2 -left-10 w-8 h-8 bg-green-400 rounded-full opacity-60 animate-bounce delay-300" aria-hidden="true"></div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full" aria-hidden="true">
        <svg viewBox="0 0 1200 120" className="w-full h-16 sm:h-20 fill-white">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
      {/* Custom animation for hero image */}
      <style>{`
        @keyframes hero-bounce {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -52%) scale(1.04); }
        }
        .animate-hero-bounce {
          animation: hero-bounce 2.2s;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default KindergartenHero;