import React from 'react';
import {
    DREAMS_LIVE,
    Mission,
    Vision
} from "../text";
import AboutUsVideo from "../videos/aboutus_aurora.mp4"

const VisionMissionSection = () => {
    return (
        <section className="py-20">
            <div className="relative overflow-hidden h-screen">
                <video
                    autoPlay
                    playsInline
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Decorative image"
                    style={{ filter: 'brightness(0.9)' }}
                >
                    <source src={AboutUsVideo} type="video/mp4" />
                </video>
                <div className="relative z-10 flex flex-col justify-between h-full bg-black bg-opacity-50 p-4">
                    <div className="text-right text-white md:mt-20 md:mr-20">
                        <h1 className="text-4xl font-bold mb-2">VİZYONUMUZ</h1>
                        <p>{Vision}</p>
                    </div>
                    <div className="text-left text-white md:mb-20 md:ml-20">
                        <h1 className="text-4xl font-bold mb-2">MİSYONUMUZ</h1>
                        <p>{Mission}</p>
                    </div>
                    <div className="flex justify-center">
                        <button className="mt-4 px-6 py-2 bg-purple-700 hover:bg-purple-600 rounded shadow-lg">SEE SOLUTIONS</button>
                    </div>
                </div>
            </div>
            <div className="absolute hidden inset-x-0 bottom-0 h-[5%] md:flex justify-center">
                <button className="mx-2 px-6 py-2 hover:bg-gray-700 rounded text-white font-bold">
                    {/* Contact Us */}
                </button>
            </div>
        </section>
    );
};

export default VisionMissionSection;