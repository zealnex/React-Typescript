import SiteData from './data/data.json';
import { AboutSection } from './components/about-section/about-section';
import { ContactUsSection } from './components/contact-us-section/contact-us-section';
import { FeaturesSection } from './components/features-section/features-section';
import { FooterSection } from './components/footer-section/footer-section';
import { HeaderSection } from './components/header-section/header-section';
import { MainSection } from './components/main-section/main-section';
import { ServicesSection } from './components/services-sections/services-section';
import { Data } from './types';

export const LandingPage = () => {
  const data: Data = SiteData;
  return (
    <>
      <HeaderSection data={data} />
      <MainSection data={data} />
      <ServicesSection data={data} />
      <FeaturesSection data={data} />
      <AboutSection data={data} />
      <ContactUsSection data={data} />
      <FooterSection data={data} />
    </>
  );
};
