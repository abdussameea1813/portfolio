import { motion } from "framer-motion";
import dp from "../../assets/dp.jpg";
const About = () => {
  return (
    <motion.section
      id="about"
      className="py-24 bg-gray-900 text-white" // Dark background for consistency
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-screen-lg mx-auto text-center">
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

        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Abdussameea Patel
        </motion.h2>

        <motion.p
          className="text-xl max-w-xl mx-auto mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          I am a passionate web developer with a strong background in JavaScript, React, and Next.js. I love creating interactive and engaging user experiences.
        </motion.p>

        <motion.a
          href="#projects"
          className="bg-yellow-500 text-black text-lg px-6 py-3 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Check My Work
        </motion.a>
      </div>
    </motion.section>
  );
};

export default About;
