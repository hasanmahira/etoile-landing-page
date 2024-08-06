import React, { useState } from 'react';
import TeamVideoMp4 from "../videos/team.mp4"
import TayfunPhoto from "../images/tayfun_pp.jpeg"
import BerkePhoto from "../images/berke_pp.jpeg"
import MelisPhoto from "../images/melis_pp.jpeg"
import MahirPhoto from "../images/mahir_pp.jpeg"
import SinaPhoto from "../images/sina_pp.jpeg"
import DefaultPhoto from "../images/default_pp.png"
import teamMembersData from '../data/TeamMembersList.json';
import { useTranslation } from '../context/useTranslation';

const TeamListSection = () => {
    const [videoEnded, setVideoEnded] = useState(false);
    const { t } = useTranslation();

    const handleVideoEnd = () => {
        setVideoEnded(true);
    };

    // Mapping each team member's name to their specific photo
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

    return (
        <section>
            <div className="relative overflow-hidden h-full">
                <div className="text-center text-white mb-10 relative z-10">
                    <h1 className="text-4xl font-bold">{t('THE_ETOILE_CONSTELLATION')}</h1>
                </div>
                <div className="relative w-screen h-screen overflow-hidden">

                    {/* Team Video */}
                    {!videoEnded && (
                        <video
                            autoPlay
                            playsInline
                            onEnded={handleVideoEnd}
                            muted
                            className="absolute w-screen h-screen object-cover"
                            style={{ filter: 'brightness(0.9)' }}
                        >
                            <source src={TeamVideoMp4} type="video/mp4" />
                        </video>
                    )}

                    {/* Team Information Section */}
                    <div className={`relative z-10 grid grid-cols-5 gap-2 md:gap-4 items-center justify-items-center p-4 md:px-60 ${videoEnded ? 'flex' : 'hidden'}`}>
                        {teamMembers.map((member, index) => (
                            <div key={index} className="flex flex-col items-center justify-center text-center text-white px-1">
                                <img src={member.photo} alt={member.name} className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-2" />
                                <h2 className="text-xs md:text-lg font-bold">{member.name}</h2>
                                <p className="text-xs">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamListSection;