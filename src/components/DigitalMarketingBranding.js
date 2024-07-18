// src/components/DigitalMarketingBranding.js
import React, { useState } from 'react';

const services = [
  { name: "Brand Consultancy", description: "Determining the positioning and strategy of your brand. Helping you create a strong and consistent brand identity.", descriptionTr: "Markanızın konumlandırmasını ve stratejisini belirliyoruz. Güçlü ve tutarlı bir marka kimliği oluşturmanıza yardımcı oluyoruz." },
  { name: "Brand Communication", description: "Ensuring your brand communicates effectively with your target audience. Enhancing your brand's value with the right messages.", descriptionTr: "Markanızın hedef kitlenizle etkili iletişim kurmasını sağlıyoruz. Doğru mesajlarla markanızın değerini artırıyoruz." },
  { name: "Media Planning", description: "Planning effective media strategies on digital platforms. Creating ad strategies suitable for your target audience.", descriptionTr: "Dijital platformlarda etkili medya planlaması yapıyoruz. Hedef kitlenize uygun reklam stratejileri oluşturuyoruz." },
  { name: "Sponsorship Services", description: "Identifying and managing suitable sponsorship opportunities for your brand. Providing collaborations that increase your brand awareness.", descriptionTr: "Markanız için uygun sponsorluk fırsatlarını belirliyor ve yönetiyoruz. Marka bilinirliğinizi artıracak işbirlikleri sağlıyoruz." },
  { name: "Google Ads Campaign Creation", description: "Creating effective Google Ads campaigns targeting your audience. Increasing the conversion rates of your ads.", descriptionTr: "Hedef kitlenize yönelik etkili Google Ads kampanyaları oluşturuyoruz. Reklamlarınızın dönüşüm oranlarını artırıyoruz." },
  { name: "PR and Organization Management", description: "Planning effective PR strategies and organizations for your brand. Managing your media and public relations activities.", descriptionTr: "Markanız için etkili PR stratejileri ve organizasyonlar planlıyoruz. Medya ve halkla ilişkiler faaliyetlerinizi yönetiyoruz." },
  { name: "Corporate Identity Services", description: "Creating your brand's visual and corporate identity. Representing your brand with a consistent and professional image.", descriptionTr: "Markanızın görsel ve kurumsal kimliğini oluşturuyoruz. Tutarlı ve profesyonel bir imaj ile markanızı temsil ediyoruz." }
];

function DigitalMarketingBranding() {
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
      <div className="w-1/2 px-10 pt-40 text-center text-3xl text-white">
        <p style={{ width: '80%', marginLeft: '10%', transform: 'translateY(-80px)' }}>
          Our digital marketing and branding services ensure that your brand has a strong and recognized identity online. 
          We make it easy for you to reach your target audience and increase conversions with SEO, SEM, email marketing, 
          and content strategies. We help you stand out from the competition with creative and effective solutions 
          that differentiate your brand.
        </p>
      </div>
      <div className="w-1/2">
        {services.map((service, index) => (
          <div key={index} className="border-b border-gray-700 p-5">
            <button onClick={() => toggleDescription(index)} className="flex justify-between items-center w-full text-white">
              {service.name}
              <ArrowIcon isOpen={activeService === index} />
            </button>
            {activeService === index && (
              <div className="bg-midnight text-neon-blue shadow-neon-blue p-5 rounded-full mt-6">
                <h1 className="text-xl font-bold mb-2">{service.name}</h1>
                <p className="mt-2 text-gray-400">{service.description}</p>
                <p className="mt-2 text-gray-400">{service.descriptionTr}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DigitalMarketingBranding;