import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from '../context/useTranslation';

// Import company logos
import OmkoLogo from "../images/companies/omko.png";
import YatagyLogo from "../images/companies/atagur.png";
import HidromekLogo from "../images/companies/hidromek.png";
import GuzelKasapLogo from "../images/companies/guzel-kasap.png";
import CaseLogo from "../images/companies/case.png";
import HmbrgLogo from "../images/companies/hmbrgr.png";
import GenesisLogo from "../images/companies/genesis.png";
import SheinLogo from "../images/companies/shein.png";
import TencelLogo from "../images/companies/tencel.png";
import GoeliaLogo from "../images/companies/goelia.png";
import LatteLierLogo from "../images/companies/lattelier.png";
import DeptAnonymLogo from "../images/companies/dept-anonym.png";
import SheepIncLogo from "../images/companies/sheep-inc.png";
import AdventureChallengeLogo from "../images/companies/adventure-challange.png";
import LolaRoseLogo from "../images/companies/lola-rose.png";
import AkiflowLogo from "../images/companies/akiflow.png";
import HaylouLogo from "../images/companies/haylou.png";
import IdealOfSwedenLogo from "../images/companies/ideal-of-sweden.png";
import MonicaVinaderLogo from "../images/companies/monica-vinader.png";
import ElkeLogo from "../images/companies/elke.png";
import RomweLogo from "../images/companies/romwe.png";
import YogibowLogo from "../images/companies/sugarbearpro.png";
import AochuanLogo from "../images/companies/aochuan.png";
import ApothekaryLogo from "../images/companies/apothekary.png";
import AnifurryLogo from "../images/companies/anifurry.png";
import ZafulLogo from "../images/companies/zaful.png";
import AnalemmaLogo from "../images/companies/analemma.png";
import JwPeiLogo from "../images/companies/jw-pei.png";
import ModLilyLogo from "../images/companies/modlily.png";
import CoredyLogo from "../images/companies/coredy.png";
import PrettyDressLogo from "../images/companies/pretty-dress.png";
import MintoTrackerLogo from "../images/companies/minto-tracker.png";
import AirnumLogo from "../images/companies/airnum.png";
import TakeMonDayLogo from "../images/companies/take-monday.png";
import EcoSusiLogo from "../images/companies/ecosusi.png";
import BellaBarnettLogo from "../images/companies/bella-barnett.png";
import VivaivaLogo from "../images/companies/vivaia.png";
import RikiLovesRikiLogo from "../images/companies/riki-loves-riki.png";
// import InCreoDesignLogo from "../images/companies/increo-design.png";
import KimTrueLogo from "../images/companies/kimtrue.png";

