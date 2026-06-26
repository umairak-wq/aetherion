import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import TechnologySectionBlock from "@/components/ui/TechnologySectionBlock";
import FinalCTA from "@/components/home/FinalCTA";
import { technologySections } from "@/lib/content";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Aerithion's technology coverage spans photonics, quantum systems, advanced computing, aerospace, defence, energy, robotics, and advanced materials.",
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="The disciplines defining the next century of capability."
        description="Aerithion tracks and builds around the technical domains most likely to determine national capability, industrial advantage, and capital allocation over the coming decades."
      />

      <Section>
        <Container>
          <div className="space-y-0">
            {technologySections.map((section) => (
              <TechnologySectionBlock key={section.id} section={section} />
            ))}
            <div className="hairline-t" />
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
