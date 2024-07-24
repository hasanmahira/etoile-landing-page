import React, { useState } from 'react';
import { useTranslation } from '../context/useTranslation';

const services = [
  { name: "Social Media Analysis", description: "Analyzing the performance of your social media accounts to determine strengths and weaknesses. Optimizing your strategy.", descriptionTr: "Sosyal medya hesaplarınızın performansını analiz ederek, güçlü ve zayıf yönlerinizi belirliyoruz. Stratejinizi optimize ediyoruz." },
  { name: "Brand Image", description: "Creating a strong brand image on social media. Helping you reach your target audience with consistent and effective content.", descriptionTr: "Markanızın sosyal medyada güçlü bir imaj oluşturmasını sağlıyoruz. Tutarlı ve etkili içeriklerle hedef kitlenize ulaşmanızı sağlıyoruz." },
  { name: "Competitor Analysis", description: "Analyzing the social media activities of your competitors to gain a competitive advantage. Shaping your strategy according to your competitors.", descriptionTr: "Rakiplerinizin sosyal medya faaliyetlerini analiz ederek, rekabet avantajı sağlıyoruz. Stratejinizi rakiplerinize göre şekillendiriyoruz." },
  { name: "Content Calendar and Planning", description: "Creating your social media content in a planned and regular manner. Increasing engagement with content that appeals to your target audience.", descriptionTr: "Sosyal medya içeriklerinizi planlı ve düzenli bir şekilde oluşturuyoruz. Hedef kitlenize hitap eden içeriklerle etkileşimi artırıyoruz." },
  { name: "Follower Communication System", description: "Ensuring effective communication with your followers. Providing quick and professional responses to their questions and feedback.", descriptionTr: "Takipçilerinizle etkili bir iletişim kurmanızı sağlıyoruz. Sorularına ve geri bildirimlerine hızlı ve profesyonel yanıtlar veriyoruz." },
  { name: "Event Management", description: "Planning and managing your social media events. Increasing engagement with events that promote your brand.", descriptionTr: "Sosyal medya etkinliklerinizi planlıyor ve yönetiyoruz. Markanızı tanıtacak etkinliklerle etkileşimi artırıyoruz." },
  { name: "Account Security", description: "Taking necessary precautions to ensure the security of your social media accounts. Protecting your accounts from cyber threats.", descriptionTr: "Sosyal medya hesaplarınızın güvenliğini sağlamak için gerekli önlemleri alıyoruz. Hesaplarınızı siber tehditlere karşı koruyoruz." }
];

function SocialMediaManagement() {
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
    <div className="relative w-full h-full overflow-hidden">
      <div className="flex flex-col h-full md:flex-row">
        <div className="w-full md:w-1/2 px-10 pt-10 md:pt-40 text-center text-white p-5" style={{ zIndex: 10 }}>
          <p style={{ width: '100%', margin: 'auto', transform: 'translateY(0)', fontSize: '20px' }}>
            {t('SocialMediaDesc')}
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
                  <h1 className="text-xl font-bold mb-2">{service.name}</h1>
                  <p className="text-gray-400">{service.description}</p>
                  <p className="text-gray-400">{service.descriptionTr}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SocialMediaManagement;