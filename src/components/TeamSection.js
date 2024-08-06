import React from 'react';
import { useTranslation } from '../context/useTranslation';
import TayfunPhoto from "../images/tayfun_pp_new3.jpg";
import BerkePhoto from "../images/berke_pp.jpeg";
import MelisPhoto from "../images/melis_pp_new.jpg";
import MahirPhoto from "../images/mahir_pp.jpeg";
import SinaPhoto from "../images/sina_pp.jpeg";
import DefaultPhoto from "../images/default_pp.png";
import teamMembersData from '../data/TeamMembersList.json';
import BackgroundImage from "../images/card_bg.png";

const teamMembers = teamMembersData.map(member => {
    let photo;
    switch (member.name) {
        case "Tayfun ÖZLOK":
            photo = TayfunPhoto;
            break;
        case "Berke KOÇYİĞİTOĞLU":
            photo = BerkePhoto;
            break;
        case "Melis ÇIKLAÇEKİÇ":
            photo = MelisPhoto;
            break;
        case "Hasan Mahir ATEŞ":
            photo = MahirPhoto;
            break;
        case "Sina Barış AKKOCAOĞLU":
            photo = SinaPhoto;
            break;
        default:
            photo = DefaultPhoto;
    }
    return {
        ...member,
        photo
    };
});

const ServicesGallery = () => {
    const { t } = useTranslation();

    return (
        <section className="relative w-full mt-0 overflow-hidden py-20">
            <div className="container mx-auto px-4">
                <h1 className="text-center text-white text-5xl font-bold mb-10">{t('THE_ETOILE_CONSTELLATION')}</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white bg-opacity-80 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center" style={{ backgroundImage: `url(${BackgroundImage})`, minHeight: '600px', maxWidth: '600px', width: '100%' }}>
                            <img src={member.photo} alt={member.name} className="w-32 h-32 rounded-full mb-4" />
                            <h2 className="text-xl font-semibold">{member.name}</h2>
                            <p className="text-md">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGallery;