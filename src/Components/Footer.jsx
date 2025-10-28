import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Om Gadge</h3>
          <p className="text-gray-400 text-sm">
            Frontend developer passionate about creating interactive web experiences. Always exploring new technologies and building meaningful projects.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">Home</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition-colors">About</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Email: <a href="mailto:omgadge19434@email.com" className="hover:text-white">omgadge19434@email.com</a></li>
            <li>Phone: <a href="tel:+91 8767795698" className="hover:text-white">+91 87677 95698</a></li>
            <li>Location: Pune, India</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Me</h4>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/om-gadge-a4827b226/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/OmGadge01" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="mailto:omgadge19434@email.com" className="hover:text-white transition-colors">
              <FaEnvelope size={24} />
            </a>
            <a href="https://x.com/omgadge19434" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Credit */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Made by <span className="text-white font-semibold">Om Gadge</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
