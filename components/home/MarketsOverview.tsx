import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import MarketCard from "@/components/ui/MarketCard";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import { markets } from "@/lib/content";

export default function MarketsOverview() {
  return (
    <Section className="hairline-b bg-ink-950/20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Markets"
            title="Who Aetherion serves."
            description="Aetherion works with the institutions allocating capital, setting policy, and building capability at the frontier."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-bone/10">
          {markets.map((market, i) => (
            <Reveal key={market.title} delay={Math.min(i * 0.04, 0.3)}>
              <MarketCard market={market} index={i} />
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <Button href="/markets" variant="secondary">
            View All Markets
          </Button>
        </div>
      </Container>
    </Section>
  );
}
