// src/components/TestimonialsSection.js
import React from "react"

const Testimonial = ({ quote, author }) => {
  return (
    <blockquote className="text-white italic">
      “{quote}”<div className="font-bold mt-2">{author}</div>
    </blockquote>
  )
}

const TestimonialsSection = () => {
  return (
    <div className="bg-gray-800 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          What Our Clients Say
        </h2>
        <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
          <Testimonial
            quote="Étoile Design helped us transform our brand. We couldn't be happier with the results!"
            author="John Doe, CEO of Innovate"
          />
          <Testimonial
            quote="Their team provided top-notch service and incredibly creative solutions for our marketing needs."
            author="Jane Smith, Marketing Director"
          />
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection
