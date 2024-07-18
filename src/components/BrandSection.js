import React from 'react';
import Img from "../images/brand.png"

const imgText = (
    <>
        <div>ELEVATE YOUR BRAND TO</div>
        <div>THE GLOBAL STANDARDS</div>
    </>
);

const BrandSection = () => {
    return (
        <section className="py-20">
            <div className="relative flex justify-center items-center h-screen">
                <img src={Img} alt="Hero Image" className="absolute inset-0 w-full h-full object-cover" />
                <div className="z-10 text-center">
                    <span className="text-white text-5xl lg:text-7xl font-bold p-4 rounded shadow-lg" style={{ lineHeight: '1.3' }}>
                        {imgText}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default BrandSection;