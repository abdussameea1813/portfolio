'use client';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gray-900 py-16 text-gray-300">
      <div className="container mx-auto px-6 md:px-0">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>

        <motion.div
          className="max-w-xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-xl font-semibold mb-4">Feel free to reach out for collaborations or inquiries.</p>
          <a
            href="mailto:abdussameeapatel18@gmail.com"
            className="inline-flex items-center text-lg font-medium bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition-all"
          >
            <FaEnvelope className="mr-2" />
            Send an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
