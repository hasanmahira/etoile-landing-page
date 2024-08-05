import React from 'react';
import { useTranslation } from '../context/useTranslation';
import { Link } from "react-scroll";

const VisionMissionSection = () => {
    const { t } = useTranslation();

    return (
        <section>
            <div className="relative flex justify-center">
                <div className="aspect-w-15 aspect-h-8 relative w-full top-0 right-0 left-0 h-full h-screen overflow-hidden">
                    <div className="relative z-10 flex flex-col justify-between h-full p-4">
                        <div className="text-right text-white md:mt-20 md:mr-20">
                            <h1 className="text-2xl md:text-[3rem] lg:text-[3rem] font-bold mb-2 py-8" >{t('Vision')}</h1>
                            <p className="text-1xl md:text-1xl md:w-1/2 ml-auto text-right">{t('VisionDesc')}</p>
                        </div>
                        <div className="text-left text-white md:mb-20 md:ml-20 py-20">
                            <h1 className="text-2xl md:text-[3rem] lg:text-[3rem] font-bold mb-2 py-8" >{t('Mission')}</h1>
                            <p className="text-1xl md:text-1xl w-full md:w-1/2" >{t('MissionDesc')}</p>
                        </div>
                        <div className="flex justify-center">
                            <Link to="webDesign" smooth={true} duration={500}>
                                <button className="mt-[-50px] px-10 py-5 border-2 rounded-full shadow-lg font-bold text-2lg text-white" style={{ borderColor: '#0056b3', color: '#0056b3' }}>
                                    SEE SOLUTIONS
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMissionSection;