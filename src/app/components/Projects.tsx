'use client';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa'; // External link icon for live demo
import project1 from '@/assets/project1.png'
import project2 from '@/assets/project2.png'
import project3 from '@/assets/project3.png'

const projects = [
  {
    title: "Vanslife",
    description: "A React Router 6-based app for booking travel vans seamlessly and exploring van-life adventures.",
    image: project1.src,
    link: "https://github.com/abdussameea1813/van-life",
    demo: "https://vannslife.netlify.app/" // Add your live demo link here
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
    description: "Description for project three. A UI/UX design project built with Figma and Tailwind CSS.",
    image: project3.src,
  },
  // Add more projects as needed
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-gray-900 py-16 text-gray-300">
      <div className="container mx-auto px-6 md:px-0">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
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
              transition={{ delay: 0.2 * index }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-semibold text-yellow-500 dark:text-yellow-500">{project.title}</h3>
                <p className="text-sm font-semibold text-yellow-500 dark:text-yellow-500">
  {project.description}
</p>
                <div className="mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary inline-block text-lg hover:text-blue-400 mr-4"
                  >
                    <FaGithub className="inline mr-2" />
                    View on GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary inline-block text-lg hover:text-green-400"
                  >
                    <FaExternalLinkAlt className="inline mr-2" />
                    View Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
