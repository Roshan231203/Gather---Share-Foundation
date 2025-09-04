import React, { useRef, useEffect, useState } from 'react';
import { Users } from 'lucide-react';

const programs = [
  {
    id: 1,
    title: 'Donors',
    icon: (
      <img
        src="/images/Picture1.png"
        alt="Donors"
        className="w-[110px] h-[110px] object-contain" // Increased size
        onError={e => {
          e.target.onerror = null;
          e.target.src = '/src/assets/images/fallback-icon.png';
        }}
      />
    ),
    color: 'from-orange-300 to-orange-200',
    borderColor: 'border-orange-300',
    hoverColor: 'hover:from-orange-200 hover:to-orange-100',
    description:
      'Because of you, Change is happening',
    stats: '0',
  },
  {
    id: 2,
    title: 'Events Organized',
    icon: (
      <img
        src="/images/Picture2.png"
        alt="Events Organized"
        className="w-[90px] h-[90px] object-contain" // Increased size
        onError={e => {
          e.target.onerror = null;
          e.target.src = '/src/assets/images/fallback-icon.png';
        }}
      />
    ),
    color: 'from-orange-300 to-orange-200',
    borderColor: 'border-orange-300',
    hoverColor: 'hover:from-orange-200 hover:to-orange-100',
    description: 'Where purpose meets people — events that inspire change',
    stats: '0',
  },
  {
    id: 3,
    title: 'Lives Impacted',
    icon: (
      <img
        src="/images/Picture7.png"
        alt="Lives Impacted"
        className="w-[90px] h-[90px] object-contain" // Increased size
        onError={e => {
          e.target.onerror = null;
          e.target.src = '/src/assets/images/fallback-icon.png';
        }}
      />
    ),
    color: 'from-orange-300 to-orange-200',
    borderColor: 'border-orange-300',
    hoverColor: 'hover:from-orange-200 hover:to-orange-100',
    description:
      'More than numbers — these are lives lifted, hearts healed and futures brightened',
    stats: '0',
  },
  {
    id: 4,
    title: 'Meals Served',
    icon: (
      <img
        src="/images/Picture4.png"
        alt="Meals Served"
        className="w-[90px] h-[90px] object-contain" // Increased size
        onError={e => {
          e.target.onerror = null;
          e.target.src = '/src/assets/images/fallback-icon.png';
        }}
      />
    ),
    color: 'from-orange-300 to-orange-200',
    borderColor: 'border-orange-300',
    hoverColor: 'hover:from-orange-200 hover:to-orange-100',
    description: 'Serving meals and hope on every plate',
    stats: '0',
  },
  {
    id: 5,
    title: 'Trees Planted',
    icon: (
      <img
        src="/images/Picture5.png"
        alt="Trees Planted"
        className="w-[90px] h-[90px] object-contain" // Increased size
        onError={e => {
          e.target.onerror = null;
          e.target.src = '/src/assets/images/fallback-icon.png';
        }}
      />
    ),
    color: 'from-orange-300 to-orange-200',
    borderColor: 'border-orange-300',
    hoverColor: 'hover:from-orange-200 hover:to-orange-100',
    description: 'A gentle act today, a greener world forever',
    stats: '0',
  },
  {
    id: 6,
    title: 'Funds Collected',
    icon: (
      <img
        src="/images/help2.png"
        alt="Funds Collected"
        className="w-[90px] h-[90px] object-contain" // Increased size
        onError={e => {
          e.target.onerror = null;
          e.target.src = '/src/assets/images/fallback-icon.png';
        }}
      />
    ),
    color: 'from-orange-300 to-orange-200',
    borderColor: 'border-orange-300',
    hoverColor: 'hover:from-orange-200 hover:to-orange-100',
    description: 'Collected with care, invested with intention',
    stats: '0',
  },
];

const ProgramsSection = () => {
  const cardsRef = useRef([]);
  const [visible, setVisible] = useState(Array(programs.length).fill(false));

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardsRef.current.findIndex((el) => el === entry.target);
          if (entry.isIntersecting && index !== -1 && !visible[index]) {
            setTimeout(() => {
              setVisible((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }, index * 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line
  }, [visible]);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-orange-200 via-orange-50 to-orange-200"
      style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
    >
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/30 to-orange-100/30"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="md:text-8xl font-bold bg-gradient-to-r from-slate-900 via-amber-900 to-orange-900 bg-clip-text text-transparent mb-8">
              Our Impact Programs
            </h1>
            <p className="text-3xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              From need to nurture, from hope to horizon — our programs open hearts and doors to dignity, opportunity and transformative change.

            </p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.id}
              ref={el => (cardsRef.current[index] = el)}
              className={`group relative bg-gradient-to-br ${program.color} ${program.hoverColor} 
                rounded-2xl p-6 border-2 ${program.borderColor} shadow-lg
                flex flex-col h-full min-h-[350px]
                transform transition-all duration-300 ease-out cursor-pointer
                ${visible[index] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}
                hover:shadow-2xl hover:scale-105 hover:-translate-y-2
              `}
              aria-label={`View details for ${program.title}`}
            >
              <div className="absolute top-4 right-4 w-20 h-20 bg-orange-200 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-orange-200 blur-lg"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-center w-32 h-32 bg-white/60 backdrop-blur-sm rounded-2xl mb-6 mx-auto
                  transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 border-4 border-orange-300 shadow-lg">
                  {program.icon}
                </div>

                <h3 className="text-4xl font-bold text-slate-800 mb-4 text-center group-hover:text-slate-900 transition-colors">
                  {program.title}
                </h3>

                <p className="text-gray-600 text-xl text-center flex-grow mb-6">
                  {program.description}
                </p>

                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 mt-auto">
                  <div className="text-4xl font-bold text-slate-800 mb-1">{program.stats}</div>
                  <div className="text-xl text-gray-500">Total</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="justify-items-center text-xl md:text-xl text-green-700 max-w-xl mx-auto leading-relaxed mb-6 px-4">
       Each contribution is a spark of hope — sending ripples that transform lives and bring communities together.
 </p>
    </div>
  );
};

export default ProgramsSection; 