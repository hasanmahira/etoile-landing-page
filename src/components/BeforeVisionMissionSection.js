import React from 'react';
import Img from "../images/before_vm.png"

const imgText = <><div>THE SWIRLING CONSTELLATIONS ALIGN</div><div style={{ textAlign: 'center' }}>TO GO BEYOND THE ORDINARY</div></>

const BeforeVisionMissionSection = () => {
    return (
        <section className="py-20">
            <div className="relative flex justify-center">
                <div className="aspect-w-15 aspect-h-8 relative w-full top-0 right-0 left-0 h-full h-screen overflow-hidden">
                    <img src={Img} alt="Hero Image" className="object-cover w-full h-full" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-4xl lg:text-5xl font-bold p-4 rounded">
                            {imgText}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeVisionMissionSection;