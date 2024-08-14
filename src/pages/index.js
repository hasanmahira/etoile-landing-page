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
import WebServices from "../components/WebServices"
import DigitalMarketingBrandingServices from "../components/DigitalMarketingBranding"
import ProductionServices from "../components/ProductionServices"
import SocialMediaManagementServices from "../components/SocialMediaManagement"
import BusinessPortfolio from "../components/BusinessPortfolio"
import Footer from "../components/Footer"
// index.js veya App.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../text/i18n'; // Import i18n configuration
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

        {/* About Section */}
        <section id="about-us">
          <AboutSection />
        </section>

        {/* Services Section */}
        <section>
          <ServicesGallery />
        </section>

        {/* Vision and Mission Section */}
        <section>
          <BeforeVisionMissionSection />
        </section>


        {/* Vision and Mission Section */}
        <section>
          <div className="relative overflow-hidden h-full">
            <VisionMissionSection />
          </div>
        </section>

        <section>
          <BrandSection />
        </section>

        <section id="webDesign">
          <div className="relative overflow-hidden h-full">
            <WebServices />
          </div>
        </section>


        {/* <section>
          <BrandSocialMediaManagementSection />
        </section> */}

        <section id="socialMediaManagementServices">
          <div className="relative overflow-hidden h-full py-40">
            <SocialMediaManagementServices />
          </div>
        </section>


        {/* <section>
          <BrandDigitalMarketingBrandingSection />
        </section> */}

        <section id="digitalMarketingBrandingServices">
          <div className="relative overflow-hidden h-full py-40">
            <DigitalMarketingBrandingServices />
          </div>
        </section>


        {/* <section>
          <BrandProductionSection />
        </section> */}

        <section id="productionServices">
          <div className="relative overflow-hidden h-full py-40">
            <ProductionServices />
          </div>
        </section>

        <section id="team">
          <TeamSection />
        </section>

        <section>
          {/* <div className="relative overflow-hidden h-screen py-20"> */}
          <BusinessPortfolio />
          {/* </div> */}
        </section>


        <Navbar />

        {/* Contact Form Section */}
        <section id="contact">
          <div className="relative flex justify-center py-40">
            <ContactForm />
          </div>
        </section>

        <section>
          <div className="relative flex justify-center">
            <Footer />
          </div>
        </section>
      </Layout>
    </LanguageProvider>

  )
}

export default IndexPage