const companies = [
    { src: OmkoLogo, alt: "Omko Logo", url: "https://www.omko.org.tr" },
    { src: YatagyLogo, alt: "Yatagy Logo", url: "https://atagur.com" },
    { src: HidromekLogo, alt: "Hidromek Logo", url: "https://www.hidromek.com.tr" },
    { src: GuzelKasapLogo, alt: "Guzel Kasap Logo", url: "http://www.guzelkasap.com.tr/" },
    { src: CaseLogo, alt: "Case Construction Logo", url: "https://www.casece.com" },
    { src: HmbrgLogo, alt: "Hmbrgr Logo", url: "https://hmbrgr.co" },
    { src: GenesisLogo, alt: "Genesis Logo", url: "https://www.genesisparke.com/" },
    { src: SheinLogo, alt: "Shein Logo", url: "https://www.shein.com" },
    { src: TencelLogo, alt: "Tencel Logo", url: "https://www.tencel.com" },
    { src: GoeliaLogo, alt: "Goelia Logo", url: "https://www.goelia1995.com/" },
    { src: LatteLierLogo, alt: "LatteLier Logo", url: "https://www.lattelierstore.com/x" },
    { src: DeptAnonymLogo, alt: "Dept. Anonym Logo", url: "https://www.deptanonym.com" },
    { src: SheepIncLogo, alt: "Sheep Inc. Logo", url: "https://www.sheepinc.com" },
    { src: AdventureChallengeLogo, alt: "The Adventure Challenge Logo", url: "https://www.theadventurechallenge.com" },
    { src: LolaRoseLogo, alt: "Lola Rose Logo", url: "https://www.lolarose.co.uk" },
    { src: AkiflowLogo, alt: "Akiflow Logo", url: "https://www.akiflow.com" },
    { src: HaylouLogo, alt: "Haylou Logo", url: "https://www.haylou.com" },
    { src: IdealOfSwedenLogo, alt: "Ideal of Sweden Logo", url: "https://www.idealofsweden.com" },
    { src: MonicaVinaderLogo, alt: "Monica Vinader Logo", url: "https://www.monicavinader.com" },
    { src: ElkeLogo, alt: "Elke Logo", url: "https://elke.nyc/" },
    { src: RomweLogo, alt: "Romwe Logo", url: "https://www.romwe.com" },
    { src: YogibowLogo, alt: "SugerBearPro Logo", url: "https://sugarbearpro.com/" },
    { src: AochuanLogo, alt: "Aochuan Logo", url: "https://www.aochuan-tech.com/" },
    { src: ApothekaryLogo, alt: "Apothekary Logo", url: "https://www.apothekary.co" },
    { src: AnifurryLogo, alt: "Anifurry Logo", url: "https://www.anifurry.com" },
    { src: ZafulLogo, alt: "Zaful Logo", url: "https://www.zaful.com" },
    { src: AnalemmaLogo, alt: "Analemma Logo", url: "https://analemma-water.com/" },
    { src: JwPeiLogo, alt: "JW PEI Logo", url: "https://www.jwpei.com" },
    { src: ModLilyLogo, alt: "ModLily Logo", url: "https://www.modlily.com" },
    { src: CoredyLogo, alt: "Coredy Logo", url: "https://www.coredy.com" },
    { src: PrettyDressLogo, alt: "The Pretty Dress Company Logo", url: "https://www.theprettydresscompany.com" },
    { src: MintoTrackerLogo, alt: "Minto Tracker Logo", url: "https://mintal.com/" },
    { src: AirnumLogo, alt: "Airnum Logo", url: "https://www.airinum.com" },
    { src: TakeMonDayLogo, alt: "Take Monday Logo", url: "https://www.takemonday.com" },
    { src: EcoSusiLogo, alt: "EcoSusi Logo", url: "https://www.ecosusi.com" },
    { src: BellaBarnettLogo, alt: "Bella Barnett Logo", url: "https://www.bellabarnett.com" },
    { src: VivaivaLogo, alt: "Vivaiva Logo", url: "https://www.vivaia.com" },
    { src: RikiLovesRikiLogo, alt: "Riki Loves Riki Logo", url: "https://www.rikilovesriki.com" },
    // { src: InCreoDesignLogo, alt: "InCreoDesign Logo", url: "https://www.increodesign.com" },
    { src: KimTrueLogo, alt: "KimTrue Logo", url: "https://www.kimtrue.com" },
];

const BusinessPortfolio = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef();
    const { t } = useTranslation();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: '120px',
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
            <div className="relative overflow-hidden h-full">
                <div className="text-center text-white mb-10 relative z-10">
                    <h1 className="text-4xl font-bold">{t('REFERENCES')}</h1>
                </div>
            </div>
            <style>
                {`
                .slick-dots {
                    bottom: -50px; // Adjust position if necessary
                    display: flex;
                    justify-content: center; // Center the dots container
                }
    
                .slick-dots li {
                    margin: 0 5px; // Increase spacing
                }

                .slick-dots li button:before {
                    color: white;
                    font-size: 12px; // Adjust font size
                    opacity: 0.75; // Make inactive dots less prominent
                }
    
                .slick-dots li.slick-active button:before {
                    color: white;
                    opacity: 1; // Active dot is fully opaque
                }

                @media (max-width: 768px) {
                    .slick-dots {
                        bottom: -100px; // Mobil cihazlarda noktaları daha aşağı çek
                    }
                }
            `}
            </style>
            <div className="container mx-auto px-4">
                <Slider {...settings} ref={sliderRef}>
                    {companies.map((company, index) => (
                        <div key={index} className="px-2 flex justify-center">
                            <a href={company.url} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={company.src}
                                    alt={company.alt}
                                    className={`mx-auto object-cover transition-all duration-300 ease-in-out ${index === currentSlide ? 'h-[500px]' : 'h-[400px] opacity-50'}`}
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