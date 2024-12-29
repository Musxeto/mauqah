import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Wave from "react-wavify";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Correct styling for Carousel

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#F0CC00] to-[#FBCE80] overflow-hidden text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FABC05] to-[#FBCE90] flex flex-col sm:flex-row items-center justify-center">
        {/* Background Wave */}
        <Wave
          fill="white"
          options={{
            height: 75,
            amplitude: 20,
            speed: 0.2,
            points: 5,
          }}
          className="absolute bottom-0 w-full"
        />

        {/* Content Section */}
        <div className="w-full sm:w-1/2 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 text-center sm:text-left py-6 sm:py-0">
          {/* Urdu Quote */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-4xl font-bold urdu leading-tight"
          >
            "موقع کی تلاش میں نہ رہ، بلبل گُزر چُکی"
            <br />
            <br />
            "اپنی تقدیر کے رنگ خود بُنو، یہ کھیل سچّا ہے"
          </motion.div>

          {/* Translation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 text-lg md:text-2xl font-medium"
          >
            "Do not keep waiting for the perfect opportunity, the nightingale
            has already passed. Create your own destiny, for this game is real.”
          </motion.div>

          {/* Call-to-Action */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 flex justify-center sm:justify-start space-x-4"
          >
            <button
              onClick={() => navigate("/projects")}
              className="bg-yellow-400 hover:bg-[#FACD99] transition-all px-6 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-lg font-semibold shadow-xl"
            >
              Projects
            </button>
            <button
              onClick={() => navigate("/about")}
              className="bg-transparent border border-white hover:bg-white hover:text-yellow-300 transition-all px-6 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-lg font-semibold"
            >
              Learn More
            </button>
          </motion.div>
        </div>

        {/* Slider Section */}
        <div className="w-full sm:w-1/2 max-w-4xl mx-auto mt-8 sm:mt-0 px-4">
          <Carousel
            autoPlay
            interval={3000}
            infiniteLoop
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            className="rounded-lg overflow-hidden"
          >
            {[...Array(6)].map((_, idx) => (
              <div key={idx}>
                <img
                  src={`/slider/slider${idx + 1}.jpeg`}
                  alt={`Slide ${idx + 1}`}
                  className="rounded-lg w-full sm:h-72 md:h-96 object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
