import React from "react";
import { motion } from "framer-motion";

const VisitToJajja = () => {
  return (
    <div id="heading" className="bg-white text-gray-800 min-h-screen pt-16">
      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="py-12 bg-yellow-100 text-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-yellow-600 hover:text-yellow-700 transition-colors duration-300">
          Site Visit to Jajja
        </h1>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto p-6 sm:p-12 lg:p-10">
        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl leading-relaxed border-l-4 border-yellow-700 pl-4 italic"
        >
          Shazelle visited a school in Jajja village, established by Gen. Leraseb, to promote and support girls’ education. The students she connected with shared their experiences and struggles, particularly the challenges of maintaining good grades and coping with the stress of school. Additionally, they discussed the difficulties they faced as girls from families that were often unsupportive of their education, preferring them to work or get married instead.
        </motion.div>
      </div>
    </div>
  );
};

export default VisitToJajja;
