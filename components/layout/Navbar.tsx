"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "@/lib/clsx";
import { founderMailto } from "@/lib/contact";

type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/technology", label: "Technology" },
  { href: "/mission", label: "Mission" },
  { href: "/markets", label: "Markets" },
  { href: "/about", label: "About" },
  { href: founderMailto, label: "Contact", external: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        scrolled || menuOpen ? "bg-black/85 backdrop-blur-md hairline-b" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16 h-[72px] flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-[15px] font-medium tracking-widest2 uppercase"
        >
          Aerithion
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((link) => {
            const active = !link.external && pathname === link.href;
            const className = clsx(
              "text-[13px] uppercase tracking-widest2 transition-colors duration-200",
              active ? "text-bone" : "text-bone-muted hover:text-bone"
            );

            if (link.external) {
              return (
                <a key={link.href} href={link.href} className={className}>
                  {link.label}
                </a>
              );
            }

            return (
              <Link key={link.href} href={link.href} className={className}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden relative h-5 w-7 flex flex-col justify-between"
        >
          <span
            className={clsx(
              "h-px w-full bg-bone transition-transform duration-300",
              menuOpen && "translate-y-[9px] rotate-45"
            )}
          />
          <span
            className={clsx(
              "h-px w-full bg-bone transition-opacity duration-300",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={clsx(
              "h-px w-full bg-bone transition-transform duration-300",
              menuOpen && "-translate-y-[9px] -rotate-45"
            )}
          />
        </button>
      </div>

      <div
        className={clsx(
          "md:hidden overflow-hidden transition-[max-height] duration-300 ease-out hairline-t",
          menuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="flex flex-col px-6 py-6 gap-6">
          {links.map((link) => {
            const className = clsx(
              "text-sm uppercase tracking-widest2",
              !link.external && pathname === link.href
                ? "text-bone"
                : "text-bone-muted"
            );

            if (link.external) {
              return (
                <a key={link.href} href={link.href} className={className}>
                  {link.label}
                </a>
              );
            }

            return (
              <Link key={link.href} href={link.href} className={className}>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
