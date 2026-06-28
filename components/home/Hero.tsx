import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import CinematicField from "@/components/ui/CinematicField";
import { founderMailto } from "@/lib/contact";
import { SITE_HERO_PARAGRAPH, SITE_TAGLINE } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden hairline-b">
      <CinematicField />

      <Container className="relative z-20 pt-32 pb-24">
        <p className="label mb-8 animate-fade-in">
          Building the intelligence platform for emerging technologies.
        </p>

        <h1 className="font-display text-[11vw] leading-[0.96] sm:text-[8vw] md:text-6xl lg:text-7xl font-medium tracking-tight text-balance max-w-5xl animate-fade-up">
          {SITE_TAGLINE}
        </h1>

        <p
          className="mt-8 max-w-xl text-base md:text-lg text-bone-dim leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          {SITE_HERO_PARAGRAPH}
        </p>

        <div
          className="mt-12 flex flex-wrap items-center gap-5 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button href="/coverage" variant="primary">
            Explore Technology
          </Button>
          <Button href={founderMailto} variant="secondary">
            Contact
          </Button>
        </div>
      </Container>

      <div className="absolute bottom-10 left-0 right-0 z-20 hidden md:block">
        <Container className="flex items-center justify-between text-bone-muted">
          <p className="label">Frontier Science Intelligence</p>
          <p className="label">Scroll</p>
        </Container>
      </div>
    </section>
  );
}
