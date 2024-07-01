// src/pages/index.js
import React from "react"
import Layout from "../components/Layout"
// import Navbar from "../components/Navbar"
// import Hero from "../components/Hero"
// import Feature from "../components/Feature"
// import AboutSection from "../components/AboutSection"
// import ServicesSection from "../components/ServicesSection"
// import TestimonialsSection from "../components/TestimonialsSection"
// import GallerySection from "../components/GallerySection"
// import BlogSection from "../components/BlogSection"
import ContactForm from "../components/ContactForm"
// import Footer from "../components/Footer"
import HeroVideoMp4 from "../videos/hero.mp4"
import HeroVideoWebm from "../videos/hero.mp4"
import HeroImage from "../images/hero.png"
import SomeImage from "../images/some-image.png"
import Vid1 from "../videos/Vid1.mp4"
import Vid2 from "../videos/Vid2.mp4"
import Vid3 from "../videos/Vid3.mp4"
import Vid4 from "../videos/Vid4.mp4"
import GradientText from "../components/GradientText"
import SubscribeNewsletterSection from "../components/SubscribeNewsletterSection"
import Button from "../components/Button"
import {
  DREAMS_LIVE,
} from "../text";
import Seo from "../components/seo"

const videos = [
  {
    src: "../videos/vid1.mp4",
    title: 'First GIF',
    description: 'Description of the first GIF'
  },
  {
    src: '../videos/vid2.mp4',
    title: 'Second GIF',
    description: 'Description of the second GIF'
  }
  // Add more GIFs as needed
];

const IndexPage = () => {


  return (
    <Layout className="text-like-cyan-vlight">
      {/* Hero Section */}
      <section>
        <div className="relative flex justify-center">
          <div className="aspect-w-15 aspect-h-8 relative w-full top-0 right-0 left-0 h-full h-screen overflow-hidden">
            <video
              autoPlay
              playsInline
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
              poster={HeroImage}
              alt="Decorative image"
              style={{ filter: 'brightness(0.9)' }}
            >
              <source src={HeroVideoWebm} type="video/webm" />
              <source src={HeroVideoMp4} type="video/mp4" />
            </video>
          </div>
          <div className="absolute hidden inset-x-0 bottom-0 h-[5%] md:flex justify-center">
            <button className="mx-2 px-6 py-2 bg-primary hover:bg-blue-700 rounded text-white font-bold">
              Learn More
            </button>
            <button className="mx-2 px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white font-bold">
              Contact Us
            </button>
          </div>
        </div>
      </section>


      {/* DreamComesLife Section */}
      <section className="relative flex mt-[88px]">
        <div className="relative flex justify-center flex-grow">
          {/* <KeyVisualImage className="absolute right-0 max-w-[750px] mr-[-120px] opacity-60 md:mr-0 md:opacity-100" /> */}
          <img
            src={SomeImage}
          />
        </div>
        <div className="relative flex flex-col justify-center flex-grow md:max-w-[66%] p-[24px]">
          <GradientText tag="h2" className="text-[48px] text-center md:text-left">Hayallerİnİzİ Bİzİmle Gerçeğe Dönüştürün!</GradientText>
          <p className="mt-[24px] text-like-cyan-vlight text-[20px]">{DREAMS_LIVE}</p>
        </div>
      </section>

      {/* Gif Section */}
      <section className="py-10">
        <div key={0} className={`flex ${0 % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center my-10`}>
          <div className="w-2/3">
            <video
              autoPlay
              playsInline
              loop
              muted
              controls
              className="w-full h-auto"
              poster={Vid1} // Assuming you have poster images for each video
              // poster={HeroImage}
              alt="Decorative image"
              style={{ filter: 'brightness(0.9)' }}
            >
              <source src={Vid1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div key={1} className={`flex ${1 % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center my-10`}>
          <div className="w-2/3">
            <video
              autoPlay
              playsInline
              loop
              muted
              controls
              className="w-full h-auto"
              poster={Vid2} // Assuming you have poster images for each video
            >
              <source src={Vid2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div key={2} className={`flex ${2 % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center my-10`}>
          <div className="w-2/3">
            <video
              autoPlay
              playsInline
              loop
              muted
              controls
              className="w-full h-auto"
              poster={Vid3} // Assuming you have poster images for each video
            >
              <source src={Vid3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div key={3} className={`flex ${3 % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center my-10`}>
          <div className="w-2/3">
            <video
              autoPlay
              playsInline
              loop
              muted
              controls
              className="w-full h-auto"
              poster={Vid4} // Assuming you have poster images for each video
            >
              <source src={Vid4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* <section className="py-10">
          {videos.map((video, index) => (
            <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center my-10`}>
              <div className="w-1/2">
                <video
                  controls
                  className="w-full h-auto"
                  poster={video.poster} // Assuming you have poster images for each video
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="w-1/2 px-5">
                <h3 className="text-lg font-bold">{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </div>
          ))}
        </section> */}


        {/* <img src={Vid1} alt="Describe the content of the GIF" /> */}
        {/* {gifs.map((gif, index) => (
          <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center my-10`}>
            <div className="w-1/2">
              <img src={gif.src} />
            </div>
            <div className="w-1/2 px-5">
              <h3 className="text-lg font-bold">{gif.title}</h3>
              <p>{gif.description}</p>
            </div>
          </div>
        ))} */}
      </section>

      {/* Sub-Nav Section */}
      <section className="flex flex-col items-center relative mt-[32px] sm:mt-[88px]">
        <Button
          className="text-[22px]"
          preset="filled"
          href="https://liker.land"
          target="_blank"
          rel="noopener"
        >Explore Writing NFT</Button>
        <nav className="flex justify-center mt-[24px]">
          <ul className="grid grid-cols-2 sm:flex flex-wrap gap-x-[8px] gap-y-[16px]">
            <li>
              <Button
                preset="outlined"
                href="https://app.like.co"
                target="_blank"
                rel="noopener"
              >Register ISCN</Button>
            </li>
            <li>
              <Button
                preset="outlined"
                href="https://docs.like.co/"
                target="_blank"
                rel="noopener"
              >Docs</Button>
            </li>
            <li>
              <Button
                preset="outlined"
                // href={blogUrl}
                target="_blank"
                rel="noopener"
              >Blog</Button>
            </li>
            <li>
              <Button
                preset="outlined"
                href="https://docs.like.co/faq"
                target="_blank"
                rel="noopener"
              >FAQ</Button>
            </li>
          </ul>
        </nav>
        <p className="text-[16px] mt-[24px]">
          Questions? Ask the <a className="underline" href="http://discord.gg/likecoin">community</a>.
        </p>
      </section>


      {/* <Navbar /> */}
      {/* <Feature
        title="Transform Your Dreams"
        description="Explore our services and see how we can make a difference."
        imageName="feature-image.jpg"
        buttonText="Learn More"
      />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <GallerySection />
      <BlogSection /> */}
      <SubscribeNewsletterSection />

      {/* Contact Form Section */}
      <section>
        <div className="relative flex justify-center">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <section>
        <div className="relative flex justify-center">
          {/* <Footer /> */}
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
