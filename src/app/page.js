"use client";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";
// import SplineHero from "@/components/SplineHero"
import WordRotate from "@/components/magicui/word-rotate";
import SplineScene from "@/components/SplineHero";
import Marquee from "@/components/magicui/marquee";
import ProductReviewSection from "@/components/ProductReviewSection";
import { motion } from "framer-motion";
import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import SlidingCreditCards from "@/components/AllInOneCards";
import AlmondBenefitsSection from "@/components/AlmondBenefitsSection";
import AlmondCreditSection from "@/components/AlmondCreditSection";
import BillSplittingComponent from "@/components/BillSplitSSection";
import AlmondDefiCTA from "@/components/AlmondDefiCTA";
import FAQSection from "@/components/AlmondFAQ";
import CustomizedSavingsComponent from "@/components/AlmondSaving";
import AlmondNewsBlogSection from "@/components/BlogSection";
export default function Home() {
  const partners = [
    { img: "/assets/partner-1.svg" },
    { img: "/assets/partner-2.png" },
  ];
  return (
    <main className="max-w-screen overflow-hidden">
      <section
        id="hero"
        className="relative bg-gradient-to-br from-[#662D91] via-[#9945da] to-[#662D91] w-full min-h-screen flex items-center"
      >
        <div className="z-20 relative w-full h-full px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row overflow-hidden justify-center items-center">
          <Spotlight
            className="absolute top-0 right-0 lg:left-60 lg:-top-20"
            fill="purple"
          />
          <div className="text-white w-full lg:w-1/2 h-full flex flex-col justify-center lg:pl-8 gap-6 mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light leading-tight">
              Almond- Your
              <WordRotate
                className="font-bold text-purple-900"
                duration={5000}
                words={["All-In-One", "Everyday"]}
              />
              Finance App
            </h1>
            <h2 className="text-base sm:text-lg font-extralight">
              Manage your finances with ease. Almond offers a digital wallet,
              bill payment, virtual card, money requests, bill splitting, and
              transaction-based rewards in Almond tokens.
            </h2>
            <div className="w-full relative justify-start mt-6 flex flex-col sm:flex-row gap-4">
              <motion.button
                className="cursor-pointer text-lg sm:text-xl w-full sm:w-fit text-white px-8 sm:px-11 py-4 sm:py-5 rounded-full bg-[#662D91] hover:bg-purple-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Now
              </motion.button>
              <motion.button
                className="cursor-pointer text-lg sm:text-xl w-full sm:w-fit text-white px-8 sm:px-11 py-4 sm:py-5 rounded-full border-2 border-white hover:bg-white hover:text-[#662D91] transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-64 sm:h-96 lg:h-full md:scale-1 ">
            <SplineScene />
          </div>
        </div>
        <div className="absolute md:bottom-5 bottom-1 w-full flex items-center justify-center">
          <div className="md:w-[50%] w-full relative overflow-hidden flex gap-[40px]">
            <Marquee>
              {partners.map((item, index) => {
                return (
                  <div className="w-32 h-32 relative ">
                    <img
                      src={item.img}
                      className="object-contain w-full h-full"
                    />
                  </div>
                );
              })}
            </Marquee>
          </div>
        </div>
      </section>
      <section id="product_overview" className="w-full relative h-fit">
        <ProductReviewSection />
      </section>
      <section
        id="cards_promor"
        className="h-fit w-full bg-purple-200 flex flex-col items-center justify-center"
      >
        <SlidingCreditCards />
      </section>
      {/* <section id="benefits">
        <AlmondBenefitsSection />
      </section> */}
      <section
        id="almond_credit_section"
        className="w-full min-h-[60vh] flex items-center justify-center bg--200"
      >
        <AlmondCreditSection />
      </section>

      <section
        id="featured_products"
        className="w-full min-h-[60vh] flex items-center justify-center"
      >
        <BillSplittingComponent />
      </section>
      <section
        id="call_to_action"
        className="w-full min-h-[60vh] flex items-center justify-center "
      >
        <AlmondDefiCTA />
      </section>
      <section
        id="customized_savings"
        className="w-full min-h-[80vh] flex items-center justify-center bg-purple-200 mt-[100px] relative md:mt-0"
      >
        <CustomizedSavingsComponent />
      </section>
      <section>
        <AlmondNewsBlogSection />
      </section>
      <section
        id="faq"
        className="w-full min-h-[60vh] flex items-center justify-center"
      >
        <FAQSection />
      </section>
    </main>
  );
}
