import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import CinematicField from "@/components/ui/CinematicField";
import { founderMailto } from "@/lib/contact";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden hairline-b">
      <CinematicField />

      <Container className="relative z-20 pt-32 pb-24">
        <p className="label mb-8 animate-fade-in">
          Frontier Science &amp; Strategic Technology
        </p>

        <h1 className="font-display text-[13vw] leading-[0.96] sm:text-[10vw] md:text-7xl lg:text-8xl font-medium tracking-tight text-balance max-w-5xl animate-fade-up">
          Engineering<br />the Frontier
        </h1>

        <p className="mt-8 max-w-xl text-base md:text-lg text-bone-dim leading-relaxed animate-fade-up" style={{ animationDelay: "0.15s" }}>
          Aetherion develops intelligence and technology infrastructure for the
          next era of science, energy, aerospace, defence, and advanced computing.
        </p>

        <div
          className="mt-12 flex flex-wrap items-center gap-5 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button href="/technology" variant="primary">
            Explore Technology
          </Button>
          <Button href={founderMailto} variant="secondary">
            Contact
          </Button>
        </div>
      </Container>

      <div className="absolute bottom-10 left-0 right-0 z-20 hidden md:block">
        <Container className="flex items-center justify-between text-bone-muted">
          <p className="label">Est. Frontier Intelligence</p>
          <p className="label">Scroll</p>
        </Container>
      </div>
    </section>
  );
}
