"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";

// Mock data for blog posts
const blogPosts = [
  {
    id: "1",
    title: "Almond's DeFi Platform Reaches 1 Million Users",
    content:
      "In a milestone achievement, Almond's decentralized finance platform has surpassed 1 million active users, marking a significant step in the adoption of DeFi solutions. This article explores the journey to this milestone and what it means for the future of decentralized finance...",
    image: "/assets/illustration-6.svg",
    date: "June 15, 2025",
    category: "Milestone",
    author: "Jane Doe",
  },
  {
    id: "2",
    title: "Understanding Yield Farming with Almond Tokens",
    content:
      "Dive into the world of yield farming and learn how Almond tokens can maximize your returns in the DeFi ecosystem. This comprehensive guide covers the basics of yield farming, strategies for success, and how Almond's unique features give you an edge in the market...",
    image: "/assets/yield-farming.jpg",
    date: "June 10, 2025",
    category: "Education",
    author: "John Smith",
  },
  // Add more blog posts here...
];

const RecommendedPost = ({ title, image, id }) => (
  <Link href={`/blog/${id}`}>
    <div className="flex items-center space-x-4 mb-4 hover:bg-gray-100 p-2 rounded transition duration-300">
      <div className="relative w-16 h-16 flex-shrink-0">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>
      <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
    </div>
  </Link>
);

const BlogPostPage = () => {
  const { id } = useParams();
  console.log(id);
  // Find the current post
  const post = blogPosts.find((post) => post.id === id);

  // Get recommended posts (excluding the current post)
  const recommendedPosts = blogPosts.filter((p) => p.id !== id).slice(0, 3);

  if (!post) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Loader2 className="animate-spin text-[#662D91] text-[7rem]" />
      </div>
    );
  }

  return (
    <div className=" min-h-screen py-12 mt-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog">
          <span className="inline-flex items-center text-[#662D91] font-semibold mb-8 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
          </span>
        </Link>

        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Main content */}
          <div className="lg:w-2/3">
            <article className="bg-white rounded-lg  overflow-hidden">
              <div className="relative h-64 sm:h-80 md:h-96">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span className="text-[#662D91] bg-purple-100 px-2 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
                <div className="prose max-w-none">
                  <p>{post.content}</p>
                  {/* Add more formatted content here */}
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar with recommendations */}
          <div className="lg:w-1/3 hidden lg:block">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Recommended Articles
              </h2>
              {recommendedPosts.map((post) => (
                <RecommendedPost key={post.id} {...post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
