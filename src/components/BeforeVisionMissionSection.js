import React from 'react';
import Vid from "../videos/swirling.mp4";  // Ensure the path and extension are correct

const imgText = (
  <>
    <div>THE SWIRLING CONSTELLATIONS ALIGN</div>
    <div style={{ textAlign: 'center' }}>TO GO BEYOND THE ORDINARY</div>
  </>
);

const BeforeVisionMissionSection = () => {
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