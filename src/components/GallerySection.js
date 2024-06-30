// src/components/GallerySection.js
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const GalleryItem = ({ src, alt }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <StaticImage
        src={src}
        alt={alt}
        layout="fullWidth"
        aspectRatio={16 / 9}
      />
    </div>
  )
}

const GallerySection = () => {
  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <GalleryItem src="../images/gallery-1.jpg" alt="Project 1" />
          <GalleryItem src="../images/gallery-2.jpg" alt="Project 2" />
          <GalleryItem src="../images/gallery-3.jpg" alt="Project 3" />
          {/* Add more items as needed */}
        </div>
      </div>
    </div>
  )
}

export default GallerySection
