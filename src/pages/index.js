// src/pages/index.js
import React from "react"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import AboutSection from "../components/AboutSection"
import HeroSection from "../components/Hero"
import ServicesGallery from "../components/ServicesGallery"
import VisionMissionSection from "../components/VisionMissionSection"
import ContactForm from "../components/ContactForm"
import TeamSection from "../components/TeamSection"
import Services from "../components/AllServices"
import BusinessPortfolio from "../components/BusinessPortfolio"

// import Seo from "../components/seo"

const IndexPage = () => {

  return (
    <Layout className="text-like-cyan-vlight">
      {/* Hero Section */}
      <section id="homepage">
        <HeroSection />
      </section>

      <section id="about-us">
        {/* <div className="relative overflow-hidden h-screen py-20"> */}
        <AboutSection />
        {/* </div> */}
      </section>

      {/* Gif Section */}
      <section>
        <ServicesGallery />
      </section>

      {/* Vision and Mission Section */}
      <section>
        <VisionMissionSection />
      </section>

      {/* Team Section */}

      <section>
        <div className="relative overflow-hidden h-screen py-20">
          <TeamSection />
        </div>
      </section>

      <section id="solutions">
        <div className="relative overflow-hidden h-full py-40">
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


      <Navbar />
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
