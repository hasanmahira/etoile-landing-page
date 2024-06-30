// src/components/Navbar.js
import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
  return (
    <nav className="bg-black py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/">
          <StaticImage
            src="../images/logo.png"
            alt="Étoile Design Logo"
            placeholder="blurred"
            layout="fixed"
            width={150}
            height={50}
          />
        </Link>
        <div>
          <Link to="/about" className="text-white px-4 hover:text-gray-300">
            About Us
          </Link>
          <Link to="/services" className="text-white px-4 hover:text-gray-300">
            Services
          </Link>
          <Link to="/contact" className="text-white px-4 hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
