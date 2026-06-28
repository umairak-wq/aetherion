import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/motion/Reveal";
import FinalCTA from "@/components/home/FinalCTA";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Research",
  description:
    "How Aerithion is building research monitoring for frontier science and emerging technologies.",
  path: "/research",
});

const principles = [
  {
    title: "Primary sources first",
    detail:
      "The platform is being built around scientific literature, institutional research, patents, and other primary signals — not headlines or recycled commentary.",
  },
  {
    title: "Structured, not noisy",
    detail:
      "Research monitoring should reduce complexity, not add to it. Aerithion is designing workflows that turn scattered research activity into a clearer picture of what is forming.",
  },
  {
    title: "Early by design",
    detail:
      "The goal is to surface meaningful movement in frontier science before it becomes obvious to the wider market.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Building research monitoring for the frontier."
        description="Aerithion is developing the research layer of its intelligence platform — designed to help track scientific progress, institutions, and early signals across emerging technologies."
      />

      <Section className="hairline-b">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="label">Approach</p>
              </Reveal>
            </div>
            <div className="lg:col-span-8 max-w-2xl space-y-6">
              <Reveal>
                <p className="text-lg md:text-xl text-bone leading-relaxed">
                  Frontier science does not announce itself. It accumulates
                  across papers, labs, funding decisions, and early commercial
                  bets long before it reaches wider attention.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="text-base text-bone-dim leading-relaxed">
                  Aerithion is building research monitoring to make that
                  movement easier to follow — with an emphasis on rigour,
                  structure, and relevance to strategic decision-making.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="hairline-b bg-ink-950/20">
        <Container>
          <Reveal>
            <p className="label mb-12">Principles</p>
          </Reveal>
          <div>
            {principles.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="hairline-t py-8 md:py-9">
                  <h2 className="font-display text-xl md:text-2xl font-medium">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-bone-dim leading-relaxed max-w-2xl">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
            <div className="hairline-t" />
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
