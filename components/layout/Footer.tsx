import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { founderMailto } from "@/lib/contact";
import { SITE_NAME } from "@/lib/site";

const columns = [
  {
    title: "Navigate",
    links: [
      { href: "/", label: "Home" },
      { href: "/technology", label: "Technology" },
      { href: "/mission", label: "Mission" },
      { href: "/markets", label: "Markets" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="hairline-t bg-black">
      <Container className="py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          <div className="max-w-sm">
            <p className="font-display text-base tracking-widest2 uppercase">
              {SITE_NAME}
            </p>
            <p className="mt-5 text-sm text-bone-muted leading-relaxed">
              {SITE_NAME} maps, analyses, and builds around frontier technologies
              before they become mainstream.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 md:gap-20">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="label mb-5">{col.title}</p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-bone-dim hover:text-bone transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <p className="label mb-5">Contact</p>
              <Button href={founderMailto} variant="secondary">
                Send Email
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 hairline-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-bone-muted">
            &copy; {year} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-bone-muted">
            Frontier science &amp; strategic technology intelligence
          </p>
        </div>
      </Container>
    </footer>
  );
}
