import React, { useState, useEffect } from 'react';
import '../styles/global.css';
import Img1 from "../images/web_design_etoile.png";
import Img2 from "../images/social_media_management_etoile.png";
import Img3 from "../images/digital_marketing_and_branding_etoile.png";
import Img4 from "../images/production_design_etoile.png";
import StarLeft from "../images/star-left.png";
import StarRight from "../images/star-right.png";

const images = [
    { src: Img1, caption: "WEB DESIGN", alt: "Web Design Etoile", id: "webDesign" },
    { src: Img2, caption: "SOCIAL MEDIA MANAGEMENT", alt: "Social Media Management Etoile", id: "socialMediaManagementServices" },
    { src: Img3, caption: "DIGITAL MARKETING & BRANDING", alt: "Digital Marketing Etoile", id: "digitalMarketingBrandingServices" },
    { src: Img4, caption: "PRODUCTION SERVICES", alt: "Product Design Etoile", id: "productionServices" },
];

const ServicesGallery = () => {
    const [showAnimation, setShowAnimation] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowAnimation(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <section className="relative w-full mt-0 overflow-hidden">
            {images.map((image, index) => (
                <div key={image.id} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center my-10 relative`}>
                    <div className="w-1/2 h-auto flex items-center relative">
                        <img src={image.src} alt={image.alt} className="w-full h-auto mx-auto" style={{ filter: 'brightness(1.9)' }} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold p-2 sm:p-4 rounded text-center">
                                {image.caption}
                            </span>
                        </div>
                        {showAnimation && (
                            <img src={index % 2 === 0 ? StarRight : StarLeft} alt="Star Animation"
                                className={`absolute top-1/2 ${index % 2 === 0 ? 'left-1/2' : 'right-1/2'} transform -translate-y-1/2 -translate-x-1/2`}
                                style={{ animation: `${index % 2 === 0 ? 'slideRight' : 'slideLeft'} 3s forwards` }}
                            />
                        )}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ServicesGallery;