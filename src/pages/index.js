// src/pages/index.js
import React from "react"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import AboutSection from "../components/AboutSection"
import HeroSection from "../components/Hero"
import ServicesGallery from "../components/ServicesGallery"
import VisionMissionSection from "../components/VisionMissionSection"
import BeforeVisionMissionSection from "../components/BeforeVisionMissionSection"
import ContactForm from "../components/ContactForm"
import TeamSection from "../components/TeamSection"
import BrandSection from "../components/BrandSection"
import BrandSocialMediaManagementSection from "../components/BrandSocialMediaManagementSection"
import BrandDigitalMarketingBrandingSection from "../components/BrandDigitalMarketingBrandingSection"
import BrandProductionSection from "../components/BrandProductionSection"
import WebServices from "../components/WebServices"
import DigitalMarketingBrandingServices from "../components/DigitalMarketingBranding"
import ProductionServices from "../components/ProductionServices"
import SocialMediaManagementServices from "../components/SocialMediaManagement"
import BusinessPortfolio from "../components/BusinessPortfolio"
// index.js veya App.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Seo from "../components/seo"
import { LanguageProvider } from '../context/LanguageContext';

const IndexPage = () => {

  return (
    <LanguageProvider>

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
        <BeforeVisionMissionSection />
      </section>


      {/* Vision and Mission Section */}
      <section>
        <div className="relative overflow-hidden h-full py-20">
          <VisionMissionSection />
        </div>
      </section>

      {/* Team Section */}

      <section>
        <div className="relative overflow-hidden h-full py-20">
          <TeamSection />
        </div>
      </section>

      <section>
        <BrandSection />
      </section>

      <section id="solutions">
        <div className="relative overflow-hidden h-full py-40">
          <WebServices />
        </div>
      </section>


      <section>
        <BrandSocialMediaManagementSection />
      </section>

      <section id="socialMediaManagementServices">
        <div className="relative overflow-hidden h-full py-40">
          <SocialMediaManagementServices />
        </div>
      </section>


      <section>
        <BrandDigitalMarketingBrandingSection />
      </section>

      <section id="digitalMarketingBrandingServices">
        <div className="relative overflow-hidden h-full py-40">
          <DigitalMarketingBrandingServices />
        </div>
      </section>


      <section>
        <BrandProductionSection />
      </section>

      <section id="productionServices">
        <div className="relative overflow-hidden h-full py-40">
          <ProductionServices />
        </div>
      </section>

      <section>
        {/* <div className="relative overflow-hidden h-screen py-20"> */}
        <BusinessPortfolio />
        {/* </div> */}
      </section>

      {/* Sub-Nav Section */}
      {/* <section className="flex flex-col items-center relative mt-[32px] sm:mt-[88px]">
       
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
    </LanguageProvider>

  )
}

export default IndexPage
