import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Job Board Application",
    description: "A comprehensive platform connecting employers and job seekers, featuring a professional landing page, robust search functionality, and optimized accessibility.",
    tech: ["Django", "Python", "PostgreSQL", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
    github: "https://github.com/debasistripathy400-web",
    live: "#"
  },
  {
    id: 2,
    title: "Photobooth Station",
    description: "An interactive, digital photobooth application designed for live events, allowing users to capture, customize, and share memories instantly.",
    tech: ["React", "Node.js", "WebRTC", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
    github: "https://github.com/debasistripathy400-web",
    live: "#"
  },
  {
    id: 3,
    title: "Social App",
    description: "An Instagram-inspired social media platform with real-time notifications, sequential story playback, and advanced user-managed content controls.",
    tech: ["Django", "JavaScript", "PostgreSQL", "WebSockets"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    github: "https://github.com/debasistripathy400-web",
    live: "#"
  },
  {
    id: 4,
    title: "Pocket Finance",
    description: "A secure, production-ready expense tracker featuring advanced BCrypt hashing, JWT token support, and Neon PostgreSQL integration for reliable financial data management.",
    tech: ["Django", "Neon Postgres", "REST API", "Docker"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop",
    github: "https://github.com/debasistripathy400-web",
    live: "#"
  },
  {
    id: 5,
    title: "Quiz App",
    description: "An interactive educational platform featuring real-time quiz forms, dynamic score evaluation, and optimized performance.",
    tech: ["Django", "Python", "JavaScript", "HTML/CSS"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop",
    github: "https://github.com/debasistripathy400-web",
    live: "#"
  },
  {
    id: 6,
    title: "Dark Vault Wallpaper",
    description: "A sleek, premium gallery application serving high-resolution dark-themed wallpapers with immersive hover interactions.",
    tech: ["React", "Vite", "Tailwind CSS", "GSAP"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    github: "https://github.com/debasistripathy400-web",
    live: "#"
  }
];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-header', {
        scrollTrigger: {
          trigger: '.project-header',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      const projectCards = gsap.utils.toArray('.project-card');
      projectCards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: i % 2 === 0 ? 0 : 0.2 // Stagger odd/even cards slightly
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative bg-primary/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="project-header text-4xl md:text-5xl font-bold mb-16 text-center">
          Featured <span className="text-gradient">Projects.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card group block relative rounded-2xl overflow-hidden bg-surface border border-border hover:border-accent-blue/30 transition-all duration-500 shadow-xl"
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              
              <div className="p-8 relative z-20">
                <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-accent-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-xs font-medium border border-border rounded-full text-secondary bg-primary/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a href={project.live} className="flex items-center gap-2 text-sm font-semibold text-text hover:text-accent-blue transition-colors">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a href={project.github} className="flex items-center gap-2 text-sm font-semibold text-text hover:text-accent-purple transition-colors">
                    <FaGithub size={18} /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
