import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import { founderMailto } from "@/lib/contact";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Umair Khan, founder of Aerithion, for partnerships, research, and general enquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Begin the conversation."
        description="For early conversations, partnerships, and research enquiries."
      />

      <Section>
        <Container className="text-center max-w-2xl mx-auto">
          <Reveal>
            <p className="text-base md:text-lg text-bone-dim leading-relaxed">
              Aerithion is at an early stage. Umair Khan welcomes direct
              conversations about the platform, research focus, and potential
              partnerships.
            </p>
            <div className="mt-10 flex justify-center">
              <Button href={founderMailto} variant="primary">
                Contact
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
