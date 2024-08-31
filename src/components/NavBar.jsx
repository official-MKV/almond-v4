"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Send } from "lucide-react";

const AlmondNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHomeSection, setIsHomeSection] = useState(true);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Products", href: "/about-us/#products" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !isScrolled) {
        setIsScrolled(true);
      }
    };

    const checkHomeSection = () => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const rect = homeSection.getBoundingClientRect();
        setIsHomeSection(rect.top <= 0 && rect.bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", checkHomeSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", checkHomeSection);
    };
  }, [isScrolled]);

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 relative w-[5rem] ">
              <img
                className="h-8 w-auto relative"
                style={{ objectFit: "cover" }}
                src={
                  !isHomeSection && !isScrolled
                    ? "/assets/Logo.svg"
                    : "/assets/Logo-2.svg"
                }
                alt="Almond Logo"
              />
            </div>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:bg-[#662D91] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              className="bg-[#0088cc] text-white px-4 py-2 rounded-full hover:bg-[#0077b5] transition duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={18} />
              <span>Join Telegram Community</span>
            </motion.button>
            <motion.button
              className="bg-[#662D91] text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Almond Finance App</span>
            </motion.button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#662D91]"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:bg-[#662D91] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="px-2 pt-2 pb-3 space-y-2">
            <motion.button
              className="w-full bg-[#0088cc] text-white px-4 py-2 rounded-full hover:bg-[#0077b5] transition duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={18} />
              <span>Join Telegram Community</span>
            </motion.button>
            <motion.button
              className="w-full bg-[#662D91] text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Almond Finance App</span>
            </motion.button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default AlmondNavbar;
