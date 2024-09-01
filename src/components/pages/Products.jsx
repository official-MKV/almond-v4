"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const ProductSection = ({
  title,
  description,
  features,
  img,
  imagePosition = "right",
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contentAnimation = {
    hidden: { opacity: 0, x: imagePosition === "right" ? -50 : 50 },
    visible: { opacity: 1, x: 0 },
  };

  const imageAnimation = {
    hidden: { opacity: 0, x: imagePosition === "right" ? 50 : -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="mb-24 flex flex-col lg:flex-row items-center"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.div
        className={`w-full lg:w-1/2 ${
          imagePosition === "left" ? "lg:order-first" : "lg:order-last"
        }`}
        variants={imageAnimation}
      >
        <div className=" h-64 w-full rounded-lg flex items-center justify-center">
          <img className="w-full h-full relative" src={img} />
        </div>
      </motion.div>
      <motion.div
        className={`w-full lg:w-1/2 mt-8 lg:mt-0 ${
          imagePosition === "left" ? "lg:pl-12" : "lg:pr-12"
        }`}
        variants={contentAnimation}
      >
        <h3 className="text-3xl font-bold mb-4 text-[#662D91]">{title}</h3>
        <p className="text-gray-700 mb-6">{description}</p>
        <h4 className="text-xl font-semibold mb-3 text-[#662D91]">
          Key Features:
        </h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};
const CallToAction = () => (
  <div className="bg-gradient-to-br from-[#662D91] rounded-2xl via-[#9945da] to-[#662D91]  shadow-xl p-8 mt-16 flex flex-col md:flex-row items-center justify-between">
    <div className="md:w-1/2 mb-8 md:mb-0">
      <h2 className="text-3xl font-bold text-white mb-4">
        Get the Almond App Now
      </h2>
      <p className="text-white mb-6">
        Experience the future of finance with Almond. Download our app and start
        your DeFi journey today!
      </p>
      <motion.button
        className="bg-white text-[#662D91] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Download Now
      </motion.button>
    </div>
    <div className="md:w-1/2 relative h-64 md:h-80">
      <Image
        src="/assets/image-4.svg"
        alt="Almond App"
        layout="fill"
        objectFit="contain"
      />
    </div>
  </div>
);
const AlmondProductsServices = () => {
  const products = [
    {
      title: "Almond App",
      img: "/assets/image-4.svg",
      description:
        "The Almond App is your all-in-one personal finance management solution with integrated DeFi features. Designed to empower individuals to take control of their financial lives, our app combines traditional financial tools with cutting-edge blockchain technology. Whether you're a seasoned investor or just starting your financial journey, the Almond App provides the insights and tools you need to make informed decisions and grow your wealth.",
      features: [
        "Comprehensive expense tracking with AI-powered categorization",
        "Smart budget planning that adapts to your spending habits",
        "Investment portfolio management with real-time market data",
        "Seamless DeFi integration for access to yield farming and liquidity pools",
        "Personalized financial insights and recommendations",
        "Bank-grade security with biometric authentication",
      ],
    },
    {
      title: "Almond for Businesses",
      img: "/assets/image-4.svg",
      description:
        "Almond for Businesses is our corporate financial solution that leverages blockchain technology to streamline operations, enhance transparency, and drive growth. We understand the unique challenges businesses face in today's fast-paced digital economy. That's why we've developed a suite of tools designed to give your company a competitive edge in financial management and blockchain integration.",
      features: [
        "Robust financial analytics dashboard with customizable reports",
        "Blockchain-based auditing for enhanced transparency and security",
        "Multi-user access with role-based permissions",
        "Integration with popular accounting software",
        "Smart contract automation for recurring transactions",
        "Real-time cash flow forecasting powered by machine learning",
      ],
    },
    {
      title: "Almond Pay",
      img: "/assets/image-4.svg",
      description:
        "Almond Pay is our state-of-the-art payment processing solution designed to meet the evolving needs of modern businesses. Built on blockchain technology, Almond Pay offers unparalleled speed, security, and flexibility for all your transaction needs. Whether you're a small e-commerce startup or a large multinational corporation, Almond Pay provides the tools you need to manage payments efficiently and securely.",
      features: [
        "Lightning-fast transaction processing with blockchain confirmation",
        "Support for multiple cryptocurrencies and fiat currencies",
        "Seamless integration with popular e-commerce platforms",
        "Advanced fraud detection and prevention systems",
        "Customizable checkout experience to match your brand",
        "Detailed transaction analytics and reporting",
      ],
    },
    {
      title: "Almond Escrow",
      img: "/assets/escrow.jpg",
      description:
        "Almond Escrow brings trust and security to complex transactions through our blockchain-based escrow service. Designed for businesses that require secure fund holding and release mechanisms, Almond Escrow ensures that all parties can transact with confidence. Our smart contract technology automates the escrow process, reducing the risk of fraud and streamlining the release of funds based on predefined conditions.",
      features: [
        "Secure third-party fund holding with multi-signature wallets",
        "Customizable release conditions based on smart contracts",
        "Real-time transaction tracking and notifications",
        "Dispute resolution system with optional arbitration",
        "Integration with Almond Pay for seamless fund transfers",
        "Compliance with international escrow regulations",
      ],
    },
    {
      title: "Almond DeFi",
      img: "/assets/almond-defi.svg",
      description:
        "Almond DeFi is our cutting-edge decentralized finance platform, offering a wide range of opportunities for yield farming, liquidity provision, and participation in the growing DeFi ecosystem. Built on top of leading blockchain networks, Almond DeFi provides both novice and experienced users with accessible yet powerful tools to maximize their crypto assets' potential. Our platform is designed with security, efficiency, and user experience at its core.",
      features: [
        "High-yield farming opportunities across multiple protocols",
        "Liquidity pools with competitive APY rates",
        "User-friendly interface for easy token swaps and trades",
        "Governance participation through ALMD token staking",
        "Cross-chain bridge for seamless asset transfer between networks",
        "Advanced analytics and yield optimization strategies",
      ],
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8" id="products-services">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center text-[#662D91] mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Products and Services
        </motion.h2>

        {products.map((product, index) => (
          <ProductSection
            key={index}
            {...product}
            imagePosition={index % 2 === 0 ? "right" : "left"}
          />
        ))}

        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-3xl font-semibold mb-6 text-[#662D91]">
            Why Choose Almond?
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            At Almond, we're committed to revolutionizing the financial
            landscape through innovative blockchain solutions. Our suite of
            products and services is designed to empower individuals and
            businesses alike, offering unparalleled security, efficiency, and
            accessibility. By choosing Almond, you're not just selecting a
            service provider – you're partnering with a visionary team dedicated
            to shaping the future of finance. Experience the perfect blend of
            traditional financial wisdom and cutting-edge technology with
            Almond.
          </p>
          <CallToAction />
        </motion.div>
      </div>
    </div>
  );
};

export default AlmondProductsServices;
