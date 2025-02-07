'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // External link icon for live demo
import project1 from "@/assets/project1.png"
import project2 from "@/assets/project2.png"
import project3 from "@/assets/project3.png"
import projects4 from "@/assets/projects4.png"
const projects = [
  {
    title: "X - Clone",
    description: "An X clone developed using MERN stack with all the functionalities such as create, like and comment on post. Signup and Login functionality is also implemented.",
    image: projects4.src,
    link: "https://github.com/abdussameea1813/X",
    demo: "https://x-clone-xdca.onrender.com/",
  }
  ,
  {
    title: "Vanslife",
    description: "A React Router 6-based app for booking travel vans seamlessly and exploring van-life adventures.",
    image: project1.src,
    link: "https://github.com/abdussameea1813/van-life",
    demo: "https://vannslife.netlify.app/"
  },
  {
    title: "Ecommerce Store",
    description: "Built a full-stack e-commerce app with product management functionality using the MERN stack. Implemented RESTful APIs for CRUD operations and deployed on Render for easy scalability.",
    image: project2.src,
    link: "https://github.com/abdussameea1813/Product-Store",
    demo: "https://product-store-87au.onrender.com/"
  },
  {
    title: "Personal Portfolio",
    description: "A UI/UX design project built with Figma and Tailwind CSS.",
    image: project3.src,
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 py-16 text-gray-300">
      <div className="container mx-auto px-6 md:px-0">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 0.2 * index }}
            >
              {/* Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition-all duration-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              />

              <div className="p-4">
                {/* Title and Description */}
                <motion.h3
                  className="text-xl font-semibold text-yellow-500 dark:text-yellow-500"
                  initial={{ y: 10 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-sm font-semibold text-gray-400"
                  initial={{ y: 10 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {project.description}
                </motion.p>

                {/* Links */}
                <div className="mt-4 flex space-x-4">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary inline-block text-lg hover:text-blue-400"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaGithub className="inline mr-2" />
                    View on GitHub
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary inline-block text-lg hover:text-green-400"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaExternalLinkAlt className="inline mr-2" />
                      View Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
