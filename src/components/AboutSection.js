import React, { useState } from "react";
import GradientText from "../components/GradientText";
import { useTranslation } from '../context/useTranslation';

const AboutSection = () => {
  const [showContact, setShowContact] = useState(false);
  const { t } = useTranslation();

  const toggleContactInfo = () => {
    setShowContact(!showContact);
  };

  return (
    <section className="relative w-full mt-[88px] overflow-hidden">
      {/* Content Section */}
      <div className="top-0 right-0 w-full md:w-5xl p-4 md:p-20 flex flex-col items-end">
        <GradientText tag="h2" className="font-bebas text-[50px] md:text-[70px] leading-tight">
          {t('DREAMS_LIVE')}
        </GradientText>
        <div className="mt-[24px] pl-4 md:pl-12 max-w-3xl md:ml-auto">
          <p className="text-like-cyan-vlight text-[16px] md:text-[24px]">
            {t('DREAMS_LIVE_DESC')}
          </p>
          <button onClick={toggleContactInfo} className="px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mt-4">
            {t('LEARN_MORE')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;