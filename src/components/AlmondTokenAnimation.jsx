import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Import the Almond token SVG
import almondToken from "../../public/assets/almondtoken.svg";

const AlmondTokenAnimation = () => {
  const tokens = Array(6).fill(0); // Create an array for 6 tokens

  return (
    <div className="relative w-full h-64 perspective-1000">
      {tokens.map((_, index) => {
        // Calculate a delay for each token to make the rotation non-uniform
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              width: `${10 + index * 5}%`, // The size changes based on the position
              height: `${10 + index * 5}%`,
              top: "50%",
              left: "50%",
              transformOrigin: "center center",
              zIndex: index,
            }}
            animate={{
              rotate: [0, 360], // This makes the tokens revolve around the center
              x: [
                Math.cos((index * 2 * Math.PI) / tokens.length) * 100, // x position along a circular path
                Math.cos(((index + 1) * 2 * Math.PI) / tokens.length) * 100,
              ],
              y: [
                Math.sin((index * 2 * Math.PI) / tokens.length) * 100, // y position along a circular path
                Math.sin(((index + 1) * 2 * Math.PI) / tokens.length) * 100,
              ],
              scale: [1, 1.5, 1], // Scale changes to simulate depth
            }}
            transition={{
              duration: 10, // Controls the speed of the rotation
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

export default AlmondTokenAnimation;
