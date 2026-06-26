import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";

const pillars = [
  {
    label: "Science",
    detail: "Research institutions, laboratories, and the scientists translating discovery into capability.",
  },
  {
    label: "Industry",
    detail: "The companies and engineering teams converting frontier science into deployable systems.",
  },
  {
    label: "Capital",
    detail: "The investors and financiers determining which frontier technologies reach scale.",
  },
  {
    label: "Nation-Scale Technology",
    detail: "The governments and defence institutions for whom technological capability is strategic, not commercial.",
  },
];

export default function StrategicPosition() {
  return (
    <Section className="hairline-b">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="label">Strategic Position</p>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-[44px] font-medium leading-[1.1] text-balance">
                Aerithion sits at the intersection of science, industry,
                capital, and national-scale technology.
              </h2>
              <p className="mt-6 text-base text-bone-dim leading-relaxed max-w-md">
                This position is deliberate. Frontier technology decisions are
                rarely made by one party alone — they require fluency across
                all four.
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
  );
}
