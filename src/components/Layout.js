import React from "react";
import cn from "classnames";
import Header from "./Header";
import Footer from "./Footer";
import Seo from "./Seo";
import AboutWeb from "../videos/about-web.mp4";
import AboutMobile from "../videos/about-mobile.mp4";

export default function Layout({ className, children }) {
  return (
    <div className={cn("overflow-hidden min-h-screen", className)}>
      <Seo />
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="fixed inset-0 w-full h-full object-cover z-0 hidden md:block">
        <source src={AboutWeb} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video autoPlay loop muted playsInline className="fixed inset-0 w-full h-full object-cover z-0 md:hidden">
        <source src={AboutMobile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex flex-col w-full min-h-screen z-10">
        <Header />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}