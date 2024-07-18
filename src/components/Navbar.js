import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-midnight bg-opacity-25 text-white py-3 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex">
          <Link to="homepage" smooth={true} duration={500} className="hover:underline">HOMEPAGE</Link>
          <Link to="about-us" smooth={true} duration={500} className="hover:underline ml-4">ABOUT US</Link>
          <Link to="solutions" smooth={true} duration={500} className="hover:underline ml-4">CONTACT US</Link>
        </div>
        <div className="relative">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          {isOpen && (
            <div className="dropdown absolute right-0 top-10 mt-2 py-2 w-48 bg-midnight bg-opacity-25 rounded-lg shadow-lg">
              <Link to="web-design" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-700 rounded">WEB DESIGN</Link>
              <Link to="social-media" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-700 rounded">SOCIAL MEDIA MANAGEMENT</Link>
              <Link to="digital-marketing" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-700 rounded">DIGITAL MARKETING & BRANDING</Link>
              <Link to="production-services" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-700 rounded">PRODUCTION SERVICES</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;