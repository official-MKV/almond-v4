import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Assume the SVG is in the public folder
const almondToken = "/assets/almondtoken.svg";

const AlmondTokenAnimation = () => {
  const tokens = Array(6).fill(0);

  return (
    <div className="relative w-full h-64 perspective-1000">
      {tokens.map((_, index) => {
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              width: `${10 + index * 5}%`,
              height: `${10 + index * 5}%`,
              top: "50%",
              left: "50%",
              transformOrigin: "center center",
              zIndex: index,
            }}
            animate={{
              rotate: [0, 360],
              x: [
                Math.cos((index * 2 * Math.PI) / tokens.length) * 100,
                Math.cos(((index + 1) * 2 * Math.PI) / tokens.length) * 100,
              ],
              y: [
                Math.sin((index * 2 * Math.PI) / tokens.length) * 100,
                Math.sin(((index + 1) * 2 * Math.PI) / tokens.length) * 100,
              ],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: delay,
            }}
          >
            <Image
              src={almondToken}
              alt="Almond Token"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

const AlmondDefiCTA = () => {
  return (
    <div className="bg-gradient-to-br from-[#662D91] via-[#9945da] to-[#662D91] rounded-xl p-4 sm:p-8 max-w-[95vw] sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] mx-auto text-white">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">
            Get Rewards with Almond
          </h1>
          <p className="text-base sm:text-lg mb-6">
            Use the Almond app to earn Almond tokens, which can be redeemed on
            our partner platforms. Experience the power of DeFi with Almond.
          </p>
          <p className="text-sm sm:text-md mb-8">
            Almond is a decentralized finance (DeFi) platform that offers users
            a seamless experience in managing, earning, and utilizing digital
            assets. By leveraging blockchain technology, Almond ensures
            transparency, security, and a range of financial services that
            empower users globally.
          </p>
          <motion.button
            className="mt-4 sm:mt-8 bg-white text-[#662D91] px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-purple-200 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center relative">
          <AlmondTokenAnimation />
        </div>
      </div>
    </div>
  );
};

export default AlmondDefiCTA;
