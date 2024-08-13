import React from 'react';
import Img from "../images/brand_digital.png";

const BrandDigitalMarketingBrandingSection = () => {

    return (
        <section>
            <div className="relative flex justify-center items-center h-screen">
                <img src={Img} alt="Digital marketing and branding" className="absolute inset-0 w-full h-full object-cover" />
                <div className="z-10 text-center">
                    <span className="text-white text-5xl lg:text-7xl font-bold p-4 rounded shadow-lg" style={{ lineHeight: '1.3' }}>
                        {/* <div>{t('ELEVATE_YOUR_BRAND')}</div>
                        <div>{t('GLOBAL_STANDARDS')}</div> */}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default BrandDigitalMarketingBrandingSection;