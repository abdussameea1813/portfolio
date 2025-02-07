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
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          My Skills
        </motion.h2>

        {/* Skill Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Git', 'MongoDB'].map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item p-8 rounded-lg bg-gray-800 hover:bg-gray-700 shadow-xl transition-all"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              {/* Icon for each skill */}
              {index === 0 && <FaHtml5 className="text-6xl text-orange-600 mx-auto mb-4" />}
              {index === 1 && <FaCss3Alt className="text-6xl text-indigo-500 mx-auto mb-4" />}
              {index === 2 && <FaJsSquare className="text-6xl text-yellow-500 mx-auto mb-4" />}
              {index === 3 && <FaReact className="text-6xl text-cyan-400 mx-auto mb-4" />}
              {index === 4 && <DiNodejs className="text-6xl text-green-500 mx-auto mb-4" />}
              {index === 5 && <DiGit className="text-6xl text-red-500 mx-auto mb-4" />}
              {index === 6 && <DiMongodb className="text-6xl text-green-400 mx-auto mb-4" />}
              <p className="text-lg font-semibold">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
