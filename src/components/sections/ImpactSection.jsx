import React, { useRef, useEffect, useState } from 'react';
import { Award } from 'lucide-react';

// Image paths should NOT include "/public" for React public folder
const statistics = [
  {
    id: 1,
    iconImage: '/images/vfq-.png',
    iconComponent: null,
    number: 0,
    displayNumber: '0',
    label: 'Donors',
    color: 'from-pink-400 to-purple-500',
    bgColor: 'from-gray-300 to-gray-900',
  },
  {
    id: 2,
    iconImage: '/images/evt.png',
    iconComponent: null,
    number: 0,
    displayNumber: '0',
    label: 'Events Organized',
    color: 'from-blue-400 to-indigo-500',
    bgColor: 'from-gray-400 to-blue-900',
  },
  {
    id: 3,
    iconImage: '/images/food.png',
    iconComponent: null,
    number: 0,
    displayNumber: '0',
    label: 'Meals Served',
    color: 'from-rose-400 to-pink-500',
    bgColor: 'from-gray-800 to-pink-500',
  },
  {
    id: 4,
    iconImage: '/images/treeplant.png',
    iconComponent: null,
    number: 0,
    displayNumber: '0',
    label: 'Trees Planted',
    color: 'from-green-400 to-emerald-500',
    bgColor: 'from-gray-800 to-emerald-500',
  },
  {
    id: 5,
    iconImage: '/images/goals.png',
    iconComponent: null,
    number: 0,
    displayNumber: '0',
    label: 'Funds Collected',
    color: 'from-red-400 to-red-500',
    bgColor: 'from-yellow-200 to-yellow-700',
  },
];

const AnimatedCounter = ({ endValue, duration = 2000, suffix = '', separator = false }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;
    const startValue = 0;
    const endVal = parseInt(endValue, 10);
    const increment = endVal / (duration / 16); // ~60fps
    let current = startValue;

    const timer = setInterval(() => {
      current += increment;
      if (current >= endVal) {
        current = endVal;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, 16);

    return () => clearInterval(timer);
  }, [endValue, duration, hasStarted]);

  const formatNumber = (num) => {
    if (separator && num >= 1000) {
      return num.toLocaleString();
    }
    return num.toString();
  };

  const startAnimation = () => {
    setHasStarted(true);
  };

  useEffect(() => {
    const element = document.getElementById(`counter-${endValue}`);
    if (element) {
      element.startAnimation = startAnimation;
    }
  }, [endValue]);

  return (
    <span id={`counter-${endValue}`}>
      {formatNumber(count)}{suffix}
    </span>
  );
};

const ImpactSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, statistics.length);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            if (!visibleCards.includes(index)) {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
                const counterElement = entry.target.querySelector('[id^="counter-"]');
                if (counterElement && counterElement.startAnimation) {
                  counterElement.startAnimation();
                }
              }, index * 200);
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [visibleCards]);

  return (
    <div
      className="min-h-screen bg-gradient-to-br  from-orange-200 via-orange-200 to-orange-200"
      style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-200 rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-orange-200 rounded-full opacity-30 animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-stone-200 rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-amber-300 rounded-full opacity-30 animate-float-delayed"></div>
      </div>

      <section className="relative py-20 md:py-32" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100"></div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-800">
              This is the impact{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 animate-pulse">
                You
              </span>{' '}
              helped us achieve
            </h2>
            <p className="text-xl md:text-4xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Every contribution creates ripples of change that transform lives and build stronger.
            </p>
          </div> 

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {statistics.map((stat, index) => {
              const isVisible = visibleCards.includes(index);
              return (
                <div
                  key={stat.id}
                  ref={(el) => (cardsRef.current[index] = el)}
                  data-index={index}
                  className={`relative group flex flex-col h-full transition-all duration-700 hover:scale-105 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  aria-label={`Statistics for ${stat.label}`}
                >
                  {/* Main Card */}
                  <div className="flex flex-col h-full bg-orange-300/80 border-2 border-orange-300 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 transform rotate-45 translate-x-16 -translate-y-16">
                        <div className={`w-full h-full bg-gradient-to-br ${stat.color}`}></div>
                      </div>
                    </div>
                    {/* Icon Section */}
                    <div className="relative z-10 mb-6">
                      <div className="flex items-center justify-center gap-4">
                        <div
                          className={`bg-gradient-to-r ${stat.color} p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}
                        >
                          {stat.iconImage ? (
                            <img
                              src={stat.iconImage.replace('/public', '')}
                              alt={`${stat.label} icon`}
                              className="w-16 h-16 object-contain"
                              onError={(e) => { e.target.onerror = null; e.target.src = '/images/fallback-icon.png'; }}
                            />
                          ) : (
                            stat.iconComponent && <stat.iconComponent className="w-6 h-6 text-white" />
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Number Display */}
                    <div className="relative z-10 mb-4">
                      <h3 className={`text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                        <AnimatedCounter endValue={stat.number} separator={true} duration={3000} />
                      </h3>
                    </div>
                    {/* Label */}
                    <p className="relative z-10 text-gray-800 text-lg leading-relaxed font-medium mt-auto">
                      {stat.label}
                    </p>
                    {/* Hover Effect Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                    ></div>
                  </div>

                  {/* Floating Achievement Badge */}
                  <div
                    className={`absolute -top-3 -right-3 bg-gradient-to-r ${stat.color} p-2 rounded-full shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300`}
                  >
                    <Award className="w-4 h-4 text-white" aria-hidden="true" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default ImpactSection;
