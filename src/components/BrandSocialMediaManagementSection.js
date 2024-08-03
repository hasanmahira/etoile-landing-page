import React from 'react';
import { useTranslation } from '../context/useTranslation'; // Ensure you have the correct path
import Img from "../images/brand_social.png";

const BrandSocialMediaManagementSection = () => {
    const { t } = useTranslation();

    return (
        <section>
            <div className="relative flex justify-center items-center h-screen">
                <img src={Img} alt="Brand promotional graphic" className="absolute inset-0 w-full h-full object-cover" />
                <div className="z-10 text-center">
                    <span className="text-white text-5xl lg:text-7xl font-bold p-4 rounded shadow-lg" style={{ lineHeight: '1.3' }}>
                        <div>{t('ELEVATE_YOUR_BRAND')}</div>
                        <div>{t('GLOBAL_STANDARDS')}</div>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default BrandSocialMediaManagementSection;