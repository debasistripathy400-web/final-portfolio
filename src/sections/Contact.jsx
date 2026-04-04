import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-header', {
        scrollTrigger: {
          trigger: '.contact-header',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      gsap.from('.contact-info > *', {
        scrollTrigger: {
          trigger: '.contact-info',
          start: 'top 80%',
        },
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out'
      });

      gsap.from('.contact-form', {
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 80%',
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy submit logic
    alert("Message sent! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="contact-header text-4xl md:text-5xl font-bold mb-16 text-center">
          Let's Work <span className="text-gradient">Together.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="contact-info space-y-10">
            <h3 className="text-3xl font-bold text-text mb-6">Get In Touch</h3>
            <p className="text-secondary text-lg">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-secondary">
                <div className="w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center text-accent-blue">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-xs text-secondary opacity-60 uppercase tracking-wider">Email</h4>
                  <p className="text-lg font-medium text-text">debasistripathy400@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-secondary">
                <div className="w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center text-accent-purple">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs text-secondary opacity-60 uppercase tracking-wider">Location</h4>
                  <p className="text-lg font-medium text-text">Bhubaneswar, Odisha</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-secondary">
                <div className="w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center text-accent-blue">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-xs text-secondary opacity-60 uppercase tracking-wider">Phone</h4>
                  <p className="text-lg font-medium text-text">+91 8117091712</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/debasistripathy400-web" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center text-text hover:bg-accent-blue hover:text-white hover:border-transparent transition-all">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/debasis-tripathy-4709b4323" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center text-text hover:bg-accent-blue hover:text-white hover:border-transparent transition-all">
                <FaLinkedin size={20} />
              </a>
              <a href="https://www.instagram.com/d.ttripathyy._/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center text-text hover:bg-accent-blue hover:text-white hover:border-transparent transition-all">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form bg-surface border border-border rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-primary/50 border border-border rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent-blue transition-colors"
                  placeholder="your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-primary/50 border border-border rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent-blue transition-colors"
                  placeholder="xxxxxxxxxxx@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-primary/50 border border-border rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent-blue transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
