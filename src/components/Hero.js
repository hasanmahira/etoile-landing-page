import React from 'react';
import HeroWeb from '../videos/hero-web.mp4';
import HeroMobile from '../videos/hero-mobile.mp4';

const HeroSection = () => {
  return (
    <section>
      <div className="relative flex justify-center">
        <div className="aspect-w-15 aspect-h-8 relative w-full top-0 right-0 left-0 h-full h-screen overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full hidden md:block"
          >
            <source src={HeroWeb} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full md:hidden"
          >
            <source src={HeroMobile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;