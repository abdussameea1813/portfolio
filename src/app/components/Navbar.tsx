'use client';
import { motion } from 'framer-motion';

const Navbar = () => {
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

        {/* Desktop Menu Items */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="hover:text-gray-300 transition-all duration-300"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 * index, duration: 1, ease: 'easeOut' }}
              whileHover={{
                scale: 1.2,
                color: '#FBBF24',
                textShadow: '0 0 10px rgba(255, 255, 255, 0.6)',
              }}
            >
              {item.text}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-white transform hover:scale-110"
          >
            <i className="fas fa-bars"></i>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
