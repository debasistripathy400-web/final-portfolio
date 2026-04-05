import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Download } from 'lucide-react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython } from 'react-icons/fa';
import { SiDjango, SiPostgresql, SiTypescript, SiTailwindcss } from 'react-icons/si';

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.2 // Delaying to sync with Loader if needed
      })
        .from(".hero-subtitle", {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        }, "-=0.6")
        .from(".hero-buttons", {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        }, "-=0.4");

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={container}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[100px] -z-10 mix-blend-screen"></div>

      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Text Column */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1">
            <div className="overflow-hidden">
              <h2 className="hero-text text-sm md:text-lg font-medium text-accent-blue tracking-wider uppercase mb-3">
                Welcome to my portfolio
              </h2>
            </div>

            <div className="overflow-hidden leading-tight py-2 pr-4">
                Hi, I'm <br className="sm:hidden" /> <span className="text-gradient pr-2">Debasis Tripathy</span>
                <span className="text-sm font-normal text-secondary opacity-70 ml-2 block sm:inline mt-1 sm:mt-0 font-mono tracking-tight">(@debasis-dev)</span>

            </div>

            <div className="overflow-hidden leading-tight py-2">
              <h1 className="hero-text text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter text-secondary">
                Creative Developer.
              </h1>
            </div>

            <p className="hero-subtitle mt-6 max-w-xl text-secondary text-lg md:text-xl font-light">
              I build premium, interactive web experiences that merge design with high performance engineering.
              Bringing ideas to life on the internet.
            </p>

            <div className="hero-buttons mt-10 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-2 bg-white text-slate-950 border border-border dark:border-none px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all duration-300 transform hover:scale-105"
              >
                View Work
                <ArrowRight size={18} className="text-slate-950 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 bg-transparent border border-border text-text px-8 py-4 rounded-full font-semibold hover:bg-surface transition-all duration-300"
              >
                Resume
                <Download size={18} />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 bg-transparent border border-border text-text px-8 py-4 rounded-full font-semibold hover:bg-surface transition-all duration-300 opacity-70 hover:opacity-100"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-[3/4] lg:aspect-[4/5]">
              {/* Very subtle ambient shadow behind */}
              <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full"></div>

              {/* Clean, professional container */}
              <div className="w-full h-full relative rounded-2xl overflow-hidden border border-border shadow-[0_20px_50px_rgba(0,0,0,0.1)] transform hover:-translate-y-1 transition-transform duration-300 bg-surface">
                <img
                  src="/profile.jpeg"
                  alt="Debasis Tripathy"
                  className="w-full h-full object-cover object-center scale-[1.02]"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop";
                  }}
                />
                {/* Subtle inner shadow */}
                <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] rounded-2xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Background Tech Logos */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden md:block opacity-60">
        <FaReact size={60} className="absolute top-[20%] left-[8%] text-[#61DAFB]/20 blur-[1.5px] animate-[bounce_8s_infinite]" />
        <FaNodeJs size={50} className="absolute top-[70%] left-[10%] text-[#339933]/20 blur-[1px] animate-[bounce_10s_infinite_1s]" />
        <FaJs size={80} className="absolute top-[25%] left-[45%] text-[#F7DF1E]/10 blur-[2px] animate-[bounce_9s_infinite]" />
        <FaHtml5 size={45} className="absolute bottom-[20%] right-[40%] text-[#E34F26]/20 blur-[1px] animate-[bounce_7s_infinite_0.5s]" />
        <FaCss3Alt size={55} className="absolute top-[18%] right-[12%] text-[#1572B6]/20 blur-[1px] animate-[bounce_11s_infinite_0.2s]" />
        <SiDjango size={65} className="absolute bottom-[15%] left-[30%] text-[#092E20]/30 blur-[1.5px] animate-[bounce_8.5s_infinite_1.5s]" />

        {/* Additional Tech */}
        <FaPython size={70} className="absolute top-[10%] right-[30%] text-[#3776AB]/20 blur-[1.5px] animate-[bounce_9.5s_infinite_0.7s]" />
        <SiPostgresql size={60} className="absolute bottom-[30%] left-[15%] text-[#4169E1]/20 blur-[1px] animate-[bounce_8.2s_infinite_2s]" />
        <SiTypescript size={50} className="absolute top-[50%] right-[8%] text-[#3178C6]/20 blur-[1px] animate-[bounce_10.5s_infinite_1.2s]" />
        <SiTailwindcss size={55} className="absolute bottom-[10%] right-[20%] text-[#06B6D4]/20 blur-[1.5px] animate-[bounce_7.5s_infinite_0.3s]" />
      </div>

    </section>
  );
};

export default Hero;
