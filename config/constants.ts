/* eslint-disable no-unused-vars */
// General
export const SUPABASE_CONFIG = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL,
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
};

// Enums and its meta info
export enum BTN_ENUM {
  PRIMARY = "PRIMARY",
  PRIMARY_EMPTY = "PRIMARY_EMPTY"
}

export const BTN_META = {
  [BTN_ENUM.PRIMARY]: {
    className: "bg-primary-600 text-white"
  },
  [BTN_ENUM.PRIMARY_EMPTY]: {
    className: "hover:underline"
  }
};

export enum FORM_FIELD_ENUM {
  INPUT = "input",
  TEXTAREA = "textarea"
}

export enum FOOTER_NAV_HEADER_ENUM {
  PRODUCT = "PRODUCT",
  COMPANY = "COMPANY",
  RESOURCES = "RESOURCES",
  LEGAL = "LEGAL"
}

export const FOOTER_NAV_LINKS_META = {
  [FOOTER_NAV_HEADER_ENUM.PRODUCT]: {
    heading: "Product",
    links: [
      {
        text: "Overview",
        href: "/overview"
      },
      {
        text: "Features",
        href: "/features"
      },
      {
        text: "Solutions",
        href: "/solutions"
      },
      {
        text: "Pricing",
        href: "/pricing"
      },
      {
        text: "Releases",
        href: "/releases"
      }
    ]
  },
  [FOOTER_NAV_HEADER_ENUM.COMPANY]: {
    heading: "Company",
    links: [
      {
        text: "About us",
        href: "/about-us"
      },
      {
        text: "Careers",
        href: "/careers"
      },
      {
        text: "Press",
        href: "/press"
      },
      {
        text: "News",
        href: "/news"
      },
      {
        text: "Media kit",
        href: "/media-kit"
      },
      {
        text: "Contact",
        href: "/contact"
      }
    ]
  },
  [FOOTER_NAV_HEADER_ENUM.RESOURCES]: {
    heading: "Resources",
    links: [
      {
        text: "Blog",
        href: "/blog"
      },
      {
        text: "Newsletter",
        href: "/newsletter"
      },
      {
        text: "Events",
        href: "/events"
      },
      {
        text: "Help centre",
        href: "/help"
      },
      {
        text: "Tutorials",
        href: "/tutorials"
      },
      {
        text: "support",
        href: "/support"
      }
    ]
  },
  [FOOTER_NAV_HEADER_ENUM.LEGAL]: {
    heading: "Legal",
    links: [
      {
        text: "Terms",
        href: "/terms"
      },
      {
        text: "Privacy",
        href: "/privacy"
      },
      {
        text: "Cookies",
        href: "/cookies"
      },
      {
        text: "Settings",
        href: "/settings"
      }
    ]
  }
};
