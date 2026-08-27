import { FooterColumn,FooterContact,FooterSocial, } from "@/types/footer";

export const footerTagline = "A peaceful mountain retreat";

export const footerColumns: FooterColumn[] = [
  {
    heading: "Explore",
    links: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Stay",
        href: "/stay",
      },
      {
        label: "Gallery",
        href: "/gallery",
      },
      {
        label: "Things To Do",
        href: "/things-to-do",
      },
      {
        label: "About",
        href: "/about",
      },
    ],
  },
  {
    heading: "Support",
    links: [
      {
        label: "FAQ",
        href: "/faq",
      },
      {
        label: "Contact",
        href: "/contact",
      },
      {
        label: "Booking Policy",
        href: "/booking-policy",
      },
    ],
  },
];

export const footerContact: FooterContact = {
  address: "28421 State Route 706 E Ashford WA 98304",
  email: "info@kumatakoranch.com",
  phone: "(360)7680971",
};

export const footerSocials: FooterSocial[] = [
  {
    name: "facebook",
    href: "#",
  },
  {
    name: "instagram",
    href: "#",
  },
];