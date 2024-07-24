import React, { useState } from 'react';
import TeamVideoMp4 from "../videos/team.mp4"
import TayfunPhoto from "../images/tayfun_pp.jpeg"
import BerkePhoto from "../images/berke_pp.jpeg"
import MelisPhoto from "../images/melis_pp.jpeg"
import MahirPhoto from "../images/mahir_pp.jpeg"
import DefaultPhoto from "../images/default_pp.png"
import teamMembersData from '../data/TeamMembersList.json';

const TeamSection = () => {
    const [videoEnded, setVideoEnded] = useState(false);

    const handleVideoEnd = () => {
        setVideoEnded(true);
    };

    // Mapping each team member's name to their specific photo
    const teamMembers = teamMembersData.map(member => {
        let photo;
        switch (member.name) {
            case "Tayfun Özlok":
                photo = TayfunPhoto;
                break;
            case "Berke Kocyigitoglu":
                photo = BerkePhoto;
                break;
            case "Melis Çıkalçekic":
                photo = MelisPhoto;
                break;
            case "Hasan Mahir Ateş":
                photo = MahirPhoto;
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
                    <h1 className="text-4xl font-bold">THE ETOILE CONSTELLATION</h1>
                </div>

                {/* Team Video */}
                {!videoEnded && (
                    <video
                        autoPlay
                        playsInline
                        onEnded={handleVideoEnd}
                        muted
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ filter: 'brightness(0.9)' }}
                    >
                        <source src={TeamVideoMp4} type="video/mp4" />
                    </video>
                )}

                {/* Team Information Section */}
                <div className={`relative z-10 grid grid-cols-2 md:grid-cols-5 gap-4 items-center justify-items-center p-4 md:px-60 ${videoEnded ? 'flex' : 'hidden'}`}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center text-white">
                            <img src={member.photo} alt={member.name} className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-4" />
                            <h2 className="text-lg md:text-xl font-bold">{member.name}</h2>
                            <p className="text-xs md:text-sm">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;