import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MessageSquare } from "lucide-react";

const AlmondCreditSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0 relative"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/assets/illustration-7.svg"
            alt="Almond Credit Improvement"
            width={900}
            height={900}
          />
          <motion.div
            className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg max-w-xs"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <MessageSquare className="text-purple-600 w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  You don dey manage your money wellar, you fit spend NGN50,000
                  above your current balance
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-[#662D91]">
            Improve your credit score by using almond
          </h1>
          <h2 className="text-2xl text-gray-600 mb-6">
            Get access to credit/overdraft
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

export default AlmondCreditSection;
