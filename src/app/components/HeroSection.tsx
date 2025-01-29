'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
      <div className="text-center space-y-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Abdussameea Patel
        </motion.h1>
        <motion.p
          className="text-lg text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Frontend Developer | Building Cool Things
        </motion.p>
      </div>
    </section>
  );
}
