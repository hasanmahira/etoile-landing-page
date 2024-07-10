// src/pages/index.js
import React from "react"
import Layout from "../components/Layout"
// import Navbar from "../components/Navbar"
// import Hero from "../components/Hero"
// import Feature from "../components/Feature"
import AboutSection from "../components/AboutSection"
import VideoGallery from "../components/VideoGallery"
// import ServicesSection from "../components/ServicesSection"
// import TestimonialsSection from "../components/TestimonialsSection"
// import GallerySection from "../components/GallerySection"
// import BlogSection from "../components/BlogSection"
import ContactForm from "../components/ContactForm"
// import Footer from "../components/Footer"
import HeroVideoMp4 from "../videos/hero.mp4"
// import TeamVideoMp4 from "../videos/team.mp4"
import AboutUsVideo from "../videos/aboutus_aurora.mp4"
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
  Mission,
  Vision
} from "../text";
import TeamSection from "../components/TeamSection"
import Services from "../components/AllServices"
import BusinessPortfolio from "../components/BusinessPortfolio"

// import Seo from "../components/seo"

// const videos = [
//   {
//     src: "../videos/vid1.mp4",
//     title: 'First GIF',
//     description: 'Description of the first GIF'
//   },
//   {
//     src: '../videos/vid2.mp4',
//     title: 'Second GIF',
//     description: 'Description of the second GIF'
//   }
//   // Add more GIFs as needed
// ];

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
              alt="Decorative image"
              style={{ filter: 'brightness(0.9)' }}
            >
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
      
      <section>
        {/* <div className="relative overflow-hidden h-screen py-20"> */}
          <AboutSection />
        {/* </div> */}
      </section>

      {/* Gif Section */}
      <section>
          <VideoGallery />
      </section>

      {/* Vision and Mission Section */}
      <section className="py-20">
        <div className="relative overflow-hidden h-screen">
          <video
            autoPlay
            playsInline
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
            alt="Decorative image"
            style={{ filter: 'brightness(0.9)' }}
          >
            <source src={AboutUsVideo} type="video/mp4" />
          </video>
          <div className="relative z-10 flex flex-col justify-between h-full bg-black bg-opacity-50 p-4">
            <div className="text-right text-white md:mt-20 md:mr-20">
              <h1 className="text-4xl font-bold mb-2">VİZYONUMUZ</h1>
              <p>{Vision}</p>
            </div>
            <div className="text-left text-white md:mb-20 md:ml-20">
              <h1 className="text-4xl font-bold mb-2">MİSYONUMUZ</h1>
              <p>{Mission}</p>
            </div>
            <div className="flex justify-center">
              <button className="mt-4 px-6 py-2 bg-purple-700 hover:bg-purple-600 rounded shadow-lg">SEE SOLUTIONS</button>
            </div>
          </div>
        </div>
        <div className="absolute hidden inset-x-0 bottom-0 h-[5%] md:flex justify-center">
          <button className="mx-2 px-6 py-2 hover:bg-gray-700 rounded text-white font-bold">
            Contact Us
          </button>
        </div>
      </section>

      {/* Team Section */}

      <section>
        <div className="relative overflow-hidden h-screen py-20">
          <TeamSection />
        </div>
      </section>

      <section>
        <div className="relative overflow-hidden h-screen py-20">
          <Services />
        </div>
      </section>

      <section>
        {/* <div className="relative overflow-hidden h-screen py-20"> */}
        <BusinessPortfolio />
        {/* </div> */}
      </section>

      {/* Sub-Nav Section */}
      {/* <section className="flex flex-col items-center relative mt-[32px] sm:mt-[88px]">
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
      </section> */}


      {/* <Navbar /> */}
      {/* <Feature
        title="Transform Your Dreams"
        description="Explore our services and see how we can make a difference."
        imageName="feature-image.jpg"
        buttonText="Learn More"
      />
      <ServicesSection />
      <TestimonialsSection />
      <GallerySection />
      <BlogSection /> */}
      {/* <SubscribeNewsletterSection /> */}

      {/* Contact Form Section */}
      <section>
        <div className="relative flex justify-center">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      {/* <section>
        <div className="relative flex justify-center">
          <Footer />
        </div>
      </section> */}
    </Layout>
  )
}

export default IndexPage
