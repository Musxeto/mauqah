import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen pt-16">
      {/* Page Title */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="py-12 bg-yellow-100 text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-600 hover:text-yellow-700 transition-colors duration-300">
            Projects
          </h1>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto p-6 sm:p-12 lg:p-10">

        {/* Project 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div className="relative overflow-hidden rounded-lg" whileHover={{ scale: 1.05 }}>
            <img
              src="/project1.jpg" // Add appropriate image for the project
              alt="Project 1"
              className="h-full object-cover rounded-lg"
            />
          </motion.div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-yellow-600 hover:text-yellow-700 transition-colors duration-300">
              Wazirabad Field Study
            </h2>
            <p className="mt-4 text-lg md:text-xl leading-relaxed border-l-4 border-yellow-700 pl-4 italic">
              Wazirabad, a district in Sindh near Sukkur, was severely affected by the floods that hit Pakistan in 2022. The locals have been slowly rebuilding their lives. Shazelle aimed to interact with the women and girls of Wazirabad, learning their stories, understanding how they balance studies with societal pressures, and offering help wherever possible.
            </p>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div className="relative overflow-hidden rounded-lg" whileHover={{ scale: 1.05 }}>
            <img
              src="/project2.jpg" // Add appropriate image for the project
              alt="Project 2"
              className="h-full object-cover rounded-lg"
            />
          </motion.div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-yellow-600 hover:text-yellow-700 transition-colors duration-300">
              Visit to Jajja
            </h2>
            <p className="mt-4 text-lg md:text-xl leading-relaxed border-l-4 border-yellow-700 pl-4 italic">
              Shazelle's visit to Jajja was focused on supporting the community in addressing basic needs and education. The trip included distributing relief materials and organizing educational sessions for the local youth.
            </p>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div className="relative overflow-hidden rounded-lg" whileHover={{ scale: 1.05 }}>
            <img
              src="/project3.jpg" // Add appropriate image for the project
              alt="Project 3"
              className="h-full object-cover rounded-lg"
            />
          </motion.div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-yellow-600 hover:text-yellow-700 transition-colors duration-300">
              Gender Empowerment Society
            </h2>
            <p className="mt-4 text-lg md:text-xl leading-relaxed border-l-4 border-yellow-700 pl-4 italic">
              The Gender Empowerment Society was founded by Shazelle to create awareness about women's rights and empowerment, organizing campaigns and initiatives to support women's education and leadership in Pakistan.
            </p>
          </div>
        </motion.div>

        {/* Add more projects here... */}
      </div>
    </div>
  );
};

export default Projects;
