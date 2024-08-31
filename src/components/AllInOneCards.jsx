"use client";
import React from "react";
import { motion } from "framer-motion";
import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardStack } from "./ui/card-stack";
import { useEffect, useState } from "react";

const cardColors = [
  "from-lime-300 to-lime-500",
  "from-purple-400 to-purple-600",
  "from-black via-slate-900 to-slate-100",
];

const cardPatterns = [
  "bg-gradient-to-br",
  "bg-gradient-to-tr",
  "bg-gradient-to-tr",
];

const CardComponent = ({ color, pattern, index, currentCard, totalCards }) => {
  const isFront = currentCard === index;
  const isSecond = currentCard === (index - 1 + totalCards) % totalCards;
  const delay = index * 5;
  return (
    <motion.div
      className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-72 h-40 sm:h-44 ${pattern} ${color} rounded-xl shadow-lg overflow-hidden`}
      // initial={{
      //   zIndex: isFront ? 3 : isSecond ? 2 : 1,
      //   y: isFront ? 0 : isSecond ? -50 : -100,
      //   scale: 1,
      //   z: isFront ? -50 : isSecond ? -100 : -150,
      // }}
      // animate={{
      //   zIndex: isFront ? [1, 2, 3] : isSecond ? 2 : [3, 2, 1, 1],
      //   y: isFront ? [0, -50, -250] : 0,
      //   z: isFront ? [0, -100, -250] : 0,
      // }}
      transition={{
        duration: 4,
        ease: "linear",
      }}
      //   style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
        <div className="flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold">Almond</div>
          <CreditCard size={24} className="sm:w-8 sm:h-8" />
        </div>
        <div className="text-sm sm:text-lg tracking-wider">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <span key={i} className="mr-2">
                {Math.floor(1000 + Math.random() * 9000)}
              </span>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export const CARDS = [
  {
    id: 0,
    cardName: "Almond Rewards",
    cardNumber: "4929 1234 5678 9010",
    cardHolder: "SARAH JOHNSON",
    expiryDate: "12/25",
    content: (
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-white bg-gradient-to-tr from-lime-300 to-lime-500">
        <div className="flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold">Almond Rewards</div>
          <CreditCard size={24} className="sm:w-8 sm:h-8" />
        </div>
        <div className="text-sm sm:text-lg tracking-wider">
          4929 1234 5678 9010
        </div>
        <div className="flex justify-between items-end">
          <div>
            <div className="text-xs uppercase">Card Holder</div>
            <div className="font-semibold">SARAH JOHNSON</div>
          </div>
          <div>
            <div className="text-xs uppercase">Expires</div>
            <div className="font-semibold">12/25</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    cardName: "Almond Business",
    cardNumber: "5412 2345 6789 0123",
    cardHolder: "ALEX CHEN",
    expiryDate: "09/24",
    content: (
      <div className="absolute inset-0 flex flex-col   justify-between p-4 text-white bg-gradient-to-br from-purple-400 to-purple-600">
        <div className="flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold">Almond Business</div>
          <CreditCard size={24} className="sm:w-8 sm:h-8" />
        </div>
        <div className="text-sm sm:text-lg tracking-wider">
          5412 2345 6789 0123
        </div>
        <div className="flex justify-between items-end">
          <div>
            <div className="text-xs uppercase">Card Holder</div>
            <div className="font-semibold">ALEX CHEN</div>
          </div>
          <div>
            <div className="text-xs uppercase">Expires</div>
            <div className="font-semibold">09/24</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    cardName: "Almond Platinum",
    cardNumber: "3782 3456 7890 1234",
    cardHolder: "EMILY RODRIGUEZ",
    expiryDate: "06/26",
    content: (
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-white   bg-gradient-to-tr from-black via-slate-900 to-slate-100">
        <div className="flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold">Almond Platinum</div>
          <CreditCard size={24} className="sm:w-8 sm:h-8" />
        </div>
        <div className="text-sm sm:text-lg tracking-wider">
          3782 3456 7890 1234
        </div>
        <div className="flex justify-between items-end">
          <div>
            <div className="text-xs uppercase">Card Holder</div>
            <div className="font-semibold">EMILY RODRIGUEZ</div>
          </div>
          <div>
            <div className="text-xs uppercase">Expires</div>
            <div className="font-semibold">06/26</div>
          </div>
        </div>
      </div>
    ),
  },
];

// Card colors and patterns (unchanged from your original code)

const SlidingCreditCards = () => {
  const [cards, setCards] = useState([0, 1, 2]);
  const [currentCard, setCurrentCard] = useState(0);
  const totalCards = 3;
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentCard((prev) => (prev + 1) % cards.length);
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, [cards.length]);
  return (
    <section
      id="cards_promor"
      className="min-h-[60vh] w-full bg-gradient-to-br from-purple-100 to-indigo-100 flex flex-col items-center justify-center py-8 sm:py-12"
    >
      <div className="max-w-6xl w-full px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#662D91] mb-4">
              Almond All-in-One Cards: Promo
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              Link all your accounts to one card, managed seamlessly through the
              Almond app.
            </p>
            <motion.button
              className="bg-[#662D91] text-white px-6 py-3 rounded-full hover:bg-purple-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join WaitList
            </motion.button>
          </div>
          <div className="w-full md:w-1/2 relative h-72 sm:h-96 flex items-center justify-center ">
            <div
              className="absolute inset-0 perspective-1000 flex items-center justify-center"
              style={{ perspective: "1000px" }}
            >
              <CardStack items={CARDS} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlidingCreditCards;
