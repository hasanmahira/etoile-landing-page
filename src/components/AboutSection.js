import React, { useState } from "react";
import GradientText from "../components/GradientText";
import { useTranslation } from '../context/useTranslation';
import AboutWeb from "../videos/about-web.mp4";
import AboutMobile from "../videos/about-mobile.mp4";

const AboutSection = () => {
  const [showContact, setShowContact] = useState(false);
  const { t } = useTranslation();

  const toggleContactInfo = () => {
    setShowContact(!showContact);
  };

  return (
    <section className="relative w-full mt-[88px] overflow-hidden">
      <div className="relative w-full">
        {/* Video Section */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-screen hidden md:block"
        >
          <source src={AboutWeb} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-screen md:hidden"
        >
          <source src={AboutMobile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Section */}
        <div className="absolute inset-0 flex items-start justify-center md:justify-end p-4 md:p-20">
          <div className="p-6 md:p-10 rounded-lg w-full max-w-5xl text-center md:text-right">
            <GradientText tag="h2" className="text-[30px] md:text-[50px] leading-tight">
              {t('DREAMS_LIVE')}
            </GradientText>
            <div className="mt-[24px] max-w-3xl md:ml-auto">
              <p className="text-like-cyan-vlight text-[16px] md:text-[24px]">
                {t('DREAMS_LIVE_DESC')}
              </p>
              <button onClick={toggleContactInfo} className="px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mt-4">
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