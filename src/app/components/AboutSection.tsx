'use client';
import photo from '@/assets/photo2.jpg';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-900 py-16 text-center text-gray-300">
      <div className="container mx-auto px-6 md:px-0">
        {/* Avatar */}
        <motion.div
          className="mx-auto w-40 h-40 rounded-full overflow-hidden mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={photo.src} // Replace with your image URL
            alt="Abdussameea Patel"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Name & Description */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Abdussameea Patel
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Frontend Developer | Passionate About Code, Design, and Innovation
        </motion.p>

        {/* Social Media Icons */}
        <motion.div
          className="flex justify-center space-x-6 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="https://github.com/abdussameea1813/" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl hover:text-gray-100 transition-colors" />
          </a>
          <a href="https://linkedin.com/in/abdussameea-patel" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl hover:text-gray-100 transition-colors" />
          </a>
          <a href="https://instagram.com/abdussameea1813" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl hover:text-gray-100 transition-colors" />
          </a>
        </motion.div>

        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="/assets/Abdussameea Resume.docx" // Replace with the actual path to your CV
            download="Abdussameea_Patel_CV.docx"
            className="inline-block bg-blue-500 text-gray-900 font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
