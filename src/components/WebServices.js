import React, { useState } from 'react';
import ServicesData from '../data/ServicesData.json';
import { useTranslation } from '../context/useTranslation';

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
      <div className="flex items-center justify-center flex-col h-full md:flex-row">
        <div className="w-full md:w-1/2 flex items-center justify-center px-10 py-10 md:py-0" style={{ zIndex: 10 }}>
          <p className="text-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-2xl">
            {t('ServicesDesc')}
          </p>
        </div>
        <div className="w-full md:w-1/2" style={{ zIndex: 10 }}>
          {ServicesData.map((service, index) => (
            <div key={index} className="border-b border-neon-blue p-5">
              <button onClick={() => toggleDescription(index)} className="flex justify-between items-center w-full text-white">
                {service.name}
                <ArrowIcon isOpen={activeService === index} />
              </button>
              {activeService === index && (
                <div className="mt-6">
                  <p>{service.description}</p>
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