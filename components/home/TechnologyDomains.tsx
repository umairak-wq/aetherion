import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import DomainCard from "@/components/ui/DomainCard";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import { technologyDomains } from "@/lib/content";

export default function TechnologyDomains() {
  return (
    <Section className="hairline-b bg-ink-950/20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Technology Domains"
            title="The frontier disciplines we track and build around."
            description="Aetherion's coverage spans the technical disciplines most likely to define national capability and capital allocation over the next decade."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/10">
          {technologyDomains.map((domain, i) => (
            <Reveal key={domain.code} delay={Math.min(i * 0.04, 0.3)}>
              <DomainCard domain={domain} />
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <Button href="/technology" variant="secondary">
            View All Technology
          </Button>
        </div>
      </Container>
    </Section>
  );
}
