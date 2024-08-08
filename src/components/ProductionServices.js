import React, { useState } from 'react';
import { useTranslation } from '../context/useTranslation';

function ProductionServices() {
    const [activeService, setActiveService] = useState(null);
    const { t } = useTranslation();

    const services = [
        { key: 'ADVERTISEMENT_FILM_SHOOTING_KEY', descriptionKey: 'COMMERCIAL_FILM_PRODUCTION' },
        { key: 'ECOMMERCE_PRODUCT_SHOOTING_KEY', descriptionKey: 'ECOMMERCE_PHOTOGRAPHY' },
        { key: 'SOCIAL_MEDIA_PHOTO_SHOOTING_KEY', descriptionKey: 'SOCIAL_MEDIA_PHOTOGRAPHY' },
        { key: 'MARKETING_CAMPAIGN_SHOOTING_KEY', descriptionKey: 'MARKETING_CAMPAIGN_SHOOTING' },
        { key: 'VIDEO_EDITING_KEY', descriptionKey: 'VIDEO_EDITING' },
        { key: 'MAGAZINE_CATALOG_SHOOTING_KEY', descriptionKey: 'MAGAZINE_CATALOG_SHOOTING' },
        { key: 'RETOUCH_DECOUPE_SERVICES_KEY', descriptionKey: 'PHOTO_RETOUCHING' }
    ];

    const toggleDescription = (index) => {
        setActiveService(activeService === index ? null : index);
    };

    const ArrowIcon = ({ isOpen }) => (
        <svg className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.41 8.59003L12 13.17L16.59 8.59003L18 10L12 16L6 10L7.41 8.59003Z" fill="currentColor" />
        </svg>
    );

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div className="flex items-center justify-center flex-col h-full md:flex-row">
                <div className="w-full md:w-1/2 flex items-center justify-center px-10 py-10 md:py-0" style={{ zIndex: 10 }}>
                    <p className="text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-2xl font-bebas">
                        {t('ProductionServicesDesc')}
                    </p>
                </div>
                <div className="w-full md:w-1/2" style={{ zIndex: 10 }}>
                    {services.map((service, index) => (
                        <div key={index} className="border-b border-neon-blue p-5">
                            <button onClick={() => toggleDescription(index)} className="flex justify-between items-center w-full text-white">
                                {t(service.key)}
                                <ArrowIcon isOpen={activeService === index} />
                            </button>
                            {activeService === index && (
                                <div className="mt-6">
                                    <p>{t(service.descriptionKey)}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductionServices;