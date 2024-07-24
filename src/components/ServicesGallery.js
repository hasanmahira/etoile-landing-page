import React, { useState } from 'react';
import '../styles/global.css';
import Img1 from "../images/web_design_etoile.png"
import Img2 from "../images/social_media_management_etoile.png"
import Img3 from "../images/digital_marketing_and_branding_etoile.png"
import Img4 from "../images/production_design_etoile.png"
import StarLeft from "../images/star-left.png"
import StarRight from "../images/star-right.png"
import { Link } from "react-scroll";

const images = [
    { src: Img1, caption: "WEB DESIGN", alt: "Web Design Etoile", id: "webDesign" },
    { src: Img2, caption: "SOCIAL MEDIA MANAGEMENT", alt: "Social Media Management Etoile", id: "socialMediaManagementServices" },
    { src: Img3, caption: React.createElement(React.Fragment, null, 
        React.createElement("div", null, "DIGITAL MARKETING"),
        React.createElement("div", { style: { textAlign: 'center' } }, "& BRANDING")
    ), alt: "Digital Marketing Etoile", id: "digitalMarketingBrandingServices" },
    { src: Img4, caption: "PRODUCTION SERVICES", alt: "Product Design Etoile", id: "productionServices" },
];

const ServicesGallery = () => {
    const [animatingStars, setAnimatingStars] = useState({});

    const handleImageInteraction = (id, direction) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setAnimatingStars(prev => ({ ...prev, [id]: 'animate' }));
        setTimeout(() => {
            setAnimatingStars(prev => ({ ...prev, [id]: 'fadeOut' }));
        }, 10000);
        setTimeout(() => {
            setAnimatingStars(prev => ({ ...prev, [id]: false }));
        }, 15000);
    };

    return React.createElement(
        'section',
        { className: "relative w-full mt-0 overflow-hidden" },
        images.map((image, index) => 
            React.createElement(Link, {
                key: image.id,
                to: image.id,
                smooth: true,
                duration: 500,
                className: "hover:underline text-lg py-2"
            },
                React.createElement('div', {
                    className: `flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center my-10 relative`
                },
                    React.createElement('div', {
                        className: "w-1/2 h-auto flex items-center relative",
                        onClick: () => handleImageInteraction(image.id, index % 2 === 0 ? 'right' : 'left'),
                        onKeyPress: (e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                handleImageInteraction(image.id, index % 2 === 0 ? 'right' : 'left');
                            }
                        },
                        role: "button",
                        tabIndex: 0,
                        'aria-label': `View ${image.alt}`
                    },
                        React.createElement('img', {
                            src: image.src,
                            alt: image.alt,
                            className: "w-full h-auto mx-auto",
                            style: { filter: 'brightness(1.9)' }
                        }),
                        React.createElement('div', {
                            className: "absolute inset-0 flex items-center justify-center"
                        },
                            React.createElement('span', {
                                className: "text-white text-3xl lg:text-4xl font-bold p-4 rounded"
                            }, image.caption)
                        ),
                        React.createElement('div', {
                            className: "absolute inset-0 flex items-center justify-center"
                        },
                            React.createElement('img', {
                                src: index % 2 === 0 ? StarRight : StarLeft,
                                alt: "Star",
                                className: `star ${index % 2 === 0 ? 'star-right' : 'star-left'} ${animatingStars[image.id] || ''}`
                            })
                        )
                    )
                )
            )
        )
    );
};

export default ServicesGallery;