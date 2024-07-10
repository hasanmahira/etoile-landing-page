import React from "react"
import { Link } from "react-scroll"

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-midnight bg-opacity-50 backdrop-blur-md text-white py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex justify-center space-x-8">
            <Link to="about-us" smooth={true} duration={500} className="hover:underline">ABOUT US</Link>
            <Link to="solutions" smooth={true} duration={500} className="hover:underline">SOLUTIONS</Link>
            <Link to="homepage" smooth={true} duration={500} className="hover:underline">HOMEPAGE</Link>
          </div>
          <div className="flex space-x-4">
            <Link to="tr" smooth={true} duration={500} className="hover:underline">TR</Link>
            <span>|</span>
            <Link to="eng" smooth={true} duration={500} className="hover:underline">ENG</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar