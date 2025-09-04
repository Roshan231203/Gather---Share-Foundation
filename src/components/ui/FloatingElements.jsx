import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const FloatingElements = ({ count = 30, colors = ['#FED832', '#FFE98A', '#FFF5D3'] }) => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const elements = Array.from(containerRef.current.children);
    
    elements.forEach(el => {
      gsap.to(el, {
        x: `random(-100, 100)`,
        y: `random(-100, 100)`,
        rotation: `random(-180, 180)`,
        duration: `random(20, 40)`,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });
    
    return () => {
      elements.forEach(el => {
        gsap.killTweensOf(el);
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => {
        const size = Math.random() * 30 + 5;
        const initialX = Math.random() * 100 - 50;
        const initialY = Math.random() * 100 - 50;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        return (
          <div
            key={i}
            className="absolute rounded-full opacity-50"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              left: `calc(${Math.random() * 100}% + ${initialX}px)`,
              top: `calc(${Math.random() * 100}% + ${initialY}px)`
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingElements;