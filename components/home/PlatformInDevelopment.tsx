import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import { platformPillars } from "@/lib/content";

export default function PlatformInDevelopment() {
  return (
    <Section className="hairline-b">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="label">Platform</p>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-[44px] font-medium leading-[1.1] text-balance">
                An intelligence platform in development
              </h2>
              <p className="mt-6 text-base md:text-lg text-bone-dim leading-relaxed max-w-md">
                Aerithion is developing infrastructure to map frontier
                technologies from laboratory research to commercial adoption,
                helping investors, institutions, and strategic teams understand
                where the future is forming.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-0">
              {platformPillars.map((pillar, i) => (
                <Reveal key={pillar.title} delay={i * 0.06}>
                  <div className="hairline-t py-8 md:py-9">
                    <h3 className="font-display text-xl md:text-2xl font-medium">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-bone-dim leading-relaxed max-w-xl">
                      {pillar.description}
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
