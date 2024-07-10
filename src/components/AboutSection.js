import React, { useState } from "react";
import GradientText from "../components/GradientText";
import { DREAMS_LIVE } from "../text";
import AboutImage from "../images/some-image.png";
import AboutVideoMp4 from "../videos/galaxy.mp4";

const AboutSection = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  const toggleContactInfo = () => {
    setShowContact(!showContact);
  };

  return (
    <section className="relative w-full h-screen mt-[88px] overflow-hidden">
      <div className="relative overflow-hidden w-full h-full">
        {/* Video Element */}
        {!videoEnded && (
          <video
            autoPlay
            playsInline
            onEnded={handleVideoEnd}
            muted
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.9)', objectPosition: 'center 10%' }}
          >
            <source src={AboutVideoMp4} type="video/mp4" />
          </video>
        )}

        {/* Content Section */}
        <div className={`absolute top-0 left-0 w-full h-full z-10 flex flex-col md:flex-row ${videoEnded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
          <div className="flex flex-col md:flex-row w-full">
            {/* Image Section */}
            <div className="flex-1 flex justify-center items-center p-4">
              <img
                src={AboutImage}
                className="max-w-[50%] md:max-w-[30%] opacity-60 md:opacity-100"
                alt="Descriptive alt text"
              />
            </div>
            {/* Text and Button Section */}
            <div className="flex-1 flex flex-col justify-center items-start p-[24px]">
              <GradientText tag="h2" className="text-[40px] md:text-[48px] leading-tight">Hayallerinizi Bizimle Gerçeğe Dönüştürün!</GradientText>
              <p className="mt-[24px] text-like-cyan-vlight text-[16px] md:text-[20px]">{DREAMS_LIVE}</p>
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