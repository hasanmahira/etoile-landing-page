// src/components/Feature.js
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Feature = ({ title, description, imageName, buttonText }) => {
  return (
    <div className="text-center p-10">
      <StaticImage
        src={`../images/${imageName}`}
        alt={title}
        className="mx-auto"
        width={300}
        height={300}
      />
      <h2 className="text-3xl font-bold my-3">{title}</h2>
      <p className="mb-4">{description}</p>
      <button className="px-6 py-3 bg-blue-700 hover:bg-blue-800 rounded-full font-bold">
        {buttonText}
      </button>
    </div>
  )
}

export default Feature
