import React from 'react';
import Img from "../images/brand_production.png"

const imgText = (
    <>
        <div>ELEVATE YOUR BRAND TO</div>
        <div>THE GLOBAL STANDARDS</div>
    </>
);

const BrandProductionSection = () => {
    return (
        <section>
            <div className="relative flex justify-center items-center h-screen">
                <img src={Img} alt="Production service" className="absolute inset-0 w-full h-full object-cover" />
                <div className="z-10 text-center">
                    <span className="text-white text-5xl lg:text-7xl font-bold p-4 rounded shadow-lg" style={{ lineHeight: '1.3' }}>
                        {imgText}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default BrandProductionSection;