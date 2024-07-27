import React, { useState } from 'react';
import { useTranslation } from '../context/useTranslation';

const services = [
  { name: "Advertisement Film Shooting", description: "Creating impressive advertisement films for your brand. Providing high-quality production services with professional teams and equipment.", descriptionTr: "Markanız için etkileyici reklam filmleri çekiyoruz. Profesyonel ekip ve ekipmanlarla, kaliteli prodüksiyon hizmetleri sunuyoruz." },
  { name: "E-Commerce Product Shooting", description: "Performing product shoots for your e-commerce site. Preparing photos and videos that best showcase your products.", descriptionTr: "E-ticaret siteniz için ürün çekimleri yapıyoruz. Ürünlerinizi en iyi şekilde tanıtacak fotoğraf ve videolar hazırlıyoruz." },
  { name: "Social Media Photo Shooting", description: "Conducting high-quality photo shoots for your social media accounts. Increasing engagement with attractive visual content.", descriptionTr: "Sosyal medya hesaplarınız için dikkat çekici ve kaliteli fotoğraf çekimleri yapıyoruz. Görsel içeriklerinizle etkileşimi artırıyoruz." },
  { name: "Marketing Campaign Shooting", description: "Performing professional shoots for your marketing campaigns. Producing effective visual content for your target audience.", descriptionTr: "Pazarlama kampanyalarınız için profesyonel çekimler gerçekleştiriyoruz. Hedef kitlenize yönelik etkili görsel içerikler üretiyoruz." },
  { name: "Video Editing", description: "Professionally editing your footage. Creating impressive and fluid videos.", descriptionTr: "Çekimlerinizi profesyonel bir şekilde montajlıyoruz. Etkileyici ve akıcı videolar oluşturuyoruz." },
  { name: "Magazine/Catalog Shooting", description: "Performing high-quality photo shoots for your magazines and catalogs. Preparing your visuals with professional editing.", descriptionTr: "Magazin ve kataloglarınız için yüksek kaliteli fotoğraf çekimleri yapıyoruz. Profesyonel düzenlemeler ile görsellerinizi hazırlıyoruz." },
  { name: "Retouch/Decoupe Services", description: "Professionally editing and retouching your photos. Making your visuals perfect.", descriptionTr: "Fotoğraflarınızın düzenleme ve retouch işlemlerini profesyonel olarak yapıyoruz. Görsellerinizi mükemmel hale getiriyoruz." }
];

function ProductionServices() {
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
            {t('ProductionServicesDesc')}
          </p>
        </div>
        <div className="w-full md:w-1/2" style={{ zIndex: 10 }}>
          {services.map((service, index) => (
            <div key={index} className="border-b border-neon-blue p-5">
              <button onClick={() => toggleDescription(index)} className="flex justify-between items-center w-full text-white">
                {service.name}
                <ArrowIcon isOpen={activeService === index} />
              </button>
              {activeService === index && (
                <div className="mt-6">
                  <p>{service.description}</p>
                  <p>{service.descriptionTr}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductionServices;