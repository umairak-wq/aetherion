import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/motion/Reveal";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "UAK exists to understand, map, and build around frontier science and strategic technology before it reaches the mainstream.",
};

const pillars = [
  {
    label: "Science",
    detail:
      "The laboratories and research institutions where capability is first conceived — often years before it is recognised outside specialist circles.",
  },
  {
    label: "Industry",
    detail:
      "The engineering organisations translating scientific advance into systems that can be deployed, manufactured, and operated at scale.",
  },
  {
    label: "Capital",
    detail:
      "The institutions allocating resources to frontier sectors where the cost of misjudgement is measured in years of lost position.",
  },
  {
    label: "Nation-Scale Technology",
    detail:
      "The governments and defence establishments for whom technological capability is strategic — not merely commercial.",
  },
];

export default function MissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Mission"
        title="Intelligence for the technologies that will shape the next century."
        description="UAK exists because the technologies that will define the next century are already in motion — and most of the world is not yet watching."
      />

      <Section className="hairline-b">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="label">Why We Exist</p>
              </Reveal>
            </div>
            <div className="lg:col-span-8 space-y-6 max-w-2xl">
              <Reveal>
                <p className="text-lg md:text-xl text-bone leading-relaxed text-balance">
                  The most consequential technologies of the coming decades are
                  being developed today — inside research programmes, classified
                  engineering efforts, and institutions that operate far from
                  public attention.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="text-base text-bone-dim leading-relaxed">
                  Between the moment a technology is invented and the moment it
                  is widely understood lies a gap measured in years. Capital is
                  committed, policy is written, and national capability is
                  shaped within that gap — often on incomplete information.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="text-base text-bone-dim leading-relaxed">
                  UAK was established to operate inside that gap. Not to
                  report what has already happened, but to map what is forming
                  — with the rigour required by the decisions it informs.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="hairline-b bg-ink-950/20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="label">Conviction</p>
              </Reveal>
            </div>
            <div className="lg:col-span-8 max-w-2xl">
              <Reveal>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium leading-[1.15] text-balance">
                  Frontier technologies must be understood before they become
                  mainstream.
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-8 text-base md:text-lg text-bone-dim leading-relaxed">
                  By the time a technology reaches consensus, the window for
                  strategic action has largely closed. The investors who
                  positioned early, the institutions that prepared in advance,
                  and the governments that understood the implications — they
                  did not wait for clarity. They built it.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-6 text-base text-bone-dim leading-relaxed">
                  We hold that understanding must precede adoption. That the
                  institutions responsible for capital, policy, and capability
                  deserve intelligence commensurate with the weight of what they
                  decide — not summaries, not sentiment, but structured
                  knowledge of where a technology stands and where it is
                  heading.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="hairline-b">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="label">What We Do</p>
              </Reveal>
            </div>
            <div className="lg:col-span-8 max-w-2xl">
              <Reveal>
                <p className="text-lg md:text-xl text-bone leading-relaxed text-balance">
                  UAK maps, analyses, and builds around frontier science
                  and strategic technology.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-8 text-base text-bone-dim leading-relaxed">
                  We track the disciplines most likely to determine national
                  capability and industrial position over the coming decades —
                  from quantum systems and photonics to advanced energy,
                  aerospace, and defence technology.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-6 text-base text-bone-dim leading-relaxed">
                  Our work spans the full arc of a technology&apos;s development:
                  the research that originates it, the institutions that
                  commercialise it, the capital that funds it, and the strategic
                  context in which it carries weight. We do not observe from a
                  distance. We map the landscape, analyse its structure, and
                  build the intelligence infrastructure required to act on it.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="hairline-b bg-ink-950/20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="label">Our Position</p>
                <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-[44px] font-medium leading-[1.1] text-balance">
                  At the intersection of science, industry, capital, and
                  national-scale technology.
                </h2>
                <p className="mt-6 text-base text-bone-dim leading-relaxed max-w-md">
                  Few organisations are built to operate across all four. This
                  intersection is not incidental to our work — it is the
                  condition under which frontier technology is actually decided.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7 lg:pl-8">
              <div className="space-y-0">
                {pillars.map((pillar, i) => (
                  <Reveal key={pillar.label} delay={i * 0.06}>
                    <div className="hairline-t py-7 grid grid-cols-1 sm:grid-cols-4 gap-4">
                      <p className="font-display text-lg font-medium sm:col-span-1">
                        {pillar.label}
                      </p>
                      <p className="text-sm md:text-base text-bone-dim leading-relaxed sm:col-span-3">
                        {pillar.detail}
                      </p>
                    </div>
                  </Reveal>
                ))}
                <div className="hairline-t" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
