import React from "react";
import HeroSection from "../components/HeroSection";
import { FaMountain, FaBook, FaChalkboardTeacher } from "react-icons/fa";
import { motion } from "framer-motion";

const Homepage = () => {
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
            "Mauqah" (موقع)
          </h2>
          <p className="text-lg md:text-xl mt-4">
            A word from the Urdu language. The direct translation is
            “opportunity”: a time or set of circumstances that makes it possible
            to do something.
          </p>
        </motion.div>

        {/* Hunza Project Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center hover:text-pink-500 transition-colors duration-300">
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
              className="absolute inset-0 bg-black opacity-30"
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
            <p>
              Pakistan’s societies are as diverse as its terrain. While the
              South is gradually moving away from conservative mindsets, Hunza
              is arguably the safest place for women, boasting the highest
              literacy rate in the country, nearing 100%.
            </p>
            <br />
            <p>
              In Gulmit, surrounded by glacier-clad mountains, Shazelle
              experienced the unique culture of Hunza. The icy winds danced on
              her skin, bringing the scent of poplar as the cold fought against
              the sun’s rays, keeping the air warm in the 20-degree weather of
              mid-July. Initially, Shazelle feared the language barrier and shy
              interactions she had become accustomed to. However, interacting
              with the girls at Al-Amyn School helped her understand the
              valley’s wonders and the community’s openness to education,
              especially for girls. The prevalent teaching in Hunza is, “If you
              have a son and a daughter, and you only have resources to educate
              one, educate your daughter.”
            </p>
            <br />
            <p>
              As Shazelle and her mentor, Dr. Shehnaz, drove further into
              Ghulkin, the mountains seemed to close around them. The name
              Ghulkin, meaning “well” in Brushiski, was fitting. The lush plains
              and ripening wheat fields created a breathtaking landscape. The
              glacier-cooled breeze whistled by as they entered the heart of the
              well. Dr. Shehnaz guided Shazelle through the tight mud paths
              between the houses, sharing insights on how to conduct interviews
              with locals. “Make your tone conversational; make them feel safe
              when talking to you. That way, you will get the most authentic
              answers,” she advised.
            </p>
            <br />
            <p>
              Miss Sabrina, a teacher at Al-Amyn, shared her story of helping
              local mothers face their issues, spreading awareness, and working
              with younger children to build strong foundations. As they parted,
              Shazelle asked for a piece of advice, knowing such encounters were
              rare. Miss Sabrina responded, “Understand yourself. We are
              beautiful people. Explore the world; the sky’s the limit, but you
              must always return to your nest. Inspire others to do the same.”
            </p>
            <br />
            <p>
              Shazelle and Dr. Shehnaz also explored the village of Karimabad,
              focusing on the story of the lowest caste in Hunza, who are
              blacksmiths and musicians. These villagers face constant
              discrimination and have undergone numerous name changes over the
              years. They avoid speaking Brushiski as a form of protest. Only 98
              households remain in the village. “When people leave here, they
              change their name, their identity. No one wishes to identify with
              their roots anymore,” Dr. Shehnaz said with a sad smile. “I fear
              this place will disappear within the next 15 years. That is why I
              am doing this project, so that their struggle is not forgotten.”
            </p>
            <br />
            <p>
              Shazelle, who was an understudy while Dr. Shehnaz was writing her
              PhD thesis, continues to work with her mentor on research
              regarding women’s education in Hunza during her post-graduate
              year.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Homepage;
