import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFileAlt, FaPaperPlane } from 'react-icons/fa';

const SocialFloating = () => {
  const socialLinks = [
    { id: 'github', icon: <FaGithub size={18} />, url: 'https://github.com/debasistripathy400-web', color: 'bg-gray-800' },
    { id: 'instagram', icon: <FaInstagram size={18} />, url: 'https://www.instagram.com/d.ttripathyy._/', color: 'bg-[#E1306C]' },
    { id: 'linkedin', icon: <FaLinkedin size={18} />, url: 'https://www.linkedin.com/in/debasis-tripathy-4709b4323', color: 'bg-[#0077b5]' },
  ];

  return (
    <div className="fixed bottom-6 right-1 md:bottom-8 md:right-1 z-[999] flex flex-col items-center gap-3 scale-90 md:scale-100">
      {/* Social Links */}
      <div className="flex flex-col gap-2">
        {socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 opacity-70 hover:opacity-100 ${social.color}`}
          >
            {social.icon}
          </a>
        ))}
        <a
          href="/resume.pdf"
          target="_blank"
          className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 opacity-70 hover:opacity-100"
          title="Resume"
        >
          <FaFileAlt size={16} />
        </a>
      </div>

      {/* Main Action Button */}
      <a
        href="#contact"
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#0ea5e9] flex items-center justify-center text-white shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 mt-1 opacity-70 hover:opacity-100"
      >
        <FaPaperPlane size={22} />
      </a>
    </div>
  );
};

export default SocialFloating;
