import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import { FaMountain, FaBook, FaChalkboardTeacher } from "react-icons/fa";
import { motion } from "framer-motion";
import {InterviewsSabrina, InterviewsSitara} from "../components/Interviews";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image) => {
    setSelectedImage(image);

    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);

    setSelectedImage("");
  };

  return (
    <div className="bg-customDarkPink text-white min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Content Section */}
      <div className="max-w-6xl mx-auto p-6 sm:p-12 lg:p-16 mt-16">
        {/* Urdu Word Description */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold hover:text-pink-500 transition-colors duration-300">
            "Mauqah" <span className="urdu">(موقع)</span>
          </h2>
          <p className="text-lg md:text-xl mt-4">
            A word from the Urdu language. The direct translation is
            “opportunity”: a time or set of circumstances that makes it possible
            to do something.
          </p>
        </motion.div>
        <div id="hunza"></div>
        {/* Hunza Project Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center hover:text-pink-500 transition-colors duration-300">
            Hunza Project
          </h2>

          {/* Parallax Background Effect */}
          <motion.div
            className="relative mt-8 overflow-hidden"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/Hunza.jpg"
              alt="Hunza Landscape"
              className="w-full h-80 object-cover rounded-lg"
            />
            <motion.div
              className="absolute inset-0 bg-black opacity-30 rounded-lg"
              whileHover={{ opacity: 0.4 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Project Description */}
          <motion.div
            className="mt-8 text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="border-l-4 border-pink-900 pl-4 italic">
              Pakistan’s societies are as diverse as its terrain. While the
              South is gradually moving away from conservative mindsets,{" "}
              <span className="font-bold text-pink-900">Hunza</span> is arguably
              the safest place for women, boasting the{" "}
              <span className="underline text-pink-800">
                highest literacy rate
              </span>{" "}
              in the country, nearing 100%.
            </p>
            <br />
            <p className="border-l-4 border-pink-900 pl-4 italic">
              In <span className="font-bold text-pink-900">Gulmit</span>,
              surrounded by glacier-clad mountains, Shazelle experienced the
              unique culture of Hunza. The icy winds danced on her skin,
              bringing the scent of poplar as the cold fought against the sun’s
              rays, keeping the air warm in the 20-degree weather of mid-July.
              Initially, Shazelle feared the language barrier and shy
              interactions she had become accustomed to. However, interacting
              with the girls at{" "}
              <span className="font-bold text-pink-900">Al-Amyn School</span>{" "}
              helped her understand the valley’s wonders and the community’s
              openness to education, especially for girls. The prevalent
              teaching in Hunza is,
              <q className="block text-xl md:text-2xl font-semibold text-pink-500 bg-pinkish-100 p-4 mt-4 rounded-lg shadow-lg animate-fadeIn">
                If you have a son and a daughter, and you only have resources to
                educate one, educate your daughter.
              </q>
            </p>
            <br />
            <p className="border-l-4 border-pink-900 pl-4 italic">
              As Shazelle and her mentor,{" "}
              <span className="font-bold text-pink-900">Dr. Shehnaz</span>,
              drove further into Ghulkin, the mountains seemed to close around
              them. The name Ghulkin, meaning{" "}
              <span className="urdu">“well”</span> in{" "}
              <span className="font-bold text-pink-900">Brushiski</span>, was
              fitting. The lush plains and ripening wheat fields created a
              breathtaking landscape. The glacier-cooled breeze whistled by as
              they entered the heart of the well. Dr. Shehnaz guided Shazelle
              through the tight mud paths between the houses, sharing insights
              on how to conduct interviews with locals.{" "}
              <span className="urdu">
                “Make your tone conversational; make them feel safe when talking
                to you. That way, you will get the most authentic answers”
              </span>
              , she advised.
            </p>
            <br />
            <p className="mt-6">
              Miss Sabrina, a teacher at{" "}
              <span className="font-bold text-pink-900">Al-Amyn School</span>,
              shared her story of helping local mothers face their issues,
              spreading awareness, and working with younger children to build
              strong foundations. As they parted, Shazelle asked for a piece of
              advice, knowing such encounters were rare. Miss Sabrina responded,
              <q className="block text-xl md:text-2xl font-semibold text-pink-500 bg-pinkish-100 p-4 mt-4 rounded-lg shadow-lg">
                Understand yourself. We are beautiful people. Explore the world;
                the sky’s the limit, but you must always return to your nest.
                Inspire others to do the same.
              </q>
            </p>
            <br />
            {/*Interviews here*/}
            <InterviewsSabrina />
            <p className="border-l-4 border-pink-900 pl-4 italic leading-relaxed">
              Shazelle and Dr. Shehnaz also explored the village of{" "}
              <span className="font-bold text-pink-900">Karimabad</span>,
              focusing on the story of the lowest caste in Hunza, who are
              blacksmiths and musicians. These villagers face constant
              discrimination and have undergone numerous name changes over the
              years. They avoid speaking Brushiski as a form of protest. Only{" "}
              <span className="font-bold">98 households</span> remain in the
              village.
              <q className="block text-xl md:text-2xl font-semibold text-pink-500 bg-pinkish-100 p-4 mt-4 rounded-lg shadow-lg">
                When people leave here, they change their name, their identity.
                No one wishes to identify with their roots anymore,
              </q>
              Dr. Shehnaz said with a sad smile.
              <q className="block text-xl md:text-2xl font-semibold text-pink-500 bg-pinkish-100 p-4 mt-4 rounded-lg shadow-lg">
                I fear this place will disappear within the next 15 years. That
                is why I am doing this project, so that their struggle is not
                forgotten.
              </q>
            </p>

            <br />
            <p className="border-l-4 border-pink-900 pl-4 italic">
              Shazelle, who was an understudy while Dr. Shehnaz was writing her
              PhD thesis, continues to work with her mentor on research
              regarding women’s education in Hunza during her post-graduate
              year.
            </p>
          </motion.div>
        </motion.div>
        <InterviewsSitara />
        <div className="mt-12">
          <h2 className="text-3xl md:text-5xl font-bold text-center hover:text-pink-500 transition-colors duration-300">
            Al Amyn School (Hunza)
          </h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "/HunzaSchool1.jpg",
              "/HunzaSchool.jpg",
              "/HunzaSchool2.jpg",
              "/HunzaSchool3.jpg",
              "/HunzaSchool4.jpg",
              "/HunzaSchool5.jpg",
            ].map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => openModal(image)}
              >
                <img
                  src={image}
                  alt={`Hunza School ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg transition-transform duration-300"
                />
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                >
                  View Image
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Modal for Image Pop-up */}
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl max-h-screen bg-white p-4 rounded-lg"
              >
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="max-w-full max-h-screen rounded-lg"
                />
                <button
                  className="absolute top-4 right-4 text-black text-2xl hover:text-gray-500"
                  onClick={closeModal}
                >
                  &times;
                </button>
              </motion.div>
            </div>
          )}
        </div>
      </div>
      {/* Image Gallery Section */}
    </div>
  );
};

export default Homepage;
