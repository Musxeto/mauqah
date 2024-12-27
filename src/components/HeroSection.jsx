import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Wave from "react-wavify";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#FF99C2] to-[#FFC2E4] text-white">
      
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FF99C2] to-[#FFC2E4] text-white">
        {/* Background Wave */}
        <Wave
          fill="#FF6AA4"
          options={{
            height: 75,
            amplitude: 20,
            speed: 0.2,
            points: 5,
          }}
          className="absolute bottom-0 w-full"
        />

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-6 sm:px-12 lg:px-16 text-center">
          {/* Urdu Quote */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-4xl font-bold urdu leading-tight "
          >
            "موقع کی تلاش میں نہ رہ، بلبل گُزر چُکی"
            <br />
            <br />
            <br />
            "اپنی تقدیر کے رنگ خود بُنو، یہ کھیل سچّا ہے"
          </motion.div>

          {/* Translation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 text-lg md:text-2xl font-medium"
          >
            "Do not keep waiting for the perfect opportunity, the nightingale
            has already passed. Create your own destiny, for this game is real.”
          </motion.div>

          {/* Call-to-Action */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 flex justify-center space-x-4"
          >
            <button
              onClick={() => {
                navigate("/projects");
              }}
              className="bg-[#FF3B86] hover:bg-[#FF6AA4] transition-all px-8 py-3 rounded-full text-sm md:text-lg  font-semibold shadow-lg"
            >
              Projects
            </button>
            <button
              onClick={() => {
                navigate("/about");
              }}
              className="bg-transparent border border-white hover:bg-white hover:text-[#FF6AA4] transition-all px-8 py-3 rounded-full text-sm md:text-lg font-semibold"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
      <div className="bg-customDarkPink pb-20 ">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold hover:text-pink-400 duration-300">
            "Mauqah" <span className="urdu">(موقع)</span>
          </h2>
          <p className="text-lg md:text-xl mt-4">
            A word from the Urdu language. The direct translation is
            “opportunity”: a time or set of circumstances that makes it possible
            to do something.
          </p>
        </motion.div>
        <Wave
          fill="#111827"
          options={{
            height: 100,
            amplitude: 20,
            speed: 0.2,
            points: 5,
          }}
          className="absolute bottom-0 mt-10 w-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;
