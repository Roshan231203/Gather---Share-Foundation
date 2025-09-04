import React, { useState } from 'react';
import { Star, Sparkles, Heart, ArrowRight, Phone, Users, Smile, Gift, Sun } from 'lucide-react';

const images = [
  '/images/volunteer-removebg-preview.png',
  '/images/volun1.png',
  '/images/volun2.png',
  '/images/volun3.png',
];

export default function VolunteerNannyPage() {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-orange-200 via-orange-50 to-orange-200 relative overflow-hidden"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      {/* Decorative elements (static, no animation) */}
      <div className="absolute top-16 left-16">
        <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center shadow-xl">
          <Heart className="w-12 h-12 text-white" />
        </div>
      </div>
      <div className="absolute top-32 right-24">
        <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center shadow-xl">
          <Users className="w-10 h-10 text-white" />
        </div>
      </div>
      <div className="absolute bottom-24 left-32">
        <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-xl">
          <Sun className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="absolute bottom-32 right-16">
        <div className="w-18 h-18 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-xl">
          <Gift className="w-9 h-9 text-white" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-8" style={{ fontFamily: "'Roboto', sans-serif" }}>
        {/* Header Section */}
        <div className="text-center mb-16" style={{ fontFamily: "'Roboto', sans-serif" }}>
          <div className="mb-8">
            <h1 className="text-7xl lg:text-9xl font-black mb-6 leading-none" style={{ fontFamily: "'Roboto', sans-serif" }}>
              <span className="inline-block text-white drop-shadow-lg" style={{ textShadow: '4px 4px 0px #FF6B6B, 8px 8px 0px #4ECDC4', fontFamily: "'Roboto', sans-serif" }}>
                VOLUNTEER
              </span>
              <br />
              <span className="inline-block text-white drop-shadow-lg" style={{ textShadow: '4px 4px 0px #45B7D1, 8px 8px 0px #96CEB4', fontFamily: "'Roboto', sans-serif" }}>
                FAMILY
              </span>
            </h1>
            <p className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'Roboto', sans-serif" }}>
              The World Needs Your AMAZING Spark!
            </p>
          </div>

          {/* Image Gallery with animation */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16" style={{ fontFamily: "'Roboto', sans-serif" }}>
            {images.map((img, idx) => (
              <div
                key={idx}
                className="group relative"
                style={{ fontFamily: "'Roboto', sans-serif" }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="relative">
                  <div className={`relative bg-white rounded-3xl p-3 shadow-2xl transition-transform duration-500 ${hovered === idx ? 'animate-bounce-slow scale-105' : ''}`}>
                    <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-100 to-pink-100">
                      <img
                        src={img}
                        alt={`Happy Volunteer ${idx + 1}`}
                        className={`w-full h-full object-cover transition-transform duration-500 ${hovered === idx ? 'scale-110 rotate-3' : ''}`}
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/images/volunteer-removebg-preview.png';
                        }}
                      />
                    </div>
                  </div>
                  <div className="absolute -top-3 -right-3 opacity-80">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-white fill-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-3 -left-3 opacity-80">
                    <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white fill-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Animation style */}
          <style>{`
            @keyframes bounce-slow {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-16px); }
            }
            .animate-bounce-slow {
              animation: bounce-slow 1s;
            }
          `}</style>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-1 gap-12 items-center max-w-7xl mx-auto" style={{ fontFamily: "'Roboto', sans-serif" }}>
          {/* Left Text */}
          <div className="space-y-8" style={{ fontFamily: "'Roboto', sans-serif" }}>
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-pink-200" style={{ fontFamily: "'Roboto', sans-serif" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-800" style={{ fontFamily: "'Roboto', sans-serif" }}>You're AMAZING!</h3>
                </div>
                <p className="text-2xl text-gray-700 leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif" }}>
                  At Gather and Share Foundation, volunteers aren't just helpers — you are <span className="font-bold text-pink-600">changemakers</span>, <span className="font-bold text-purple-600">connectors</span>, and the living spirit of <span className="font-bold text-cyan-600">compassion</span> in motion!
                </p>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-blue-200" style={{ fontFamily: "'Roboto', sans-serif" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-800" style={{ fontFamily: "'Roboto', sans-serif" }}>Your Impact Rocks!</h3>
                </div>
                <p className="text-2xl text-gray-700 leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif" }}>
                  Every time you lend your hands, offer your time, or simply show up with care, you bring <span className="font-bold text-yellow-600">light</span> to someone's darkest day — and <span className="font-bold text-green-600">hope</span> to a world that needs it!
                </p>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-green-200" style={{ fontFamily: "'Roboto', sans-serif" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-800" style={{ fontFamily: "'Roboto', sans-serif" }}>Together We Shine!</h3>
                </div>
                <p className="text-2xl text-gray-700 leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif" }}>
                  Here, your actions matter. Your kindness counts. Whether you're serving meals, teaching a child, planting a tree, or simply listening, you're helping to build a more <span className="font-bold text-purple-600">just</span>, <span className="font-bold text-pink-600">loving</span>, and <span className="font-bold text-green-600">sustainable</span> world!
                </p>
              </div>
              <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-3xl p-8 shadow-2xl border-4 border-orange-200" style={{ fontFamily: "'Roboto', sans-serif" }}>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'Roboto', sans-serif" }}>THANK YOU for choosing to serve!</h3>
                  <p className="text-2xl text-gray-700 font-semibold" style={{ fontFamily: "'Roboto', sans-serif" }}>
                    Together, we don't just make a difference —  <span className="text-orange-600 font-black"> we become the difference !</span> 
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center" style={{ fontFamily: "'Roboto', sans-serif" }}>
              <button
                className="bg-orange-400 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                style={{ fontFamily: "'Roboto', sans-serif" }}
                onClick={() => window.location.href = 'https://forms.gle/KyHMuXK5da1zZzEp6'}
                aria-label="Become a Volunteer"
              >
                Become a Volunteer
                <ArrowRight className="w-16 h-16" />
              </button>
              <button
                className="bg-orange-400 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                style={{ fontFamily: "'Roboto', sans-serif" }}
                onClick={() => window.location.href = '/contact'}
                aria-label="Get In Touch"
              >
                Get In Touch
                <Phone className="w-16 h-16" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}