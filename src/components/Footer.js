// src/components/Footer.js
import React from "react"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 text-center bg-midnight">
      <div className="container mx-auto px-4">
        © {new Date().getFullYear()} Étoile Design. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
