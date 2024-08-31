import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PiggyBank, Umbrella, Plane, Car, GraduationCap } from "lucide-react";

const CustomizedSavingsComponent = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className=" py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0 relative"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/assets/savings.svg"
            alt="Almond Customized Savings"
            width={600}
            height={600}
            className="rounded-lg"
          />
          <SavingsOverlays />
        </motion.div>

        <motion.div
          className="md:w-1/2 md:pl-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-[#662D91]">
            Customized Savings
          </h1>
          <h2 className="text-2xl text-gray-600 mb-6">
            Tailor your savings goals to your unique needs
          </h2>
          <motion.button
            className="bg-[#662D91] text-white px-6 py-3 rounded-full hover:bg-purple-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start saving
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

const SavingsOverlays = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const savingsTypes = [
    {
      Icon: PiggyBank,
      text: "Emergency Fund: NGN500,000 saved",
      position: "top-4 left-4",
    },
    {
      Icon: Umbrella,
      text: "Rainy Day Fund: NGN200,000 saved",
      position: "top-4 right-4",
    },
    {
      Icon: Plane,
      text: "Dream Vacation: 60% complete",
      position: "bottom-4 left-4",
    },
    {
      Icon: Car,
      text: "New Car: NGN1,200,000 saved",
      position: "bottom-4 right-4",
    },
    {
      Icon: GraduationCap,
      text: "Education: NGN800,000 saved",
      position: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    },
  ];

  return (
    <>
      {savingsTypes.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.position} bg-white p-3 rounded-lg shadow-lg max-w-xs`}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
        >
          <div className="flex items-start">
            <div className="bg-purple-100 p-2 rounded-full mr-3">
              <item.Icon className="text-[#662D91] w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default CustomizedSavingsComponent;
