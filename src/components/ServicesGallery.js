import React from 'react';
import AboutWeb from "../videos/about-web.mp4";
import AboutMobile from "../videos/about-mobile.mp4";

import Img1 from "../images/web_design_etoile.png"
import Img2 from "../images/social_media_management_etoile.png"
import Img3 from "../images/digital_marketing_and_branding_etoile.png"
import Img4 from "../images/production_design_etoile.png"

const images = [
    { src: Img1, caption: "WEB DESIGN", alt: "Web Design Etoile" },
    { src: Img2, caption: "SOCIAL MEDIA MANAGEMENT", alt: "Social Media Management Etoile" },
    { src: Img3, caption: <><div>DIGITAL MARKETING</div><div style={{ textAlign: 'center' }}>& BRANDING</div></>, alt: "Digital Marketing Etoile" },
    { src: Img4, caption: "PRODUCTION SERVICES", alt: "Product Design Etoile" },
];

const ServicesGallery = () => {
    return (
        <section className="relative w-full mt-0 overflow-hidden">
            <div className="relative w-full">
                {/* Video Section */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover inset-0 object-cover w-full h-screen hidden md:block"
                >
                    <source src={AboutWeb} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 object-cover w-full h-screen md:hidden"
                >
                    <source src={AboutMobile} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 items-start justify-center">
                    {images.map((image, index) => (
                        <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center my-10 relative`}>
                            <div className="w-1/2 h-auto flex items-center relative">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-auto mx-auto"
                                    style={{ filter: 'brightness(1.9)' }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white text-3xl lg:text-4xl font-bold p-4 rounded">
                                        {image.caption}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default ServicesGallery;