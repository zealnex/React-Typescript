interface MenuItem {
  href: string;
  text: string;
  isCurrentPage?: boolean;
}
interface Button {
  href: string;
  text: string;
}
interface Title {
  title: string;
}
interface CommonSection {
  companyName: string;
  companyLogo: { src: string; alt: string };
  companyFooterInfo: string;
}
interface FooterItem {
  category: string;
  links: Button[];
}
interface Item_Icon {
  title: string;
  description: string;
  icon: string;
}
interface Item {
  title: string;
  description: string;
}
interface MenuItem {}
interface ServiceSection {
  title: string;
  services: Item_Icon[];
}
interface FeatureSection {
  section1: Item[];
  section2: Item_Icon[];
  link: Button[];
}
interface AboutUsSection {
  heading: string;
  topicTop: string;
  topicBottom: string;
  items: Title[];
}
interface MainSection {
  heading: array[];
  content: string;
  buttons: Button[];
}
interface HeaderSection {
  menuItems: MenuItem[];
  buttons: Button[];
}
interface ContactSection {
  title: string;
  description: string;
  email: string;
  phone: string;
}
interface FooterSection {
  menuItems: FooterItem[];
}

export interface Data {
  common: CommonSection;
  header: HeaderSection;
  main: MainSection;
  services: ServiceSection;
  features: FeatureSection;
  about: AboutUsSection;
  contact: ContactSection;
  footer: FooterSection;
}
