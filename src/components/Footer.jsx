"use client";

import React from "react";
import { Mail, Phone, MapPin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#662D91] text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Company Info */}
        <div className="mb-6 md:mb-0">
          {/* Replace with your logo */}
          <img
            classNamre="h-8 w-auto relative"
            style={{ objectFit: "cover" }}
            src="/assets/Logo.svg"
            alt="Almond Logo"
          />

          <p>Empowering your financial future.</p>
        </div>

        {/* Contact Information */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <div className="flex items-center mb-1">
            <Mail className="mr-2" />
            <span>support@almondnigeria.com</span>
          </div>
          <div className="flex items-center mb-1">
            <Phone className="mr-2" />
            <span>+123 456 7890</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2" />
            <span>
              No.10 Omowumi Street, New Oko-oba, Alimosho Lagos State.s
            </span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://twitter.com/almondfintech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="hover:text-gray-300" />
          </a>
          <a
            href="https://facebook.com/almondfintech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="hover:text-gray-300" />
          </a>
          <a
            href="https://linkedin.com/company/almondfintech"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <LinkedIn className="hover:text-gray-300" /> */}
          </a>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>
          &copy; {new Date().getFullYear()} Almond Nigeria. All rights reserved.
        </p>
        <p>
          <a href="/privacy-policy" className="underline hover:text-gray-300">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms-of-service" className="underline hover:text-gray-300">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
