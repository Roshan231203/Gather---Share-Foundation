import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: "0", label: "Years of Experience" },
  { value: "0", label: "Donors" },
  { value: "0", label: "People Helped" },
  { value: "0", label: "Payment Collected" },
];

const teamMembers = [
  { name: "MR. Parthipan N S", role: "Director", bg: "bg-gradient-to-b from-amber-100 via-green-200 to-green-400 " },
  { name: "MRS. Myvizhi R", role: "Director", bg: "bg-gradient-to-b from-amber-100 via-green-200 to-green-400  " },
];

// Timeline steps data
const journeySteps = [
  {
    year: "Mission",
    title: "Our Mission",
    desc: "Where love becomes action, and action sparks transformation — we turn compassion into motion to nourish, heal, empower, and restore lives, creating ripples of hope that reach far beyond today.",
    icon: "⭐",
    image: "/images/mission.png",
  },
  {
    year: "Vision",
    title: "Our Vision",
    desc: "We imagine a world where every life is honored, every voice sparks change, and every hand reaches forward to build a future rooted in compassion, dignity, and shared hope.",
    icon: "⭐",
    image: "/images/vision.png",
  },
  {
    year: "Goals",
    title: "Our Goals",
    desc: [
      "To meet need with love and restore the Earth with purpose — because every act of care helps shape a future worth living.",
    ],
    icon: "⭐",
    image: "/images/goals23.png",
  },
];

