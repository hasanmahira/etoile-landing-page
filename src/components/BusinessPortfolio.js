import React from 'react';
import { useTranslation } from '../context/useTranslation';
// Import company logos
import OmkoLogo from "../images/logos/omko.png";
import YatagyLogo from "../images/logos/atagur.png";
import HidromekLogo from "../images/logos/hidromek.png";
import GuzelKasapLogo from "../images/logos/guzel-kasap.png";
import CaseLogo from "../images/logos/case.png";
import HmbrgLogo from "../images/logos/hmbrgr.png";
import GenesisLogo from "../images/logos/genesis.png";
import SheinLogo from "../images/logos/shein.png";
import TencelLogo from "../images/logos/tencel.png";
import GoeliaLogo from "../images/logos/goelia.jpg";
import LatteLierLogo from "../images/logos/lattelier.png";
import DeptAnonymLogo from "../images/logos/deptanonym.png";
import SheepIncLogo from "../images/logos/sheep-inc.png";
import AdventureChallengeLogo from "../images/logos/adventure-challange.png";
import LolaRoseLogo from "../images/logos/lola-rose.png";
import AkiflowLogo from "../images/logos/akiflow.png";
import HaylouLogo from "../images/logos/haylou.png";
import IdealOfSwedenLogo from "../images/logos/ideal-of-sweden.png";
import MonicaVinaderLogo from "../images/logos/monica-vinader.png";
import ElkeLogo from "../images/logos/elke.png";
import RomweLogo from "../images/logos/romwe.png";
import YogibowLogo from "../images/logos/sugarbearpro.jpeg";
import AochuanLogo from "../images/logos/aochuan.png";
import ApothekaryLogo from "../images/logos/apothekary.png";
import AnifurryLogo from "../images/logos/anifurry.png";
import ZafulLogo from "../images/logos/zaful.jpg";
import AnalemmaLogo from "../images/logos/analemma.png";
import JwPeiLogo from "../images/logos/jw-pei.png";
import ModLilyLogo from "../images/logos/modlily.png";
import CoredyLogo from "../images/logos/coredy.webp";
import PrettyDressLogo from "../images/logos/pretty-dress.jpeg";
import MintoTrackerLogo from "../images/logos/mintal.png";
import AirnumLogo from "../images/logos/airnum.png";
import TakeMonDayLogo from "../images/logos/take-monday.webp";
import EcoSusiLogo from "../images/logos/ecosusi.png";
import BellaBarnettLogo from "../images/logos/bella-barnett.png";
import VivaivaLogo from "../images/logos/vivaia.jpeg";
import RikiLovesRikiLogo from "../images/logos/riki-loves-riki.webp";
// import InCreoDesignLogo from "../images/logos/increo-design.png";
import KimTrueLogo from "../images/logos/kimtrue.png";

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
    const { t } = useTranslation();

    return (
        <section className="relative w-full mt-0 overflow-hidden">
    <div className="container mx-auto">
        <h1 className="text-center text-white text-3xl font-bold mb-8">{t('REFERENCES')}</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-4">
            {companies.map((company, index) => (
                <div key={index} className="flex justify-center items-center p-1 bg-white rounded-lg shadow" style={{ maxWidth: '120px' }}>
                    <a href={company.url} target="_blank" rel="noopener noreferrer">
                        <img src={company.src} alt={company.alt} className="w-32 h-32 object-contain" />
                    </a>
                </div>
            ))}
        </div>
    </div>
</section>
    );
};

export default BusinessPortfolio;