import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-scroll";
import { LanguageContext } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  // const { language, toggleLanguage } = useContext(LanguageContext);
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = () => {
    setLanguage(prevLanguage => prevLanguage === 'en' ? 'tr' : 'en');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full bg-midnight bg-opacity-30 text-white py-5 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex space-x-8">
          <Link to="homepage" smooth={true} duration={500} className="hover:underline text-2xl py-2 mx-6">{language === 'en' ? 'HOMEPAGE' : 'ANASAYFA'}</Link>
          <Link to="about-us" smooth={true} duration={500} className="hover:underline text-2xl py-2 mx-6">{language === 'en' ? 'ABOUT US' : 'HAKKIMIZDA'}</Link>
          <Link to="solutions" smooth={true} duration={500} className="hover:underline text-2xl py-2 mx-6">{language === 'en' ? 'CONTACT US' : 'İLETİŞİM'}</Link>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={handleLanguageChange} className="text-2xl py-2">
            {language === 'en' ? 'TR' : 'EN'}
          </button>
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