import React, {useState} from "react";
import { Link } from "react-scroll";
import { useTranslation } from '../context/useTranslation';

const Footer = () => {
  const { t } = useTranslation();
  const [currentYear] = useState(new Date().getFullYear());

  return (
    <footer className="bg-midnight bg-opacity-30 text-white py-6 w-full">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Main Navigation Column */}
        <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
          <Link to="homepage" smooth={true} duration={500} className="mb-2 hover:underline text-sm sm:text-base">{t('HOMEPAGE')}</Link>
          <Link to="about-us" smooth={true} duration={500} className="mb-2 hover:underline text-sm sm:text-base">{t('ABOUT_US')}</Link>
          <Link to="contact" smooth={true} duration={500} className="mb-2 hover:underline text-sm sm:text-base">{t('CONTACT_US')}</Link>
        </div>

        {/* Additional Mobile Menu Column */}
        <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
          <Link to="webDesign" smooth={true} duration={500} className="mb-2 hover:underline text-sm sm:text-base">{t('WEB_DESIGN')}</Link>
          <Link to="socialMediaManagementServices" smooth={true} duration={500} className="mb-2 hover:underline text-sm sm:text-base">{t('SOCIAL_MEDIA_MANAGEMENT')}</Link>
          <Link to="digitalMarketingBrandingServices" smooth={true} duration={500} className="mb-2 hover:underline text-sm sm:text-base">{t('DIGITAL_MARKETING_BRANDING')}</Link>
          <Link to="productionServices" smooth={true} duration={500} className="mb-2 hover:underline text-sm sm:text-base">{t('PRODUCTION_SERVICES')}</Link>
        </div>

        {/* Contact Information Column */}
        <div className="flex flex-col items-center sm:items-end">
          <p className="mb-2 text-sm sm:text-base">{t('ADDRESS')}</p>
          <p><a href="mailto:info@etoiledsgn.com" className="hover:underline text-sm sm:text-base">{t('EMAIL')}</a></p>
        </div>

        {/* Centered Copyright Notice */}
        <div className="col-span-1 sm:col-span-2 md:col-span-3 text-center text-sm sm:text-base">
          {t('ALL_RIGHTS_RESERVED', { year: currentYear })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;