import React from 'react';

const ProfileCard = ({ name, description, imageSrc }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-yellow-300">
      <div className="flex flex-col items-center">
        <img
          src={imageSrc}
          alt={name}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-4"
        />
        <h2 className="text-xl text-center md:text-3xl font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const profiles = [
    {
      name: "Shazelle Abdus Samad",
      description:
        "Shazelle, 19, has been an advocate for women’s rights from a young age, working to create opportunities and support systems for her peers through school programs and independent initiatives. She is currently on a gap year after completing high school and focused on her ongoing research and work in the field, spanning from the flood-affected regions of Wazirabad in Sindh to the culturally rich valleys of Hunza in the North and the educational initiatives in Jajja in Punjab.",
      imageSrc: "/shazelle.jpg",
    },
    {
      name: "Sofia Zaman",
      description:
        "Sofia is a student at the University of Illinois Chicago, majoring in Biological Sciences on the pre-med track. She plays basketball and actively supports important causes, empowering women in sports and raising awareness about critical issues. Sofia collaborated with Shazelle on the Pink Ribbon Campaign for breast cancer awareness, demonstrating her dedication to creating positive change for women in her community and beyond.",
      imageSrc: "/sofia.jpg",
    },
    {
      name: "Dr. Shehnaz Aly Khan",
      description:
        "Dr. Shehnaz is a professor at Bahria University, teaching both undergraduate and master’s students. She holds a PhD in Anthropology and is a native of Hunza. Dr. Shehnaz has conducted multiple anthropological research projects in the area and contributed a chapter to the recent publication “Beyond the Mountains.” She is a mother of two with an adventurous spirit.",
      imageSrc: "/shehnaz.jpg",
    },
  ];

  return (
    <div className="bg-yellow-50 min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            description={profile.description}
            imageSrc={profile.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
