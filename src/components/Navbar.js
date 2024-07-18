import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);  // Ref for the dropdown menu

  // Toggle dropdown open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add when the dropdown is open and remove when it is closed
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);  // Depend on isOpen state to add/remove event listener

  return (
    <nav className="fixed top-0 w-full bg-midnight bg-opacity-30 text-white py-5 z-50">  {/* Increased padding for bigger navbar */}
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex space-x-8">  {/* Increased spacing between buttons */}
          <Link to="homepage" smooth={true} duration={500} className="hover:underline text-2xl py-2 mx-6">HOMEPAGE</Link>  {/* Increased font size */}
          <Link to="about-us" smooth={true} duration={500} className="hover:underline text-2xl py-2 mx-6">ABOUT US</Link>  {/* Increased font size */}
          <Link to="solutions" smooth={true} duration={500} className="hover:underline text-2xl py-2 mx-6">CONTACT US</Link>  {/* Increased font size */}
        </div>
        <div className="relative">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <div ref={dropdownRef} className={`${isOpen ? "block" : "hidden"} dropdown absolute right-0 mt-2 py-2 w-48 bg-midnight rounded-lg shadow-lg`}>
            <Link to="web-design" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-700 rounded">WEB DESIGN</Link>
            <Link to="social-media" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-700 rounded">SOCIAL MEDIA MANAGEMENT</Link>
            <Link to="digital-marketing" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-700 rounded">DIGITAL MARKETING & BRANDING</Link>
            <Link to="production-services" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-700 rounded">PRODUCTION SERVICES</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;