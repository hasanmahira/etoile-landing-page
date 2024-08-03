import React from 'react';
import Vid from "../videos/swirling.mp4";  // Ensure the path and extension are correct
import { useTranslation } from '../context/useTranslation';

const BeforeVisionMissionSection = () => {
    const { t } = useTranslation();

    return (
        <section>
            <div className="relative flex justify-center">
                <div className="aspect-w-15 aspect-h-8 relative w-full top-0 right-0 left-0 h-full h-screen overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover w-full h-full"
                    >
                        <source src={Vid} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center px-4">
                            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold whitespace-nowrap">
                                {t('SWIRLING_CONSTELLATIONS_ALIGN')}
                            </div>
                            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold whitespace-nowrap">
                                {t('GO_BEYOND_THE_ORDINARY')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeVisionMissionSection;