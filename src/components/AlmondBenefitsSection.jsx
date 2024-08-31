import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Smartphone,
  CreditCard,
  PiggyBank,
  Zap,
  Users,
  Gift,
} from "lucide-react";

const benefits = [
  {
    icon: <Smartphone className="w-12 h-12 text-[#662D91]" />,
    title: "All-in-One Banking",
    description:
      "Manage your finances, pay bills, and send money securely from a single app. Experience the convenience of having all your banking needs at your fingertips, anytime and anywhere.",
    image: "/assets/testimg.jpg",
  },
  {
    icon: <Users className="w-12 h-12 text-[#662D91]" />,
    title: "Easy Bill Splitting",
    description:
      "Split expenses with friends effortlessly, making shared costs a breeze. No more awkward conversations or complicated calculations – just simple, fair, and instant bill splitting.",
    image: "/assets/testimg.jpg",
  },
  {
    icon: <PiggyBank className="w-12 h-12 text-[#662D91]" />,
    title: "Smart Savings",
    description:
      "Save for your future with competitive interest rates and intelligent saving features. Set goals, track your progress, and watch your money grow with our advanced savings tools.",
    image: "/assets/testimg.jpg",
  },
  {
    icon: <Gift className="w-12 h-12 text-[#662D91]" />,
    title: "Rewarding Transactions",
    description:
      "Earn Almond tokens as rewards for every transaction you make. Use these tokens for discounts, exclusive offers, or convert them to cash – making every purchase more rewarding.",
    image: "/assets/testimg.jpg",
  },
  {
    icon: <CreditCard className="w-12 h-12 text-[#662D91]" />,
    title: "Flexible Card Options",
    description:
      "Choose between virtual and physical cards to suit your spending needs. Enjoy the security of a physical card or the convenience of a virtual one, all managed from your Almond app.",
    image: "/assets/testimg.jpg",
  },
  {
    icon: <Zap className="w-12 h-12 text-[#662D91]" />,
    title: "Cutting-Edge Technology",
    description:
      "Experience the perfect blend of traditional banking and innovative financial solutions. From AI-powered insights to blockchain security, we're always at the forefront of fintech.",
    image: "/assets/testimg.jpg",
  },
];

const BenefitCard = ({ benefit, isActive }) => {
  const textControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    if (isActive) {
      textControls.start({ opacity: [0, 0.5, 1], x: [-200, -100, 0] });
      imageControls.start({ opacity: [0, 0.5, 1], x: [200, 100, 0] });
    } else {
      textControls.start({ opacity: [1, 0, 0], x: -200 });
      imageControls.start({ opacity: [1, 0, 0], x: 200 });
    }
  }, [isActive, textControls, imageControls]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8">
      <motion.div
        className="md:w-1/2 mb-6 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={textControls}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center mb-4">
          <h3 className=" text-5xl font-bold text-[#662D91]">
            {benefit.title}
          </h3>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed w-[70%]">
          {benefit.description}
        </p>
      </motion.div>
      <motion.div
        className="md:w-1/2 w-full rounded-[20px] overflow-hidden h-[400px] bg-purple-400 flex items-center justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={imageControls}
        transition={{ duration: 1 }}
      >
        <img
          src={benefit.image}
          alt={benefit.title}
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
};

const AlmondAnimatedBenefitsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    let prevScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;
          const viewportHeight = window.innerHeight;

          if (
            currentScrollY > prevScrollY &&
            activeIndex < benefits.length - 1
          ) {
            // Scrolling down
            if (
              currentScrollY >
              sectionTop +
                (activeIndex + 1) * (sectionHeight / benefits.length) -
                viewportHeight / 2
            ) {
              setActiveIndex((prevIndex) =>
                Math.min(prevIndex + 1, benefits.length - 1)
              );
            }
          } else if (currentScrollY < prevScrollY && activeIndex > 0) {
            // Scrolling up
            if (
              currentScrollY <
              sectionTop +
                activeIndex * (sectionHeight / benefits.length) -
                viewportHeight / 2
            ) {
              setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
            }
          }

          prevScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <section ref={sectionRef} className=" py-16">
      <div className="max-w-6xl min-h-screen mx-auto px-4 flex items-center justify-center  flex-col">
        <h2 className="text-4xl font-bold text-center text-[#662D91] mb-12">
          Why Choose Almond?
        </h2>
        <div
          className="space-y-24 "
          style={{ height: `${benefits.length * 100}vh` }}
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="sticky top-1/4">
              <BenefitCard benefit={benefit} isActive={index === activeIndex} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlmondAnimatedBenefitsSection;
