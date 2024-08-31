import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MessageSquare } from "lucide-react";

const BillSplittingComponent = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0 relative"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <MessageStack />
          <Image
            src="/assets/illustration-8.svg"
            alt="Almond Bill Splitting"
            width={900}
            height={900}
            className="rounded-lg"
          />
        </motion.div>

        <motion.div
          className="md:w-1/2 md:pl-12" // Adjusted for more space between image and text
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-[#662D91]">
            Split bills easily
          </h1>
          <h2 className="text-2xl text-gray-600 mb-6">
            Divide expenses with friends effortlessly
          </h2>
          <motion.button
            className="bg-[#662D91] text-white px-6 py-3 rounded-full hover:bg-purple-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn more
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

const MessageStack = () => {
  const fadeInSlide = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const messages = [
    "Ali sent NGN57,000.00 for Zaza outing",
    "Chris sent NGN43,050.00 for Zaza outing",
    "Tope sent NGN20,000.00 for Zaza outing",
  ];

  return (
    <div className="relative">
      {messages.map((message, index) => (
        <motion.div
          key={index}
          className={`absolute bg-white p-3 rounded-lg shadow-lg max-w-xs left-0`}
          initial="hidden"
          animate="visible"
          variants={fadeInSlide}
          transition={{ delay: index * 1, duration: 0.5 }}
          style={{
            zIndex: messages.length + index, // Higher zIndex for front elements
            transform: `translateX(${index * 50}px)`,
            y: index * 20,
            marginLeft: index * 20, // Adjusted for horizontal stacking
          }}
        >
          <div className="flex items-start">
            <div className="bg-purple-100 p-2 rounded-full mr-3">
              <MessageSquare className="text-purple-600 w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-600">{message}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BillSplittingComponent;
