"use client";
import { motion } from "framer-motion";

const ProductCard = ({ title, description }) => (
  <motion.div
    className="bg-pur00 p-6 rounded-lg "
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <h3 className="text-xl font-semibold mb-2 text-[#662D91]">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <motion.button
      className="border-[#662D91] mt-[50px] text-[#662D91] border-[2px]  px-4 py-2 rounded-full hover:bg-purple-700 hover:text-white transition duration-300 flex items-center space-x-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span>Learn More</span>
    </motion.button>
  </motion.div>
);

const TeamMember = ({ name, role, image }) => (
  <div className="text-center">
    <img
      className="mx-auto h-32 w-32 rounded-full object-cover"
      src={image}
      alt={name}
    />
    <h3 className="mt-4 text-lg font-semibold text-gray-900">{name}</h3>
    <p className="text-sm text-gray-500">{role}</p>
  </div>
);

const AlmondAboutUs = () => {
  const products = [
    {
      title: "Almond App",
      description: "Personal finance management with integrated DeFi features.",
    },
    {
      title: "Almond for Businesses",
      description:
        "Corporate financial solutions leveraging blockchain technology.",
    },
    {
      title: "Almond DeFi",
      description:
        "Decentralized finance platform for yield farming and liquidity provision.",
    },
  ];

  const teamMembers = [
    {
      name: "Ekok Okpokam",
      role: "CEO & Co-founder",
      image: "/assets/okpoks.jpeg",
    },
    {
      name: "Ogbodo Hillary",
      role: "CTO & Co-founder",
      image: "/assets/hillary.jpeg",
    },
    {
      name: "Alice Johnson",
      role: "Head of Product",
      image: "/assets/team/alice-johnson.jpg",
    },
    {
      name: "Bob Williams",
      role: "Head of Marketing",
      image: "/assets/team/bob-williams.jpg",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8" id="about">
      <div className="max-w-7xl mx-auto mt-[50px]">
        <h2 className="text-5xl font-bold text-center text-[#662D91] mb-12">
          About Almond
        </h2>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#662D91]">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To democratize finance and empower individuals and businesses
              through innovative blockchain and DeFi solutions.
            </p>
            {/* Space for illustration */}
            <div className="mt-4 h-48 bg-gray-300 flex items-center justify-center">
              <img
                src="/assets/illustration-5.svg"
                className=" w-full h-full relative"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#662D91]">
              Our Vision
            </h3>
            <p className="text-gray-600">
              A world where financial services are accessible, transparent, and
              beneficial for everyone, powered by decentralized technologies.
            </p>
            {/* Space for illustration */}
            <div className="mt-4 h-48 bg-gray-300 flex items-center justify-center relative">
              <img
                src="/assets/illustration-2.svg"
                className=" w-full h-full relative"
              />
            </div>
          </div>
        </div>

        {/* Products and Services */}
        <div className="mb-16 ">
          <h3 className="text-4xl font-semibold mb-6 text-center text-[#662D91]">
            Our Products and Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>

        {/* Founders and Team Members */}
        <div>
          <h3 className="text-5xl font-semibold mb-6 text-center text-[#662D91]">
            Our Team
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlmondAboutUs;
