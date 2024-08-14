import React, {useState} from "react";
import { Link } from "react-scroll";
import { useTranslation } from '../context/useTranslation';

const Footer = () => {
  const { t } = useTranslation();
  const [currentYear] = useState(new Date().getFullYear());

  return (
    <footer className="bg-midnight bg-opacity-30 text-white py-6 top-0 w-full">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main Navigation Column */}
        <div className="flex flex-col items-center md:items-start">
          <Link to="homepage" smooth={true} duration={500} className="mb-2 hover:underline">{t('HOMEPAGE')}</Link>
          <Link to="about-us" smooth={true} duration={500} className="mb-2 hover:underline">{t('ABOUT_US')}</Link>
          <Link to="contact" smooth={true} duration={500} className="mb-2 hover:underline">{t('CONTACT_US')}</Link>
        </div>

        {/* Additional Mobile Menu Column */}
        <div className="flex flex-col items-center md:items-start">
          <Link to="webDesign" smooth={true} duration={500} className="mb-2 hover:underline">{t('WEB_DESIGN')}</Link>
          <Link to="socialMediaManagementServices" smooth={true} duration={500} className="mb-2 hover:underline">{t('SOCIAL_MEDIA_MANAGEMENT')}</Link>
          <Link to="digitalMarketingBrandingServices" smooth={true} duration={500} className="mb-2 hover:underline">{t('DIGITAL_MARKETING_BRANDING')}</Link>
          <Link to="productionServices" smooth={true} duration={500} className="mb-2 hover:underline">{t('PRODUCTION_SERVICES')}</Link>
        </div>

        {/* Contact Information Column */}
        <div className="flex flex-col items-center md:items-end">
          <p className="mb-2">{t('ADDRESS')}</p>
          <p><a href="mailto:info@etoiledsgn.com" className="hover:underline">{t('EMAIL')}</a></p>
        </div>

        {/* Centered Copyright Notice */}
        <div className="col-span-3 text-center mt-6">
          {t('ALL_RIGHTS_RESERVED', { year: currentYear })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;