import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const BlogPost = ({ title, excerpt, image, date, category, id }) => {
  const router = useRouter();
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={() => {
        router.push(`/blog/${id}`);
      }}
    >
      <div className="relative h-48 md:h-64">
        <Image
          src="/assets/illustration-4.svg"
          alt={title}
          layout="fill"
          objectFit="cover"
        />
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
          href=""
          className="inline-flex items-center text-[#662D91] font-semibold"
          whileHover={{ x: 5 }}
        >
          Read More <ArrowRight className="ml-2 h-4 w-4" />
        </motion.a>
      </div>
    </motion.div>
  );
};
const AlmondNewsBlogSection = () => {
  const featuredPost = {
    title: "Almond's DeFi Platform Reaches 1 Million Users",
    excerpt:
      "In a milestone achievement, Almond's decentralized finance platform has surpassed 1 million active users, marking a significant step in the adoption of DeFi solutions.",
    image: "/assets/featured-post.jpg",
    date: "June 15, 2025",
    category: "Milestone",
  };

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Yield Farming with Almond Tokens",
      excerpt:
        "Dive into the world of yield farming and learn how Almond tokens can maximize your returns in the DeFi ecosystem.",
      image: "/assets/yield-farming.jpg",
      date: "June 10, 2025",
      category: "Education",
    },
    {
      id: 2,
      title: "Almond Partners with Major Retailer for Token Rewards",
      excerpt:
        "Exciting news as Almond announces a partnership with a major retail chain, allowing customers to earn and spend Almond tokens.",
      image: "/assets/partnership.jpg",
      date: "June 5, 2025",
      category: "Partnership",
    },
    {
      id: 3,
      title: "New Feature: Almond's AI-Powered Financial Advisor",
      excerpt:
        "Introducing our latest feature: an AI-powered financial advisor that helps you make smarter decisions with your Almond tokens.",
      image: "/assets/ai-advisor.jpg",
      date: "May 28, 2025",
      category: "Product Update",
    },
  ];
  const router = useRouter();
  return (
    <div className="bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Almond News & Insights
        </h2>

        {/* Featured Post */}
        <div className="mb-12">
          <BlogPost {...featuredPost} />
        </div>

        {/* Grid of other posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <motion.button
            className="bg-[#662D91] text-white px-6 py-3 rounded-full hover:bg-purple-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              router.push("/blog");
            }}
          >
            View All Articles
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default AlmondNewsBlogSection;
