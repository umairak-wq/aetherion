import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/motion/Reveal";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "UAK exists to understand, map, and build the technologies that will define the next century, focused on frontier science, strategic technology, and deep-tech intelligence.",
};

const principles = [
  {
    number: "01",
    title: "Evidence",
    detail: "Every claim is sourced, structured, and defensible.",
  },
  {
    number: "02",
    title: "Objectivity",
    detail: "Judgement without exposure, bias, or position.",
  },
  {
    number: "03",
    title: "Confidentiality",
    detail: "Private intelligence for institutions operating ahead of consensus.",
  },
  {
    number: "04",
    title: "Long-Term Thinking",
    detail: "Built to track technologies over years — not news cycles.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="UAK exists to understand, map, and build the technologies that will define the next century."
        description="It is focused on frontier science, strategic technology, and deep-tech intelligence."
      />

      <Section className="hairline-b">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="label">Position</p>
              </Reveal>
            </div>
            <div className="lg:col-span-8 space-y-6 max-w-2xl">
              <Reveal>
                <p className="text-lg md:text-xl text-bone leading-relaxed text-balance">
                  The technologies that will matter most in twenty years are
                  already being built today, inside laboratories, defence
                  programmes, and engineering teams that operate far from
                  public attention.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="text-base text-bone-dim leading-relaxed">
                  UAK was built on the premise that this gap — between
                  where a technology is invented and where it is understood —
                  is where the most consequential decisions get made. Capital
                  is allocated, policy is set, and capability is built during
                  that gap, often with incomplete information.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="text-base text-bone-dim leading-relaxed">
                  UAK closes it. The firm operates across frontier
                  science, strategic technology, and deep-tech intelligence,
                  serving the investors, institutions, and governments who
                  need to understand a technology&apos;s trajectory before it
                  becomes obvious to everyone else.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="hairline-b bg-ink-950/20">
        <Container>
          <p className="label mb-14 md:mb-16">How We Operate</p>
          <div>
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="principle-row hairline-t py-12 md:py-16"
              >
                <p className="font-mono text-[11px] tracking-widest text-bone-muted/70 mb-5 md:mb-6">
                  {principle.number}
                </p>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-bone">
                  {principle.title}
                </h3>
                <p className="mt-4 md:mt-5 text-base md:text-lg text-bone-muted leading-relaxed max-w-xl">
                  {principle.detail}
                </p>
              </div>
            ))}
            <div className="hairline-t" />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="label">Scope</p>
              </Reveal>
            </div>
            <div className="lg:col-span-8 max-w-2xl">
              <Reveal>
                <p className="text-base md:text-lg text-bone-dim leading-relaxed">
                  UAK&apos;s work spans the full chain from discovery to
                  deployment: the laboratories where a technology originates,
                  the companies that commercialise it, the capital that funds
                  it, and the governments for whom it carries strategic
                  weight. Few organisations are built to operate across all
                  four. UAK is.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
