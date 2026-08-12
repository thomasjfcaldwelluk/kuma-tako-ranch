export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  heading: string;
  links: FooterLink[];
};

export type FooterSocial = {
  name: "facebook" | "instagram";
  href: string;
};

export type FooterContact = {
  address: string;
  email: string;
  phone: string;
};