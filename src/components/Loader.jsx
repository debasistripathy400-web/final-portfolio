import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    tl.to(textRef.current, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power3.out"
    })
    .to(textRef.current, {
      duration: 0.8,
      opacity: 0,
      y: -20,
      ease: "power3.in",
      delay: 0.5
    })
    .to(loaderRef.current, {
      duration: 1,
      yPercent: -100,
      ease: "power4.inOut"
    });
  }, [onComplete]);

  return (
    <div 
      ref={loaderRef} 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div 
        ref={textRef} 
        className="opacity-0 translate-y-8 text-4xl md:text-6xl font-bold tracking-tighter text-white"
      >
        PORTFOLIO<span className="text-accent-blue">.</span>
      </div>
    </div>
  );
};

export default Loader;
