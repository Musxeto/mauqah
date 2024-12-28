import React from "react";
import { motion } from "framer-motion";
import Wave from "react-wavify";

const GenderEmpowermentSociety = () => {
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
            Gender Empowerment Society
          </h1>
        </motion.div>
      </div>
      {/* Content Section */}
      <div className="max-w-6xl mx-auto p-6 sm:p-12 lg:p-10">
        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl leading-relaxed border-l-4 border-yellow-700 pl-4 italic"
        >
          <p>
            In her first year of A-levels,{" "}
            <span className="font-bold">Shazelle</span> founded the{" "}
            <span className="font-bold">Gender Empowerment Society</span> at
            Westminster International and served as its president throughout her
            A-levels. She believed it was crucial to represent women and provide
            them with the support system needed to achieve their goals. She
            organized two major campaigns:
          </p>
        </motion.div>

       {/* White Ribbon Campaign */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div
            className="relative overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/gender1.jpg"
              alt="White Ribbon Campaign"
              className=" h-full object-cover rounded-lg"
            />
          </motion.div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-yellow-600 hover:text-yellow-700 transition-colors duration-300">
              White Ribbon Campaign
            </h2>
            <p className="mt-4 text-lg md:text-xl leading-relaxed border-l-4 border-yellow-700 pl-4 italic">
              The <span className="font-bold">White Ribbon Campaign</span> was a
              collaboration with an initiative to raise awareness about{" "}
              <span className="font-bold">domestic abuse against women</span> in
              Pakistan. Despite facing resistance and jokes from some
              individuals, Shazelle overcame these obstacles by involving them
              directly in the project. She and her team conducted a white ribbon
              march with handmade posters around the school and sold White
              Ribbon merchandise provided by the foundation. By the end of the
              campaign, they raised approximately{" "}
              <span className="font-bold">PKR 40,000</span>, which was donated
              to domestic abuse help centers across Pakistan.
            </p>
          </div>
        </motion.div>

        {/* Pink Ribbon Campaign */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-yellow-600 hover:text-yellow-700 transition-colors duration-300">
              Pink Ribbon Campaign
            </h2>
            <p className="mt-4 text-lg md:text-xl leading-relaxed border-l-4 border-yellow-700 pl-4 italic">
              The <span className="font-bold">Pink Ribbon Campaign</span>{" "}
              focused on spreading awareness about{" "}
              <span className="font-bold">breast cancer</span> and providing a
              platform for women who have suffered from the disease to share
              their stories. The events took place during the first week of
              October and included a school-wide assembly to introduce breast
              cancer awareness and outline the week’s activities. Pamphlets were
              distributed, healthcare professionals were invited to speak about
              cancer prevention and detection, and everyone was encouraged to
              wear pink. The campaign also featured a fundraising bake sale,
              which raised <span className="font-bold">PKR 82,000</span> for the
              Pink Ribbon Foundation.
            </p>
          </div>
          <motion.div
            className="relative overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/gender2.jpg"
              alt="Pink Ribbon Campaign"
              className=" h-full object-cover rounded-lg"
            />
          </motion.div>
        </motion.div>

        {/* Closing Images Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div
            className="relative overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/gender3.jpg"
              alt="Campaign Image 3"
              className="w-full h-80 object-cover rounded-lg"
            />
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/gender4.jpg"
              alt="Campaign Image 4"
              className="w-full h-80 object-cover rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GenderEmpowermentSociety;
