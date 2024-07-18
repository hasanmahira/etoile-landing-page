import React, { useState } from 'react';
import HeroImg from "../images/etoile_hero_section.png"

const HeroSection = ({ }) => {

  return (
    <section>
      <div className="relative flex justify-center">
        <div className="aspect-w-15 aspect-h-8 relative w-full top-0 right-0 left-0 h-full h-screen overflow-hidden">
          <img src={HeroImg} alt="Hero Image" className="object-cover w-full h-full" />
        </div>
        <div className="absolute hidden inset-x-0 bottom-0 h-[5%] md:flex justify-center">
          <button className="mx-2 px-6 py-2 bg-primary hover:bg-blue-700 rounded text-white font-bold">
            Learn More
          </button>
          <button className="mx-2 px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white font-bold">
            Contact Us
          </button>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;