'use client';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import { DiNodejs, DiGit, DiMongodb } from 'react-icons/di';

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-gray-900 py-16 text-center text-gray-300">
      <div className="container mx-auto px-6 md:px-0">
        {/* Skills Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-12 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>

        {/* Skill Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* HTML Skill */}
          <motion.div
            className="skill-item p-8 rounded-lg bg-gray-800 hover:bg-gray-700 shadow-xl transition-all"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaHtml5 className="text-6xl text-orange-600 mx-auto mb-4" />
            <p className="text-lg font-semibold">HTML5</p>
          </motion.div>

          {/* CSS Skill */}
          <motion.div
            className="skill-item p-8 rounded-lg bg-gray-800 hover:bg-gray-700 shadow-xl transition-all"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FaCss3Alt className="text-6xl text-indigo-500 mx-auto mb-4" />
            <p className="text-lg font-semibold">CSS3</p>
          </motion.div>

          {/* JavaScript Skill */}
          <motion.div
            className="skill-item p-8 rounded-lg bg-gray-800 hover:bg-gray-700 shadow-xl transition-all"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaJsSquare className="text-6xl text-yellow-500 mx-auto mb-4" />
            <p className="text-lg font-semibold">JavaScript</p>
          </motion.div>

          {/* React Skill */}
          <motion.div
            className="skill-item p-8 rounded-lg bg-gray-800 hover:bg-gray-700 shadow-xl transition-all"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <FaReact className="text-6xl text-cyan-400 mx-auto mb-4" />
            <p className="text-lg font-semibold">React</p>
          </motion.div>

          {/* Node.js Skill */}
          <motion.div
            className="skill-item p-8 rounded-lg bg-gray-800 hover:bg-gray-700 shadow-xl transition-all"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <DiNodejs className="text-6xl text-green-500 mx-auto mb-4" />
            <p className="text-lg font-semibold">Node.js</p>
          </motion.div>

          {/* Git Skill */}
          <motion.div
            className="skill-item p-8 rounded-lg bg-gray-800 hover:bg-gray-700 shadow-xl transition-all"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <DiGit className="text-6xl text-red-500 mx-auto mb-4" />
            <p className="text-lg font-semibold">Git</p>
          </motion.div>

          {/* MongoDB Skill */}
          <motion.div
            className="skill-item p-8 rounded-lg bg-gray-800 hover:bg-gray-700 shadow-xl transition-all"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <DiMongodb className="text-6xl text-green-400 mx-auto mb-4" />
            <p className="text-lg font-semibold">MongoDB</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
