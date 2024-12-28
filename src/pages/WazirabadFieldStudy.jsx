import React from "react";
import { motion } from "framer-motion";

const WazirabadFieldStudy = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen pt-16">
      {/* Page Title */}
      <div id="heading"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        
        className="py-12 bg-yellow-100 text-center"
      >
        <h1  className="text-3xl md:text-5xl font-bold text-yellow-600 hover:text-yellow-700 transition-colors duration-300">
          Wazirabad Field Study
        </h1>
      </motion.div>

      {/* Content Section */}

      <div className="max-w-6xl mx-auto p-3 sm:p-12 lg:p-8">
        {/* Section 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl leading-relaxed border-l-4 border-yellow-700 pl-4 italic"
        >
          <p   className="text-lg md:text-xl leading-relaxed pl-4 italic">
            Wazirabad, a district in Sindh near Sukkur, was severely affected by
            the floods that hit Pakistan in 2022. The locals have been slowly
            rebuilding their lives. <span className="font-bold">Shazelle</span>{" "}
            aimed to interact with the women and girls of Wazirabad, learning
            their stories, understanding how they balance studies with societal
            pressures, and offering help wherever possible.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <motion.div
            className="relative overflow-hidden rounded-lg col-span-1 md:col-span-1"
            whileHover={{ scale: 1.05 }}
          >
            <video
              controls
              className="w-full h-auto object-cover rounded-lg shadow-2xl bg-slate-500"
              src="https://firebasestorage.googleapis.com/v0/b/berserkgym-64268.appspot.com/o/mauqah%2FWazirabad1.mp4?alt=media&token=74cf5db3-0d13-4b3b-9764-b37bca38c83c"
            ></video>
          </motion.div>
          <div className="col-span-3 md:col-span-3">
            <h2 className="text-xl my-4 md:my-12 md:text-4xl font-bold text-yellow-600 hover:text-yellow-700 transition-colors duration-300">
              Meeting with the Chairwoman of the Chandre Godh LSO
            </h2>
            
            <p className="text-lg md:text-xl leading-relaxed border-l-4 border-yellow-700 pl-4 italic">
              During her visit, Shazelle conducted an independent study on the
              <i>impact of education on women in rural Pakistan</i>. She met{" "}
              <b>Ghulam Fatima, the chairwoman of the Chandre Godh LSO</b>, who
              shared the devastating effects of the floods, including loss of
              livestock and homes and widespread illness. Despite these
              challenges, the women began learning new skills and were
              compensated by <b>SRSO</b> for their losses. They now strive to
              educate their daughters, although some families remain reluctant.
              Awareness is spreading, and the path to change has begun.
            </p>
          </div>
        </motion.div>

        <h2 className="text-xl text-center my-4 md:my-12 md:mt-16 md:text-4xl font-bold text-yellow-600 hover:text-yellow-700 transition-colors duration-300">
          Interviewing the Students
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12 grid grid-cols-1 gap-8"
        >
          <div>
            <p className="text-lg md:text-xl leading-relaxed border-l-4 border-yellow-700 pl-4 italic">
              Shazelle also interviewed school-going girls in the local village,
              with the help of her friend Ameera for translations since most
              only spoke the provincial Sindhi language. Despite these initial
              barriers, she learned a great deal about their lives. Shazelle
              continues to monitor their academic progress and the work done by
              SRSO in the area, contributing where she can.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            className="relative overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <video
              controls
              className="w-full h-auto object-cover rounded-lg shadow-2xl bg-slate-500"
              src="https://firebasestorage.googleapis.com/v0/b/berserkgym-64268.appspot.com/o/mauqah%2Fwazirabad2.mov?alt=media"
            ></video>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <video
              controls
              className="w-full h-auto object-cover rounded-lg shadow-2xl bg-slate-500"
              src="https://firebasestorage.googleapis.com/v0/b/berserkgym-64268.appspot.com/o/mauqah%2Fwazirabad3.mov?alt=media"
            ></video>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <video
              controls
              className="w-full h-auto object-cover rounded-lg shadow-2xl bg-slate-500"
              src="https://firebasestorage.googleapis.com/v0/b/berserkgym-64268.appspot.com/o/mauqah%2Fwazirabad4.mov?alt=media"
            ></video>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <video
              controls
              className="w-full h-auto object-cover rounded-lg shadow-2xl bg-slate-500"
              src="https://firebasestorage.googleapis.com/v0/b/berserkgym-64268.appspot.com/o/mauqah%2Fwazirabad5.mov?alt=media"
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WazirabadFieldStudy;
