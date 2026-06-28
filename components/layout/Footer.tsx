import Link from "next/link";
import Container from "@/components/ui/Container";
import { founderMailto } from "@/lib/contact";
import { footerNavLinks, legalNavLinks } from "@/lib/navigation";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="hairline-t bg-black">
      <Container className="py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="font-display text-base tracking-widest2 uppercase">
            {SITE_NAME}
          </p>
          <p className="mt-4 label">{SITE_TAGLINE}</p>

          <nav className="mt-10 flex flex-wrap gap-x-3 gap-y-2 text-sm text-bone-dim">
            {footerNavLinks.map((link, i) => (
              <span key={link.href} className="flex items-center gap-3">
                {i > 0 && <span className="text-bone-muted">/</span>}
                <Link
                  href={link.href}
                  className="hover:text-bone transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </nav>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {legalNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-bone-muted hover:text-bone transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={founderMailto}
              className="text-bone-muted hover:text-bone transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          <p className="mt-12 text-xs text-bone-muted">
            &copy; {year} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
