'use client';

import { motion } from 'framer-motion';

export default function EducationSection() {
  return (
    <section id="education" className="bg-gray-900 py-16 text-center text-gray-300">
      <div className="container mx-auto px-6 md:px-0">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Education
        </motion.h2>

        {/* Timeline */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="text-left flex-1">
              <h3 className="text-xl font-bold">Computer Systems Technician - Software Support</h3>
              <p className="text-gray-400">Mohawk College Hamilton, 2023 - Present</p>
            </div>
            <div className="text-left flex-1">
              <p className="text-gray-400">Focus on Software Development</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="text-left flex-1">
              <h3 className="text-xl font-bold">Computer Engineering (Diploma)</h3>
              <p className="text-gray-400">Gujarat Technological University, 2018 - 2021</p>
            </div>
            <div className="text-left flex-1">
              <p className="text-gray-400">Focused on Web Development, Databases, and Programming</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
