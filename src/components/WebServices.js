import React, { useState } from 'react';
import ServicesData from '../data/ServicesData.json';
import { useTranslation } from '../context/useTranslation';
import AboutWeb from "../videos/about-web.mp4";
import AboutMobile from "../videos/about-mobile.mp4";

function WebServices() {
  const [activeService, setActiveService] = useState(null);
  const { t } = useTranslation();

  const toggleDescription = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  const ArrowIcon = ({ isOpen }) => (
    <svg className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.41 8.59003L12 13.17L16.59 8.59003L18 10L12 16L6 10L7.41 8.59003Z" fill="currentColor" />
    </svg>
  );

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover hidden md:block">
        <source src={AboutWeb} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover md:hidden">
        <source src={AboutMobile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="flex h-full">
        <div className="w-1/2 px-10 pt-40 text-center text-3xl text-white" style={{ zIndex: 10 }}>
          <p style={{ width: '80%', marginLeft: '10%', transform: 'translateY(-80px)' }}>{t('ServicesDesc')}</p>
        </div>
        <div className="w-1/2" style={{ zIndex: 10 }}>
          {ServicesData.map((service, index) => (
            <div key={index} className="border-b border-gray-700 p-5">
              <button onClick={() => toggleDescription(index)} className="flex justify-between items-center w-full text-white">
                {service.name}
                <ArrowIcon isOpen={activeService === index} />
              </button>
              {activeService === index && (
                <div className="bg-midnight text-neon-blue shadow-neon-blue p-5 rounded-full mt-6">
                  <h1 className="text-xl font-bold mb-2">UI-UX DESIGN</h1>
                  <p className="mt-2 text-gray-400">{service.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WebServices;