// Custom hook for fade-in on scroll
const useScrollFadeIn = (numItems) => {
  const [visible, setVisible] = useState(new Array(numItems).fill(false));
  const refs = useRef(new Array(numItems).fill(null));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.current.indexOf(entry.target);
          if (entry.isIntersecting && index !== -1) {
            setVisible((prev) => {
              if (prev[index]) return prev;
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [numItems]);

  return [visible, refs];
};

export default function WarmTonedAbout() {
  const [statsVisible, statsRefs] = useScrollFadeIn(stats.length);
  const [teamVisible, teamRefs] = useScrollFadeIn(teamMembers.length);
  const [journeyRevealed, journeyRefs] = useScrollFadeIn(journeySteps.length);

  return (
    <div
      className="bg-amber-50"
      style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
    >
      {/* Hero Section */}
      <div
        className="h-40 md:h-60 bg-cover bg-center flex items-center justify-center text-black relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/about-cover.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          fontFamily: "'Roboto', sans-serif"
        }}
        aria-label="About Us Hero Section"
      >
        {/* Animated floating circles */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-4 left-8 w-8 h-8 bg-orange-200 rounded-full animate-bounce"></div>
          <div className="absolute top-10 right-16 w-6 h-6 bg-yellow-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-8 left-1/4 w-10 h-10 bg-amber-300 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-4 right-1/3 w-7 h-7 bg-orange-400 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-gradient-to-br from-orange-300 to-yellow-200 rounded-full opacity-60 animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center" style={{ fontFamily: "'Roboto', sans-serif" }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Roboto', sans-serif" }}>About Us</h1>
            <p className=" text-xl md:text-2xl opacity-80" style={{ fontFamily: "'Roboto', sans-serif" }}>
             Let's shape change together and meet the hearts behind the mission.

            </p>
          </div>
        </div>
        <style>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 6s linear infinite;
          }
        `}</style>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-orange-200 via-orange-50 to-orange-200 " style={{ fontFamily: "'Roboto', sans-serif" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Foundation Story */}
          <div className="grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-12 py-6 text-4xl shadow-2xl bg-gradient-to-l from-orange-400 to-orange-400  rounded-full text-white font-semibold mb-6" style={{ fontFamily: "'Roboto', sans-serif" }}>
                Our Foundation
              </div>
              <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: "'Roboto', sans-serif" }}>
                What is gathered in love must be shared with purpose.
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif" }}>
                <p className="text-2xl" style={{ fontFamily: "'Roboto', sans-serif" }}>
              That simple truth is where our story began and where it continous to evolve.
</p>

                <p className="text-2xl" style={{ fontFamily: "'Roboto', sans-serif" }}>
                  At Gather and Share Foundation, our journey begins with a powerful yet humble belief : <span className=" text-amber-600"> That love, when shared with intention, has the power to transform lives and entire communities.</span> We know that transformation doesn't always come from grand gestures - but from ordinary people choosing to care, again and again. It comes from small and continues actions - a warm meal served with dignity, a listening ear offered in a moment of struggle and a tree planted for a future unseen.
                </p>
                <p className="text-2xl" style={{ fontFamily: "'Roboto', sans-serif" }}>
                  <span className="text-amber-600"> Our mission is to turn compassion into action and empathy into real-world impact.</span> <br/>Every day, we show up to nourish the hungry, ignite young minds through education, uplift the unheard and care for both people and planet with purpose and heart.

                </p>
                <p className="text-2xl" style={{ fontFamily: "'Roboto', sans-serif" }}>
                 <span className="text-amber-600"> When you support Gather and Share, you are not just making a donation — you are fueling a movement.</span>   <br/>A movement that believes true generosity isn't about giving what's extra, but about choosing to care deeply, intentionally and often. 


                </p>

                <p className="text-2xl" style={{ fontFamily: "'Roboto', sans-serif" }}>
                 <span className="text-amber-600"> Your contribution becomes a ripple of hope, touching lives you may never meet and creating change that lasts longer than you will ever know.</span>  


                </p>

                <p className="text-2xl" style={{ fontFamily: "'Roboto', sans-serif" }}>
                 Because true impact isn't just measured in numbers — <span className="text-amber-600"> it's felt in lives uplifted, confidence regained and belonging restored. </span> It lives in the eyes of a child who dares to dream, in the quiet relief of a passerby who finally feels seen and in a community rediscovering its own strength.

                </p>
                <p className="text-2xl" style={{ fontFamily: "'Roboto', sans-serif" }}>
                 <span className="text-amber-600"> At Gather and Share Foundation, we are more than an organization. We are a bridge connecting those who have the heart to give with those who need a reason to hope.</span>  <span className="text-amber-600">  We are the living proof that when love is gathered and shared with purpose, it doesn't just change stories — it rewrites them. </span>


                </p>

              </div>
            </div>

            {/* <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-orange-300 to-red-200 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-t from-black/20 to-transparent flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    </div>
                  </div>
                 
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-400 rounded-full"></div>
                <div className="absolute top-1/2 -left-6 w-6 h-6 bg-red-400 rounded-full"></div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Updated Team Section */}
      <section className="py-20 relative overflow-hidden" style={{ fontFamily: "'Roboto', sans-serif" }}>
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-yellow-200 to-orange-300 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-gradient-to-r from-amber-300 to-yellow-400 rounded-full blur-2xl opacity-25 animate-bounce"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Modern Header Design */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-orange-400"></div>
              <span className="mx-6 px-8 py-3 text-lg font-semibold text-orange-600 bg-white/80 backdrop-blur-sm rounded-full border border-orange-200 shadow-lg">
                Leadership Team
              </span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-orange-400"></div>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-orange-600 to-amber-600 mb-6 leading-tight">
              Meet Our Founders
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Visionary leaders dedicated to transforming communities through compassion and action
            </p>
          </div>

          {/* Modern Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                ref={(el) => (teamRefs.current[idx] = el)}
                className={`group relative transition-all duration-700 ease-out transform hover:scale-105 ${
                  teamVisible[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ 
                  fontFamily: "'Roboto', sans-serif",
                  transitionDelay: `${idx * 200}ms`
                }}
              >
                {/* Card Container with Glass Effect */}
                <div className="relative bg-orange-200 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20 hover:shadow-3xl transition-all duration-500">
                  
                  {/* Gradient Background Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 via-amber-50/30 to-yellow-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content Container */}
                  <div className="relative z-10 p-8 lg:p-12 text-center">
                    
                    {/* Profile Image with Advanced Styling */}
                    <div className="relative mb-8 mx-auto w-48 h-48 lg:w-56 lg:h-56">
                      {/* Rotating Border Ring */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 animate-spin-slow p-1">
                        <div className="w-full h-full rounded-full bg-white"></div>
                      </div>
                      
                      {/* Image Container */}
                      <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                        <img
                          src={idx === 0 ? "/images/founder.png" : "/images/found.png"}
                          alt={member.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/images/fallback-founder.jpg';
                          }}
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full shadow-lg animate-bounce delay-300"></div>
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg animate-pulse"></div>
                    </div>
                    
                    {/* Name and Role */}
                    <div className="space-y-4">
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 group-hover:text-orange-700 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <div className="inline-block px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full text-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                        {member.role}
                      </div>
                    </div>
                    
                    {/* Decorative Quote or Description */}
                    <div className="mt-6 pt-6 border-t border-gray-200/50">
                      <p className="text-gray-600 text-lg italic leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                        {idx === 0 
                          ? "Leading with vision and dedication to create lasting impact in our communities."
                          : "Inspiring change through compassionate leadership and unwavering commitment to our mission."
                        }
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Decorative Elements */}
                <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-to-br from-orange-200 to-amber-200 rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 transform rotate-3 group-hover:rotate-6"></div>
              </div>
            ))}
          </div>

          {/* Additional Content Section */}
          <div className="mt-20 text-center">
            <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl border border-white/30">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Together, We Make a Difference</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our founders bring decades of combined experience in community service, leadership, and social impact. 
                Their shared vision of creating positive change has been the driving force behind every initiative we undertake.
              </p>
              <div className="flex justify-center items-center mt-8 space-x-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-orange-400"></div>
                <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-orange-400"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-br from-orange-200 via-orange-50 to-orange-200 " style={{ fontFamily: "'Roboto', sans-serif" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16" style={{ fontFamily: "'Roboto', sans-serif" }}>
            <p className="text-6xl font-black tracking-widest text-gray-900 uppercase mb-4" style={{ fontFamily: "'Roboto', sans-serif" }}>
              Our Journey
            </p>
            <h2 className="text-2xl font-serif text-gray-700 mb-6" style={{ fontFamily: "'Roboto', sans-serif" }}>
              To make basic needs universal, uplifting lives and empowering dreams without limits.
            </h2>
            <div className="w-24 h-1 bg-orange-400 mx-auto"></div>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            <div className="space-y-16">
              {journeySteps.map((step, index) => (
                <div
                  key={index}
                  ref={(el) => (journeyRefs.current[index] = el)}
                  className={`relative transition-all duration-700 ease-out ${
                    journeyRevealed[index]
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                  aria-label={`Journey step: ${step.title}`}
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-1/2 pr-8 pl-8">
                      <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`} style={{ fontFamily: "'Roboto', sans-serif" }}>
                        {/* Removed year display */}
                        {step.image && (
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-95 h-60 object-contain mx-auto mb-2"
                            onError={(e) => (e.target.src = '/images/fallback-journey.jpg')}
                          />
                        )}
                        <h3 className="text-6xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Roboto', sans-serif" }}>{step.title}</h3>
                        {Array.isArray(step.desc) ? (
                          <div className="space-y-1">
                            {step.desc.map((goal, i) => (
                              <p key={i} className="text-gray-600 text-2xl leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif" }}>{goal}</p>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-600  text-2xl leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif" }}>{step.desc}</p>
                        )}
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-xl border-4 border-white shadow-lg" style={{ fontFamily: "'Roboto', sans-serif" }}>
                      {step.icon}
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Custom Styles */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
        
        /* Additional smooth animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(251, 146, 60, 0.3); }
          50% { box-shadow: 0 0 30px rgba(251, 146, 60, 0.6); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}