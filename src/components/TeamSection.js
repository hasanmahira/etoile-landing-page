import React, { useState } from 'react';
import TeamVideoMp4 from "../videos/team.mp4"
import TayfunPhoto from "../images/tayfun_pp.png"

const TeamSection = ({ }) => {
    const [videoEnded, setVideoEnded] = useState(false);
    const teamMembers = [
        {
            name: "Melis Çıkalçekic",
            role: "Co-Founder",
            photo: { TayfunPhoto } // Ensure you use the correct path to the image
        },
        {
            name: "Tayfun Özlok",
            role: "Co-Founder",
            photo: "path_to_tayfun_photo.jpg"
        },
        {
            name: "Berke Kocyigitoglu",
            role: "Art Director",
            photo: "path_to_berke_photo.jpg"
        },
        {
            name: "Tayfun Özlok",
            role: "Co-Founder",
            photo: "path_to_tayfun_second_photo.jpg"
        },
        {
            name: "Melis Çıkalçekic",
            role: "Co-Founder",
            photo: "path_to_melis_second_photo.jpg"
        },
        {
            name: "Tayfun Özlok",
            role: "Co-Founder",
            photo: "path_to_tayfun_third_photo.jpg"
        }
    ];

    const handleVideoEnd = () => {
        setVideoEnded(true);
    };

    return (
        <section>
            <div className="relative overflow-hidden h-screen">
                <div className="text-center text-white mb-10">
                    <h1 className="text-4xl font-bold">THE ETOILE CONSTELLATION</h1>
                </div>
                {/* Video Element */}
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
                <div className={`relative z-10 grid grid-cols-3 gap-4 items-center justify-items-center p-4 ${videoEnded ? 'flex' : 'hidden'}`}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center text-white">
                            <img src={TayfunPhoto} alt={member.name} className="w-32 h-32 rounded-full mb-4" />
                            <h2 className="text-xl font-bold">{member.name}</h2>
                            <p className="text-sm">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;