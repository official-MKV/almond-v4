import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is Almond?",
    answer:
      "Almond is a cutting-edge fintech startup that aims to simplify personal finance management through innovative technology and user-friendly solutions.",
  },
  {
    question: "How does Almond protect my financial data?",
    answer:
      "Almond employs state-of-the-art encryption and security measures to ensure your financial data is always protected. We use bank-level security protocols and regular security audits to maintain the highest standards of data protection.",
  },
  {
    question: "What features does Almond offer?",
    answer:
      "Almond offers a range of features including budget tracking, investment management, bill reminders, and personalized financial advice powered by AI.",
  },
  {
    question: "Is Almond available on mobile devices?",
    answer:
      "Yes, Almond is available as a mobile app for both iOS and Android devices, allowing you to manage your finances on the go.",
  },
  {
    question: "How much does Almond cost?",
    answer:
      "Almond offers a free basic plan and premium plans starting at $9.99 per month. Check our pricing page for more details on features included in each plan.",
  },
];

const FAQSection = () => {
  return (
    <div className="md:w-[70vw] w-full mx-auto p-6 bg-white ">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#662D91]">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between w-full"
              >
                <span>{faq.question}</span>
                <ChevronDown className="h-4 w-4 text-[#662D91] transition-transform duration-200" />
              </motion.div>
            </AccordionTrigger>
            <AnimatePresence>
              <AccordionContent>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              </AccordionContent>
            </AnimatePresence>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
