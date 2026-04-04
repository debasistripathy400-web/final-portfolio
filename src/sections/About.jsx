import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, MonitorSmartphone, Rocket } from 'lucide-react';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const texts = gsap.utils.toArray('.about-reveal');
      
      texts.forEach((text) => {
        gsap.from(text, {
          scrollTrigger: {
            trigger: text,
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      });

      const cards = gsap.utils.toArray('.feature-card');
      gsap.from(cards, {
        scrollTrigger: {
          trigger: ".features-container",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out"
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="about-reveal text-3xl md:text-5xl font-bold mb-8">
            Designing logic, building <span className="text-gradient">experiences.</span>
          </h2>
          
          <div className="space-y-6 text-secondary text-lg md:text-xl font-light leading-relaxed">
            <p className="about-reveal">
              I am a passionate software engineer specializing in building exceptional digital experiences. 
              Currently, I'm focused on rendering the intricate dance between design and high-performance code intuitive and captivating.
            </p>
            <p className="about-reveal">
              With a background in both front-end aesthetics and back-end logic, I bridge the gap between 
              a user's visual journey and the structural integrity of the application. Everything I build is 
              designed to be scalable, accessible, and pixel-perfect.
            </p>
          </div>

          <div className="features-container grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="feature-card bg-surface border border-border p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <MonitorSmartphone className="text-accent-blue mb-4 w-10 h-10" />
              <h3 className="text-xl font-bold text-text mb-2">Frontend</h3>
              <p className="text-secondary text-sm">React, Next.js, and modern CSS to craft engaging user interfaces.</p>
            </div>
            
            <div className="feature-card bg-surface border border-border p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <Code2 className="text-accent-purple mb-4 w-10 h-10" />
              <h3 className="text-xl font-bold text-text mb-2">Backend</h3>
              <p className="text-secondary text-sm">Scalable server architectures using Node.js, Python, and SQL/NoSQL databases.</p>
            </div>
            
            <div className="feature-card bg-surface border border-border p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <Rocket className="text-accent-blue mb-4 w-10 h-10" />
              <h3 className="text-xl font-bold text-text mb-2">Performance</h3>
              <p className="text-secondary text-sm">Optimizing loading speeds, animations, and SEO for maximum impact.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
