import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const experienceData = [
  {
    year: "2026 (Upcoming)",
    role: "Software Engineering Intern",
    company: "National Aluminium Company Limited (NALCO)",
    location: "Angul, Odisha",
    description: "Assisting in the development and optimization of industrial software solutions. Working with enterprise systems to improve operational efficiency and data management."
  },
  {
    year: "Sep 2025 – Present",
    role: "Full Stack Development Intern",
    company: "Odisha Computer Application Centre",
    location: "Bhubaneswar, India",
    description: "Developed backend features for government web applications using Django. Designed scalable relational database schemas using PostgreSQL. Built responsive UI components with HTML, CSS, and Bootstrap. Contributed to full-stack architecture and performance optimization for public sector digital systems."
  },
  {
    year: "2023 - 2024",
    role: "Junior Web Developer",
    company: "Freelance / Personal Projects",
    description: "Built premium, interactive web experiences and explored modern frontend frameworks including React and GSAP."
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
    <section id="experience" ref={sectionRef} className="py-24 relative bg-primary/40 backdrop-blur-sm">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="exp-header text-4xl md:text-5xl font-bold mb-20 text-center">
          Work <span className="text-gradient">Experience.</span>
        </h2>

        <div className="max-w-3xl mx-auto relative timeline-container">
          {/* Vertical Line */}
          <div className="timeline-line absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experienceData.map((exp, idx) => (
              <div
                key={idx}
                className={`timeline-item relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-primary border-4 border-accent-purple rounded-full transform md:-translate-x-1/2 flex items-center justify-center z-10 shadow-lg">
                  <div className="w-3 h-3 bg-accent-blue rounded-full"></div>
                </div>

                {/* Content Box */}
                <div className={`w-full pl-20 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'
                  }`}>
                  <div className="bg-surface border border-border p-6 md:p-8 rounded-2xl hover:bg-white/5 transition-colors shadow-xl">
                    <span className="text-accent-blue font-mono text-sm mb-2 block">{exp.year}</span>
                    <h3 className="text-2xl font-bold text-text mb-1">{exp.role}</h3>
                    <h4 className="text-secondary text-lg mb-1">{exp.company}</h4>
                    {exp.location && <p className="text-secondary opacity-70 text-sm mb-4">📍 {exp.location}</p>}
                    <p className="text-secondary text-sm leading-relaxed">
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
