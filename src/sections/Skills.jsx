import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const skillsData = [
  { category: "Frontend", items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "GSAP", "TypeScript"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "GraphQL", "PostgreSQL"] },
  { category: "Tools & DevOps", items: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest"] }
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skills-header', {
        scrollTrigger: {
          trigger: '.skills-header',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      const categories = gsap.utils.toArray('.skill-category');
      categories.forEach((category, i) => {
        gsap.from(category, {
          scrollTrigger: {
            trigger: category,
            start: 'top 85%',
          },
          x: i % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out'
        });

        const badges = category.querySelectorAll('.skill-badge');
        gsap.from(badges, {
          scrollTrigger: {
            trigger: category,
            start: 'top 85%',
          },
          scale: 0,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          delay: 0.3
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="skills-header text-4xl md:text-5xl font-bold mb-16 text-center">
          Technical <span className="text-gradient">Arsenal.</span>
        </h2>

        <div className="flex flex-col gap-12 max-w-4xl mx-auto">
          {skillsData.map((group, idx) => (
            <div key={idx} className="skill-category bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent-blue to-accent-purple transform origin-top group-hover:scale-y-100 transition-transform duration-500"></div>

              <h3 className="text-2xl font-bold text-white mb-6 ml-2">{group.category}</h3>

              <div className="flex flex-wrap gap-4 pl-2">
                {group.items.map((skill, i) => (
                  <div
                    key={i}
                    className="skill-badge px-6 py-3 bg-primary border border-white/10 rounded-lg text-gray-300 font-medium hover:border-accent-blue hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
