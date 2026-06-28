import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import { focusAreas } from "@/lib/content";

export default function FocusAreas() {
  return (
    <Section className="hairline-b bg-ink-950/20">
      <Container>
        <Reveal>
          <p className="label mb-12 md:mb-16">Focus Areas</p>
        </Reveal>

        <div>
          {focusAreas.map((area, i) => (
            <Reveal key={area} delay={Math.min(i * 0.03, 0.15)}>
              <div className="hairline-t py-5 md:py-6 flex items-baseline justify-between gap-6">
                <p className="font-display text-lg md:text-xl font-medium text-bone">
                  {area}
                </p>
                <p className="font-mono text-[11px] text-bone-muted hidden sm:block">
                  {String(i + 1).padStart(2, "0")}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="hairline-t" />
        </div>
      </Container>
    </Section>
  );
}
