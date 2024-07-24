import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import AppleSS from "../images/ss/apple.png";
import AdidasSS from "../images/ss/adidas.png";
import FromSoftwareSS from "../images/ss/fromsoftware.png";
import WebolizmaSS from "../images/ss/webolizma.png";
import WocSS from "../images/ss/woc.png";

const images = [
    { src: AppleSS, alt: "Screenshot of Apple Website", url: "https://www.apple.com" },
    { src: WocSS, alt: "Screenshot of Woc Website", url: "https://www.woccoffee.com/" },
    { src: WebolizmaSS, alt: "Screenshot of Webolizma Website", url: "https://www.webolizma.com/" },
    { src: FromSoftwareSS, alt: "Screenshot of FromSoftware Website", url: "https://www.fromsoftware.jp" },
    { src: AdidasSS, alt: "Screenshot of Adidas Website", url: "https://www.adidas.com" },
];

const BusinessPortfolio = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '120px', // Increased padding to lift images slightly
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: (current, next) => setCurrentSlide(next),
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            }
        ]
    };

    return (
        <section>
            <style>
            {`
                .slick-dots {
                    bottom: -25px; /* Adjust bottom position */
                }
                
                .slick-dots li button:before {
                    color: white;
                    font-size: 12px;
                    opacity: 1;
                }
                
                .slick-dots li.slick-active button:before {
                    color: white;
                    opacity: 1;
                }
            `}
            </style>
            <div className="container mx-auto px-4">
                <h2 className="text-white text-center text-3xl font-bold mb-8">BUSINESS PORTFOLIO</h2>
                <Slider {...settings} ref={sliderRef}>
                    {images.map((image, index) => (
                        <div key={index} className="px-2 flex justify-center">
                            <a href={image.url} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className={`mx-auto object-cover transition-all duration-300 ease-in-out ${index === currentSlide ? 'h-[500px]' : 'h-[400px] blur-sm'}`}
                                />
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default BusinessPortfolio;