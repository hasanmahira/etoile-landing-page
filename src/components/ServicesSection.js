// src/components/ServicesSection.js
import React from "react"

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-blue-900 rounded-lg p-6 text-center text-white shadow-lg">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

const ServicesSection = () => {
  return (
    <div className="py-10 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ServiceCard
            title="Web Design"
            description="Innovative web design solutions that create engaging user experiences."
          />
          <ServiceCard
            title="Graphic Design"
            description="Stunning graphics that communicate effectively and resonate with audiences."
          />
          <ServiceCard
            title="Digital Marketing"
            description="Strategies to enhance your online presence and grow your business."
          />
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
