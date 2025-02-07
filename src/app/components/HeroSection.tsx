'use client';
import { motion } from 'framer-motion';
import dp from '../../assets/dp.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa6';

export default function HeroSection() {
  return (
    <motion.section
      id="home"
      className="min-h-screen bg-gradient-to-b from-gray-800 to-black py-32 text-gray-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 md:px-0">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 50 }}
        >
          <h1 className="text-6xl sm:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 animate__animated animate__pulse animate__infinite">
            Abdussameea Patel
          </h1>
          <motion.p
            className="text-xl font-semibold mb-8 opacity-90 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Web Developer | Tech Enthusiast | Innovator
          </motion.p>
          <motion.a
            href="#projects"
            className="bg-yellow-500 text-black text-lg px-6 py-3 rounded-lg hover:bg-yellow-400 transition-all"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            View My Work
          </motion.a>
        </motion.div>

        {/* About Section */}
        <motion.div
          className="max-w-screen-lg mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="mx-auto w-40 h-40 rounded-full overflow-hidden mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={dp.src}
              alt="Abdussameea Patel"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.p
            className="text-xl max-w-xl mx-auto mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            I am a passionate web developer with a strong background in JavaScript, React, and Next.js. I love creating interactive and engaging user experiences.
          </motion.p>
          
          <div className="flex justify-center space-x-4">
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
        </motion.div>
      </div>
      
    </motion.section>
  );
}
