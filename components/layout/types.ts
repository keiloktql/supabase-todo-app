import { FOOTER_NAV_HEADER_ENUM } from "@/config/constants";

export interface MainLayoutProps {
  children?: any;
  title?: string;
}
export interface SEOProps {
  title?: string;
}

export interface NewsLetterFormValues {
  newsletterEmail: string;
}

export interface FooterNavLinksValues {
  variation: FOOTER_NAV_HEADER_ENUM;
}

export interface FooterNavLinkKeys {
  href: string;
  text: string;
}
