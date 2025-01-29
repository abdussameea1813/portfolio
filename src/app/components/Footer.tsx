'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-6 md:px-0 flex flex-col md:flex-row items-center justify-between">
        {/* Footer Left - Branding */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Abdussameea Patel</h3>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Footer Center - Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/abdussameea1813"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/abdussameea-patel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:abdussameea1@gmail.com"
            className="hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Footer Right - Quick Links */}
        <div className="mt-4 md:mt-0">
          <nav className="space-x-4 text-sm">
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
