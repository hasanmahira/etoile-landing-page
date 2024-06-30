// src/components/BlogSection.js
import React from "react"
import { Link } from "gatsby"

const BlogPost = ({ title, summary, slug }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow">
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="text-gray-700 mt-2">{summary}</p>
      <Link
        to={slug}
        className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
      >
        Read More
      </Link>
    </div>
  )
}

const BlogSection = () => {
  return (
    <div className="py-10 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BlogPost
            title="Design Trends 2024"
            summary="Explore the latest design trends that are shaping the industry in 2024."
            slug="/blog/design-trends-2024"
          />
          <BlogPost
            title="Effective Marketing Strategies"
            summary="Discover the most effective marketing strategies for your brand."
            slug="/blog/effective-marketing"
          />
          {/* Add more posts as needed */}
        </div>
      </div>
    </div>
  )
}

export default BlogSection
