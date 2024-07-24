import React, { useState } from "react";
import GradientText from "../components/GradientText";
import { useTranslation } from '../context/useTranslation';
import Img1 from "../images/web_design_etoile.png"
import Img2 from "../images/social_media_management_etoile.png"
import Img3 from "../images/digital_marketing_and_branding_etoile.png"
import Img4 from "../images/production_design_etoile.png"

const images = [
  { src: Img1, caption: "WEB DESIGN", alt: "Web Design Etoile" },
  { src: Img2, caption: "SOCIAL MEDIA MANAGEMENT", alt: "Social Media Management Etoile" },
  { src: Img3, caption: <><div>DIGITAL MARKETING</div><div style={{ textAlign: 'center' }}>& BRANDING</div></>, alt: "Digital Marketing Etoile" },
  { src: Img4, caption: "PRODUCTION SERVICES", alt: "Product Design Etoile" },
];

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
        <GradientText tag="h2" className="text-[30px] md:text-[50px] leading-tight">
          {t('DREAMS_LIVE')}
        </GradientText>
        <div className="mt-[24px] pl-4 md:pl-12 max-w-3xl md:ml-auto">
          <p className="text-like-cyan-vlight text-[16px] md:text-[24px]">
            {t('DREAMS_LIVE_DESC')}
          </p>
          <button onClick={toggleContactInfo} className="px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mt-4">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;