import React, { useState, useContext } from "react";
import { Link } from "react-scroll";
import { LanguageContext } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = () => {
    setLanguage(prevLanguage => prevLanguage === 'en' ? 'tr' : 'en');
  };

  const mainMenuItems = [
    { to: "homepage", en: "HOMEPAGE", tr: "ANASAYFA" },
    { to: "about-us", en: "ABOUT US", tr: "HAKKIMIZDA" },
    { to: "contact", en: "CONTACT US", tr: "İLETİŞİM" }
  ];

  const additionalMenuItems = [
    { to: "web-design", en: "WEB DESIGN", tr: "WEB TASARIM" },
    { to: "social-media", en: "SOCIAL MEDIA MANAGEMENT", tr: "SOSYAL MEDYA YÖNETİMİ" },
    { to: "digital-marketing", en: "DIGITAL MARKETING & BRANDING", tr: "DİJİTAL PAZARLAMA & MARKALAŞMA" },
    { to: "production-services", en: "PRODUCTION SERVICES", tr: "ÜRETİM HİZMETLERİ" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-midnight bg-opacity-30 text-white py-5 z-50">
      <div className="container mx-auto px-4">
        {/* Desktop Menu */}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex space-x-8">
            {mainMenuItems.map((item) => (
              <Link 
                key={item.to}
                to={item.to} 
                smooth={true} 
                duration={500} 
                className="hover:underline text-lg py-2"
              >
                {language === 'en' ? item.en : item.tr}
              </Link>
            ))}
          </div>
          <button onClick={handleLanguageChange} className="text-lg py-2">
            {language === 'en' ? 'TR' : 'EN'}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              {mainMenuItems.map((item) => (
                <Link 
                  key={item.to}
                  to={item.to} 
                  smooth={true} 
                  duration={500} 
                  className="text-sm hover:underline py-2"
                >
                  {language === 'en' ? item.en : item.tr}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={handleLanguageChange} className="text-sm py-2">
                {language === 'en' ? 'TR' : 'EN'}
              </button>
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Additional Mobile Menu Items */}
          <div className={`${isOpen ? "block" : "hidden"} mt-4`}>
            {additionalMenuItems.map((item) => (
              <Link 
                key={item.to}
                to={item.to} 
                smooth={true} 
                duration={500} 
                className="block py-2 hover:bg-gray-700"
                onClick={toggleMenu}
              >
                {language === 'en' ? item.en : item.tr}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;