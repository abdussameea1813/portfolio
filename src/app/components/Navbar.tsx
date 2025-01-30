'use client';
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: '#about', text: 'About' },
    { href: '#education', text: 'Education' },
    { href: '#skills', text: 'Skills' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <nav className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#" className="hover:text-gray-300">
            My Portfolio
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-gray-300 transition-colors duration-300"
            >
              {item.text}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-black transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex justify-end p-4">
            <button
              className="text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
              onClick={toggleMenu}
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col space-y-4 p-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-gray-300 transition-colors duration-300"
                onClick={toggleMenu}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
