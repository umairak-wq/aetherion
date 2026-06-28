import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/motion/Reveal";
import FinalCTA from "@/components/home/FinalCTA";
import { focusAreas } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Coverage",
  description:
    "The frontier technology areas Aerithion is building intelligence coverage around.",
  path: "/coverage",
});

export default function CoveragePage() {
  return (
    <>
      <PageHero
        eyebrow="Coverage"
        title="The frontier areas we are building toward."
        description="Aerithion is developing coverage across the technical domains most likely to shape science, industry, capital, and national capability over the coming decades."
      />

      <Section className="hairline-b">
        <Container>
          <Reveal>
            <p className="label mb-12 md:mb-16">Focus Areas</p>
          </Reveal>
          <div>
            {focusAreas.map((area, i) => (
              <Reveal key={area} delay={Math.min(i * 0.03, 0.15)}>
                <div className="hairline-t py-6 md:py-7 grid grid-cols-1 sm:grid-cols-12 gap-3 items-baseline">
                  <p className="font-mono text-xs text-bone-muted sm:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div className="sm:col-span-11">
                    <h2 className="font-display text-xl md:text-2xl font-medium">
                      {area}
                    </h2>
                    <p className="mt-2 text-sm md:text-base text-bone-dim leading-relaxed max-w-2xl">
                      Coverage in development across research activity,
                      institutions, and early commercial signals within this
                      domain.
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="hairline-t" />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <p className="label">Note</p>
              <p className="mt-5 text-base md:text-lg text-bone-dim leading-relaxed">
                Aerithion is at an early stage. Coverage is being built
                deliberately — with an emphasis on depth and accuracy rather
                than breadth for its own sake.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
