import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Download, GraduationCap, BookOpen } from 'lucide-react';

const Resume = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.resume-header', {
        scrollTrigger: {
          trigger: '.resume-header',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      const cards = gsap.utils.toArray('.resume-card');
      gsap.from(cards, {
        scrollTrigger: {
          trigger: '.resume-container',
          start: 'top 80%',
        },
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "GITA Autonomous College, Bhubaneswar, Odisha",
      year: "2023 - Expected 2027",
      description: "CGPA: 8.0 / 10. Relevant Coursework: Data Structures & Algorithms, Artificial Intelligence, Machine Learning, DBMS, Full Stack Web Development."
    }
  ];

  return (
    <section id="resume" ref={sectionRef} className="py-24 relative bg-accent-soft px-4 sm:px-0">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="resume-header text-4xl md:text-5xl font-bold mb-10 text-center text-text">
          My <span className="text-gradient">Resume.</span>
        </h2>

        <div className="resume-container max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Education Column */}
          <div className="lg:col-span-2 space-y-2">
            <div className="flex items-center gap-3 mb-0">
              <GraduationCap className="text-accent-blue w-7 h-7" />
              <h3 className="text-2xl font-bold text-text tracking-tight">Education</h3>
            </div>
            
            {education.map((edu, idx) => (
              <div key={idx} className="resume-card bg-white dark:bg-slate-900 border border-border pt-4 pb-6 px-7 rounded-2xl transition-all group shadow-md">
                 <span className="text-violet-700 dark:text-violet-300 font-mono text-sm font-bold mb-2 block">{edu.year}</span>
                 <h4 className="text-xl font-bold text-slate-950 dark:text-white mb-1 group-hover:text-accent-blue transition-colors">{edu.degree}</h4>
                 <p className="text-slate-800 dark:text-slate-100 font-semibold mb-4 leading-relaxed">{edu.institution}</p>
                 <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed font-medium">{edu.description}</p>
              </div>
            ))}

            {/* Resume Preview */}
            <div className="resume-card mt-12 bg-surface border border-border p-4 rounded-2xl shadow-xl overflow-hidden group">
              <div className="flex items-center justify-between mb-4 px-2">
                <h3 className="text-xl font-bold text-text flex items-center gap-2">
                   <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse"></div>
                   Live Preview
                </h3>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent-blue text-sm hover:underline"
                >
                  Open in New Tab
                </a>
              </div>
              <div className="relative w-full h-[600px] bg-primary/20 rounded-xl border border-border overflow-hidden">
                 <iframe 
                   src="/resume.pdf#toolbar=0" 
                   className="w-full h-full border-none"
                   title="Resume Preview"
                 >
                    <p className="text-secondary p-8 text-center">
                      It seems your browser doesn't support embedded PDFs. 
                      <a href="/resume.pdf" className="text-accent-blue"> Click here to download it!</a>
                    </p>
                 </iframe>
              </div>
            </div>
          </div>

          {/* Download CTA Column */}
          <div className="lg:sticky lg:top-32 space-y-8">
            <div className="resume-card bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 border border-border p-8 rounded-3xl text-center backdrop-blur-md shadow-2xl">
              <div className="w-20 h-20 bg-surface rounded-2xl flex items-center justify-center mx-auto mb-6 border border-border">
                <BookOpen className="text-accent-blue w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-text mb-4">Looking for the full story?</h3>
              <p className="text-secondary text-sm mb-8 leading-relaxed">
                Download my complete resume to see a detailed breakdown of my experience, projects, and technical capabilities.
              </p>
              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-3 bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all duration-300 transform hover:scale-105 w-full shadow-lg"
              >
                Download CV
                <Download size={20} className="text-white dark:text-slate-950" />
              </a>
            </div>

            <div className="resume-card bg-surface border border-border p-6 rounded-2xl shadow-sm">
              <h4 className="text-text font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Open for opportunities
              </h4>
              <p className="text-secondary opacity-70 text-xs leading-relaxed">
                Currently looking for interesting projects and full-time roles in Full-Stack Development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
