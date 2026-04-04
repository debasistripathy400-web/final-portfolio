import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const experienceData = [
  {
    year: "2023 - Present",
    role: "Senior Frontend Engineer",
    company: "TechNova Inc.",
    description: "Leading the front-end architecture for a high-traffic SaaS platform. Implemented complex UI components and state management, improving load times by 40%."
  },
  {
    year: "2021 - 2023",
    role: "Full Stack Developer",
    company: "Creative Studio Agency",
    description: "Developed award-winning web applications for global clients. Specialized in building custom WordPress themes and headless Shopify integrations."
  },
  {
    year: "2019 - 2021",
    role: "Junior Web Developer",
    company: "Startup Hub",
    description: "Assisted in the development of internal tools using React and Node.js. Wrote comprehensive unit tests and participated in daily code reviews."
  }
];

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.exp-header', {
        scrollTrigger: {
          trigger: '.exp-header',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      const items = gsap.utils.toArray('.timeline-item');
      items.forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out'
        });
      });

      // Animate the timeline line itself
      gsap.from('.timeline-line', {
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1
        },
        scaleY: 0,
        transformOrigin: "top",
        ease: "none"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-24 relative bg-black/50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="exp-header text-4xl md:text-5xl font-bold mb-20 text-center">
          Work <span className="text-gradient">Experience.</span>
        </h2>

        <div className="max-w-3xl mx-auto relative timeline-container">
          {/* Vertical Line */}
          <div className="timeline-line absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experienceData.map((exp, idx) => (
              <div
                key={idx}
                className={`timeline-item relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-primary border-4 border-accent-purple rounded-full transform md:-translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Content Box */}
                <div className={`w-full pl-20 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'
                  }`}>
                  <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-colors">
                    <span className="text-accent-blue font-mono text-sm mb-2 block">{exp.year}</span>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-gray-400 text-lg mb-4">{exp.company}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
