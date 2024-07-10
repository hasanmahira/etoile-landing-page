import React from 'react';

import Vid1 from "../videos/Vid1.mp4"
import Vid2 from "../videos/Vid2.mp4"
import Vid3 from "../videos/Vid3.mp4"
import Vid4 from "../videos/Vid4.mp4"

const videos = [
    { src: Vid1 },
    { src: Vid2 },
    { src: Vid3 },
    { src: Vid4 },
];

const VideoGallery = () => {
    return (
        <section className="py-10">
            {videos.map((video, index) => (
                <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center my-[-50px]`}>
                    <div className="w-1/2 h-4/5 flex items-center">
                        <video
                            autoPlay
                            playsInline
                            loop
                            muted
                            className="w-full h-2/5 mx-auto"
                            style={{ filter: 'brightness(0.9)' }}
                        >
                            <source src={video.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default VideoGallery;