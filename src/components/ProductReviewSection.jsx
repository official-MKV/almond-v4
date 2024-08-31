"use client";
import React from "react";
import { motion } from "framer-motion";
import { Send, Zap, RefreshCw, PiggyBank } from "lucide-react";
import { useInView } from "react-intersection-observer";

const ProductReviewSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      title: "Instant Payments",
      description:
        "Pay bills securely for utilities, services, and fees in one place.",
      icon: Zap,
    },
    {
      title: "Effortless Transfers",
      description:
        "Send money instantly, anywhere. Easy dispute resolution included.",
      icon: RefreshCw,
    },
    {
      title: "Smart Financial Management",
      description:
        "Save with competitive rates, request money, and split bills effortlessly.",
      icon: PiggyBank,
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center    bg-white p-8"
    >
      <motion.div className="relative group" whileHover={{ scale: 1.05 }}>
        <Send size={64} className="text-purple-600" />
        <motion.div
          className="absolute inset-0 bg-purple-500 rounded-full -z-10"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <h2 className="text-4xl font-bold mt-8 mb-4 text-center text-[#662D91]">
        Product Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center text-center text-[#662D91]"
          >
            <motion.div
              className="mb-4 text-purple-600"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <feature.icon size={40} />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 w-[50%]">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductReviewSection;
