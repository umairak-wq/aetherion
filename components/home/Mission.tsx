import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";

export default function Mission() {
  return (
    <Section className="hairline-b">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="label">Mission</p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={0.05}>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium leading-[1.2] text-balance">
                Aerithion is building an intelligence platform to identify,
                map, and analyse the technologies that move from laboratory to
                mainstream — before the rest of the market sees them.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 text-base md:text-lg text-bone-dim leading-relaxed max-w-2xl">
                Frontier technology rarely arrives announced. It moves through
                research labs, patent filings, and early commercial bets long
                before it reaches public attention. Aerithion is developing the
                infrastructure to track that movement with precision, and to
                give investors, institutions, and governments a clearer view of
                where the frontier is forming.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-10">
                <Button href="/mission" variant="secondary">
                  Read Our Mission
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
