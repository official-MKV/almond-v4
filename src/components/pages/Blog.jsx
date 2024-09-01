"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const BlogPost = ({ title, excerpt, image, date, category, id }) => (
  <motion.div
    className="bg-white rounded-lg shadow-md overflow-hidden"
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <Link href={`/blog/${id}`}>
      <div className="relative h-48 md:h-64">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">{date}</span>
          <span className="text-xs font-semibold text-[#662D91] bg-purple-100 px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <motion.a
          href="#"
          className="inline-flex items-center text-[#662D91] font-semibold"
          whileHover={{ x: 5 }}
        >
          Read More <ArrowRight className="ml-2 h-4 w-4" />
        </motion.a>
      </div>
    </Link>
  </motion.div>
);

const CallToAction = () => (
  <div className="bg-gradient-to-br from-[#662D91] rounded-2xl via-[#9945da] to-[#662D91]  shadow-xl p-8 mt-16 flex flex-col md:flex-row items-center justify-between">
    <div className="md:w-1/2 mb-8 md:mb-0">
      <h2 className="text-3xl font-bold text-white mb-4">
        Get the Almond App Now
      </h2>
      <p className="text-white mb-6">
        Experience the future of finance with Almond. Download our app and start
        your DeFi journey today!
      </p>
      <motion.button
        className="bg-white text-[#662D91] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Download Now
      </motion.button>
    </div>
    <div className="md:w-1/2 relative h-64 md:h-80">
      <Image
        src="/assets/image-4.svg"
        alt="Almond App"
        layout="fill"
        objectFit="contain"
      />
    </div>
  </div>
);

const AlmondBlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Almond's DeFi Platform Reaches 1 Million Users",
      excerpt:
        "In a milestone achievement, Almond's decentralized finance platform has surpassed 1 million active users, marking a significant step in the adoption of DeFi solutions.",
      image: "/assets/featured-post.jpg",
      date: "June 15, 2025",
      category: "Milestone",
    },
    {
      id: 2,
      title: "Understanding Yield Farming with Almond Tokens",
      excerpt:
        "Dive into the world of yield farming and learn how Almond tokens can maximize your returns in the DeFi ecosystem.",
      image: "/assets/yield-farming.jpg",
      date: "June 10, 2025",
      category: "Education",
    },
    {
      id: 3,
      title: "Almond Partners with Major Retailer for Token Rewards",
      excerpt:
        "Exciting news as Almond announces a partnership with a major retail chain, allowing customers to earn and spend Almond tokens.",
      image: "/assets/partnership.jpg",
      date: "June 5, 2025",
      category: "Partnership",
    },
    {
      id: 4,
      title: "New Feature: Almond's AI-Powered Financial Advisor",
      excerpt:
        "Introducing our latest feature: an AI-powered financial advisor that helps you make smarter decisions with your Almond tokens.",
      image: "/assets/ai-advisor.jpg",
      date: "May 28, 2025",
      category: "Product Update",
    },
    {
      id: 5,
      title: "The Future of DeFi: Almond's Vision for 2026",
      excerpt:
        "Our CEO shares insights on the future of decentralized finance and Almond's role in shaping the industry landscape.",
      image: "/assets/future-of-defi.jpg",
      date: "May 20, 2025",
      category: "Vision",
    },
    {
      id: 6,
      title: "Almond Token Staking: A Comprehensive Guide",
      excerpt:
        "Learn everything you need to know about staking Almond tokens and earning passive income in our ecosystem.",
      image: "/assets/token-staking.jpg",
      date: "May 15, 2025",
      category: "Guide",
    },
  ];

  // Sort blog posts by date (newest first)
  const sortedPosts = blogPosts.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className=" min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-[50px]">
        <h1 className="text-4xl font-bold text-[#662D91] mb-8">Almond Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <motion.button
            className="bg-[#662D91] text-white px-6 py-3 rounded-full hover:bg-purple-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Articles
          </motion.button>
        </div>

        <CallToAction />
      </div>
    </div>
  );
};

export default AlmondBlogPage;
