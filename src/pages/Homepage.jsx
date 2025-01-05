import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import { motion } from "framer-motion";
import {
  InterviewsSabrina,
  InterviewsSitara,
  SnippetsShehnaz,
} from "../components/Interviews";

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
    <div id="heading" className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      <div className="bg-white pb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 hover:text-yellow-400 duration-300">
            "Mauqah" <span className="urdu">(موقع)</span>
          </h2>
          <p className="text-lg text-gray-800 md:text-xl mt-4">
            A word from the Urdu language. The direct translation is
            “opportunity”: a time or set of circumstances that makes it possible
            to do something.
          </p>
        </motion.div>
      </div>
      <div id="hunza">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="py-12 bg-yellow-100 text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-600 hover:text-yellow-700 transition-colors duration-300">
            Hunza Project
          </h1>
        </motion.div>
      </div>
      {/* Content Section */}
      <div className="max-w-6xl mx-auto p-6 sm:p-12  lg:p-10">
        {/* Hunza Project Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="relative overflow-hidden rounded-lg mt-8"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/shunza.jpg"
              className="w-full h-96 bg-slate-300 md:min-h-3.5 object-cover rounded-lg"
            />
          </motion.div>
          {/* First Paragraph and Image */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="relative overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/HunzaSchool1.jpg"
                alt="Hunza Landscape"
                className="w-full h-80 object-cover rounded-lg"
              />
              <motion.div
                className="absolute inset-0 bg-black opacity-20 rounded-lg"
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div
              className="text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p className="border-l-4 border-yellow-700 pl-4 italic">
                Pakistan’s societies are as diverse as its terrain. While the
                South is gradually moving away from conservative mindsets,{" "}
                <span className="font-bold text-yellow-400">Hunza</span> is
                arguably the safest place for women, boasting the{" "}
                <span className="underline text-yellow-400">
                  highest literacy rate
                </span>{" "}
                in the country, nearing 100%.
              </p>
            </motion.div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p className="border-l-4 border-yellow-700 pl-4 italic">
                In <span className="font-bold text-yellow-400">Gulmit</span>,
                surrounded by glacier-clad mountains, Shazelle experienced the
                unique culture of Hunza. The icy winds danced on her skin,
                bringing the scent of poplar as the cold fought against the
                sun’s rays, keeping the air warm in the 20-degree weather of
                mid-July. Initially, Shazelle feared the language barrier and
                shy interactions she had become accustomed to. However,
                interacting with the girls at{" "}
                <span className="font-bold text-yellow-400">
                  Al-Amyn School
                </span>{" "}
                helped her understand the valley’s wonders and the community’s
                openness to education, especially for girls. The prevalent
                teaching in Hunza is,{" "}
                <span className="italic">
                  “If you have a son and a daughter, and you only have resources
                  to educate one, educate your daughter.”
                </span>
              </p>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/Hunza.jpg"
                alt="Hunza School"
                className="w-full h-full object-cover rounded-lg"
              />
              <motion.div
                className="absolute inset-0 bg-black opacity-20 rounded-lg"
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
          <div className="mt-8">
            <div className="flex justify-center ">
              {" "}
              <h3 className="text-2xl font-semibold text-yellow-600">
                Interview with the Principal of at Al-Amyn
              </h3>
            </div>

            <motion.div className="video-container  shadow-black shadow-xl flex justify-center items-center mt-4 overflow-hidden ">
              <video
                controls
                className="w-full h-full bg-slate-200 object-cover rounded-lg "
                src="https://firebasestorage.googleapis.com/v0/b/berserkgym-64268.appspot.com/o/mauqah%2Fprincipal-interview.MOV?alt=media"
              />
            </motion.div>
          </div>
          <div className="mt-8">
            <div className="flex justify-center ">
              {" "}
              <h3 className="text-2xl font-semibold text-yellow-600">
                Interview with a group of students at Al-Amyn
              </h3>
            </div>

            <motion.div className="video-container shadow-black shadow-xl flex justify-center items-center mt-4 overflow-hidden ">
              <video
                controls
                className="w-full h-full bg-slate-200 object-cover rounded-lg "
                src="https://firebasestorage.googleapis.com/v0/b/berserkgym-64268.appspot.com/o/mauqah%2Fhunza-student-group.MOV?alt=media"
              />
            </motion.div>
          </div>

          {/* Third Paragraph and Image */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="relative overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/HunzaSchool.jpg"
                alt="Hunza School"
                className="w-full h-96 md:h-fit object-cover rounded-lg"
              />
              <motion.div
                className="absolute inset-0 bg-black opacity-20 rounded-lg"
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div
              className="text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p className="border-l-4 border-yellow-700 pl-4 italic">
                As Shazelle and her mentor,{" "}
                <span className="font-bold text-yellow-400">Professor Shehnaz Akhter</span>,
                drove further into{" "}
                <span className="font-bold text-yellow-400">Ghulkin</span>, the
                mountains seemed to close around them. The name Ghulkin, meaning
                “well” in Brushiski, was fitting. The lush plains and ripening
                wheat fields created a breathtaking landscape. The
                glacier-cooled breeze whistled by as they entered the heart of
                the well. Professor Shehnaz Akhter guided Shazelle through the tight mud
                paths between the houses, sharing insights on how to conduct
                interviews with locals.{" "}
                <span className="font-semibold">
                  “Make your tone conversational; make them feel safe when
                  talking to you. That way, you will get the most authentic
                  answers,” she advised.
                </span>
              </p>
            </motion.div>
          </div>
          <InterviewsSabrina />
          {/* Miss Sabrina Interview */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p className="border-l-4 border-yellow-900 pl-4 italic">
                Miss Sabrina, a teacher at Al-Amyn, shared her story of helping
                local mothers face their issues, spreading awareness, and
                working with younger children to build strong foundations. As
                they parted, Shazelle asked for a piece of advice, knowing such
                encounters were rare. Miss Sabrina responded,{" "}
                <span className="italic font-semibold">
                  “Understand yourself. We are beautiful people. Explore the
                  world; the sky’s the limit, but you must always return to your
                  nest. Inspire others to do the same.”
                </span>
              </p>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/HunzaSchool2.jpg"
                alt="Hunza School Teacher"
                className="w-full h-96 md:w-full md:min-h-fit object-cover rounded-lg"
              />
              <motion.div
                className="absolute inset-0 bg-black opacity-20 rounded-lg"
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>

          {/* Fourth Paragraph and Image */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="relative overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/HunzaSchool3.jpg"
                alt="Hunza School"
                className="w-full h-96 md:h-fit object-cover rounded-lg"
              />
              <motion.div
                className="absolute inset-0 bg-black opacity-20 rounded-lg"
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div
              className="text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p className="border-l-4 border-yellow-900 pl-4 italic leading-relaxed">
                Shazelle and Professor Shehnaz Akhter also explored the village of{" "}
                <span className="font-bold text-yellow-400">Karimabad</span>,
                focusing on the story of the lowest caste in Hunza, who are
                blacksmiths and musicians. These villagers face constant
                discrimination and have undergone numerous name changes over the
                years. They avoid speaking Brushiski as a form of protest. Only{" "}
                <span className="font-bold">98 households</span> remain in the
                village. “When people leave here, they change their name, their
                identity. No one wishes to identify with their roots anymore,”
                Professor Shehnaz Akhter said with a sad smile. “I fear this place will
                disappear within the next 15 years. That is why I am doing this
                project, so that their struggle is not forgotten.”
              </p>
            </motion.div>
          </div>

          {/* Final Paragraph */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg md:text-xl leading-relaxed italic">
              Shazelle, who was an understudy while Professor Shehnaz Akhter was writing her
              PhD thesis, continues to work with her mentor on research
              regarding women’s education in Hunza during her post-graduate
              year.
            </p>
          </motion.div>

          {/* Interviews */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-center text-yellow-600">
              Interview with a student in Mominabad
            </h3>
            <motion.div className="video-container flex justify-center items-center mt-4 overflow-hidden ">
              <video
                controls
                className="w-full bg-slate-200 shadow-black shadow-xl lg:w-3/4 h-auto rounded-lg "
                src="https://firebasestorage.googleapis.com/v0/b/berserkgym-64268.appspot.com/o/mauqah%2Fmominabad.MOV?alt=media"
              />
            </motion.div>
          </div>
          <InterviewsSitara />
          <SnippetsShehnaz />
        </motion.div>
      </div>
    </div>
  );
};

export default Homepage;
