import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Return early if it's a mobile device or touch environment
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
      
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out"
      });
    };

    const onMouseDown = () => {
      gsap.to(cursor, { scale: 0.8, duration: 0.2 });
      gsap.to(follower, { scale: 1.5, duration: 0.2 });
    };

    const onMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
      gsap.to(follower, { scale: 1, duration: 0.2 });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Hover effect for links and buttons
    const addHoverListeners = () => {
      const interactables = document.querySelectorAll('a, button, input, textarea');
      interactables.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          gsap.to(follower, { scale: 2, backgroundColor: "rgba(14, 165, 233, 0.2)", duration: 0.3 });
          gsap.to(cursor, { opacity: 0, duration: 0.3 });
        });
        el.addEventListener('mouseleave', () => {
          gsap.to(follower, { scale: 1, backgroundColor: "transparent", duration: 0.3 });
          gsap.to(cursor, { opacity: 1, duration: 0.3 });
        });
      });
    };

    // Need a small delay to make sure elements are rendered
    setTimeout(addHoverListeners, 1000);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
      ></div>
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[99] transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
      ></div>
    </>
  );
};

export default CustomCursor;
