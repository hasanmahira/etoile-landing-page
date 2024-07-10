import React, { useState } from 'react';
import { ServicesDesc } from '../text';

const servicesData = [
  {
    name: 'UI-UX Design',
    description: 'Kullanıcı dostu ve estetik açıdan çekici arayüzler oluşturuyoruz. Amacımız, kullanıcıların sitenizde keyifli ve verimli bir deneyim yaşamasını sağlamak.',
  },
  {
    name: 'HTML Web Design',
    description: 'Responsive and modern web designs that ensure high usability and accessibility standards.',
  },
  {
    name: 'ASP.NET Web Design',
    description: 'Robust server-side rendering solutions to enhance performance and security for enterprise applications.',
  },
  {
    name: 'Landing Page Design',
    description: 'Conversion-optimized landing pages designed to boost your marketing campaigns and capture leads effectively.',
  },
  {
    name: 'Corporate Web Design',
    description: 'Corporate website solutions that reflect your brand identity and engage with your stakeholders effectively.',
  },
  {
    name: 'E-Commerce Web Design',
    description: 'Comprehensive e-commerce solutions that offer seamless shopping experiences and easy management features.',
  },
  {
    name: 'Software Development',
    description: 'Full-stack development services to create scalable and innovative software applications.',
  }
];

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
        {servicesData.map((service, index) => (
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