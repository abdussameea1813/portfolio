'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { text: 'Home', href: '#' },
    { text: 'About', href: '#about' },
    { text: 'Projects', href: '#projects' },
    { text: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      className="bg-gray-900 text-white p-4 fixed w-full top-0 z-10 shadow-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <a href="#" className="hover:text-gray-300 transition-all duration-300 transform hover:scale-105">
            My Portfolio
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="hover:text-gray-300 transition-all duration-300"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 * index, duration: 1, ease: 'easeOut' }}
              whileHover={{ scale: 1.2, color: '#FBBF24' }}
            >
              {item.text}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="absolute top-16 left-0 w-full bg-gray-800 p-4 flex flex-col items-center space-y-4 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white text-lg hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              {item.text}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
