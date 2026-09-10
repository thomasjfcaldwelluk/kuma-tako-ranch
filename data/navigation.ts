import { NavLink } from "@/types/navigation";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Stay",
    href: "/stay",
    children: [
      { label: "The Ranch House", href: "/stay/ranch-house" },
      { label: "RV Sites", href: "/stay/rv-sites" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Things To Do", href: "/things-to-do" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];