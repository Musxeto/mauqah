import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  const [imageLoaded, setImageLoaded] = useState({});

  const handleImageLoad = (index) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };
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
      <div className="max-w-6xl mx-auto p-6 sm:p-12 lg:p-10">
        <Link to={"/#hunza"}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div
              className="relative overflow-hidden rounded-lg flex"
              whileHover={{ scale: 1.05 }}
            >
                {!imageLoaded[0] && (
                  <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
                )}
                <img
                  src="/shunza.jpg"
                  alt="Hunza Project"
                  className={`w-full object-cover rounded-lg h-80 transition-opacity duration-500 ${
                    imageLoaded[0] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => handleImageLoad(0)}
                />
            </motion.div>
            <div className="flex flex-col justify-between">
              <h2 className="text-3xl md:text-5xl font-bold text-yellow-600 hover:text-yellow-700 transition-colors duration-300">
                Hunza Project
              </h2>
              <p className="mt-4 text-lg md:text-xl leading-relaxed border-l-4 border-yellow-700 pl-4 italic">
                Shazelle explores Hunza's progressive approach to women's
                education, interviewing locals, students, and educators in
                remote villages like Gulmit and Karimabad. The project
                highlights Hunza's high female literacy rate and shares stories
                of resilience and empowerment, especially through the Al-Amyn
                School.
              </p>
            </div>
          </motion.div>
        </Link>
        <br />
        <br />
        <Link to={"/gender-empowerment-society"}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div
              className="relative overflow-hidden rounded-lg flex"
              whileHover={{ scale: 1.05 }}
            >
              {!imageLoaded[0] && (
                <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
              )}
              <img
                src="/gender2.jpg"
                alt="Hunza Project"
                className={`w-full object-cover rounded-lg h-80 transition-opacity duration-500 ${
                  imageLoaded[0] ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => handleImageLoad(0)}
              />
            </motion.div>
            <div className="flex flex-col justify-between">
              <h2 className="text-3xl md:text-5xl font-bold text-yellow-600 hover:text-yellow-700 transition-colors duration-300">
                Gender Empowerment Society
              </h2>
              <p className="mt-4 text-lg md:text-xl leading-relaxed border-l-4 border-yellow-700 pl-4 italic">
                The Gender Empowerment Society was founded by Shazelle to create
                awareness about women's rights and empowerment, organizing
                campaigns and initiatives to support women's education and
                leadership in Pakistan.
              </p>
            </div>
          </motion.div>
        </Link>
        <br />
        <br />
        <Link to={"/wazirabad-field-study"}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-yellow-600 hover:text-yellow-700 transition-colors duration-300">
                Wazirabad Field Study
              </h2>
            </div>
            <div className="flex justify-between">
              <p className="mt-4 text-lg md:text-xl leading-relaxed border-l-4 border-yellow-700 pl-4 italic">
                Wazirabad, a district in Sindh near Sukkur, was severely
                affected by the floods that hit Pakistan in 2022. The locals
                have been slowly rebuilding their lives. Shazelle aimed to
                interact with the women and girls of Wazirabad, learning their
                stories, understanding how they balance studies with societal
                pressures, and offering help wherever possible.
              </p>
            </div>
          </motion.div>
        </Link>
        <br />
        <br />
        <Link to={"/visit-to-jajja"}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-yellow-600 hover:text-yellow-700 transition-colors duration-300">
              Visit to Jajja
            </h2>
            <div className="flex flex-col justify-between">
              <p className="mt-4 text-lg md:text-xl leading-relaxed border-l-4 border-yellow-700 pl-4 italic">
                Shazelle's visit to Jajja was focused on supporting the
                community in addressing basic needs and education. The trip
                included distributing relief materials and organizing
                educational sessions for the local youth.
              </p>
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
