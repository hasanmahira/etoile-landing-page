import React from 'react';
import { useTranslation } from '../context/useTranslation';
import AboutWeb from "../videos/about-web.mp4";
import AboutMobile from "../videos/about-mobile.mp4";

const VisionMissionSection = () => {
    const { t } = useTranslation();

    return (
        <section>
            <div className="relative flex justify-center">
                <div className="aspect-w-15 aspect-h-8 relative w-full top-0 right-0 left-0 h-full h-screen overflow-hidden">
                    <video autoPlay loop muted playsInline className="object-cover w-full h-full hidden md:block">
                        <source src={AboutWeb} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <video autoPlay loop muted playsInline className="object-cover w-full h-full md:hidden">
                        <source src={AboutMobile} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="relative z-10 flex flex-col justify-between h-full bg-black bg-opacity-50 p-4">
                        <div className="text-right text-white md:mt-20 md:mr-20">
                            <h1 className="text-2xl md:text-[3rem] lg:text-[3rem] font-bold mb-2 py-8" >VİZYONUMUZ</h1>
                            <p className="text-1xl md:text-1xl md:w-1/2 ml-auto text-right">{t('Vision')}</p>
                        </div>
                        <div className="text-left text-white md:mb-20 md:ml-20 py-20">
                            <h1 className="text-2xl md:text-[3rem] lg:text-[3rem] font-bold mb-2 py-8" >MİSYONUMUZ</h1>
                            <p className="text-1xl md:text-1xl w-full md:w-1/2" >{t('Mission')}</p>
                        </div>
                        <div className="flex justify-center">
                            <button className="mt-[-50px] px-10 py-5 border-2 rounded-full shadow-lg font-bold text-2lg text-white" style={{ borderColor: '#0056b3', color: '#0056b3' }}>
                                SEE SOLUTIONS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMissionSection;