import React, { useState } from "react";
import GradientText from "../components/GradientText";
import AboutImage from "../images/about.png";
import { useTranslation } from '../context/useTranslation';

const AboutSection = () => {
  const [showContact, setShowContact] = useState(false);
  const { t } = useTranslation();

  const toggleContactInfo = () => {
    setShowContact(!showContact);
  };

  return (
    <section className="relative w-full h-screen mt-[88px] overflow-hidden">
      <div className="relative overflow-hidden w-full h-full flex items-center">
        {/* Image Section */}
        <img
          src={AboutImage}
          className="absolute left-0 w-full md:max-w-[50%] lg:max-w-[60%] h-auto opacity-60 md:opacity-100"
          alt="Descriptive alt text"
        />
        {/* Content Section */}
        <div className={`absolute top-0 right-0 w-full md:max-w-[50%] lg:max-w-[60%] h-full z-10 flex flex-col md:flex-row transition-opacity duration-500`}>
          <div className="flex flex-col md:flex-row w-full">
            {/* Text and Button Section */}
            <div className="flex-1 flex flex-col justify-center p-[24px] md:max-w-[66%] lg:max-w-[88%] md:ml-[10%]">
              <GradientText tag="h2" className="text-[45px] md:text-45] leading-tight">{t('DREAMS_LIVE')}</GradientText>
              <p className="mt-[24px] text-like-cyan-vlight text-[16px] md:text-[20px] py-10">{t('DREAMS_LIVE_DESC')}</p>
              <button onClick={toggleContactInfo} className="ml-auto px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mt-4">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;