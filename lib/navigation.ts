export type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

export const mainNavLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/coverage", label: "Coverage" },
  { href: "/mission", label: "Mission" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const footerNavLinks: NavLink[] = mainNavLinks;

export const legalNavLinks: NavLink[] = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
];
