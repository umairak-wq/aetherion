import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import MarketCard from "@/components/ui/MarketCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import FinalCTA from "@/components/home/FinalCTA";
import { markets, markets24 } from "@/lib/content";

export const metadata: Metadata = {
  title: "Markets",
  description:
    "Aerithion serves investors, defence and government, aerospace and space, energy and infrastructure, research institutions, deep-tech founders, corporate innovation teams, and private equity and venture capital.",
};

export default function MarketsPage() {
  return (
    <>
      <PageHero
        eyebrow="Markets"
        title="Built for the institutions operating at the frontier."
        description="Aerithion serves the organisations whose decisions shape which frontier technologies reach scale — and which do not."
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-bone/10">
            {markets.map((market, i) => (
              <Reveal key={market.title} delay={Math.min(i * 0.04, 0.3)}>
                <MarketCard market={market} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="hairline-t bg-ink-950/20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Coverage"
              title="The sectors and intelligence categories within our remit."
              description="Aerithion's coverage extends across the full landscape of frontier science and strategic technology."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-wrap gap-3">
              {markets24.map((item) => (
                <span
                  key={item}
                  className="hairline px-4 py-2 text-sm text-bone-dim"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
