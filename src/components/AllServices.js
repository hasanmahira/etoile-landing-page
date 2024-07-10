import React, { useState } from 'react';
import { ServicesDesc } from '../text';
import ServicesData from '../data/ServicesData.json';

function Services() {
  const [activeService, setActiveService] = useState(null);

  const toggleDescription = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  const ArrowIcon = ({ isOpen }) => (
    <svg className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.41 8.59003L12 13.17L16.59 8.59003L18 10L12 16L6 10L7.41 8.59003Z" fill="currentColor" />
    </svg>
  );

  return (
    <div className="flex">
      <div className="w-1/2 px-10 pt-40 text-center text-2xl text-white">
        <p>{ServicesDesc}</p>
      </div>
      <div className="w-1/2">
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
  );
}

export default Services;