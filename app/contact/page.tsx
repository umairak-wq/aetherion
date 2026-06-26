import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import { founderMailto } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Umair Khan, founder of Aerithion, for partnerships, research, and general enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with Aerithion."
        description="Reach out directly to discuss partnerships, research, or any enquiry."
      />

      <Section>
        <Container className="text-center max-w-2xl mx-auto">
          <Reveal>
            <p className="text-base md:text-lg text-bone-dim leading-relaxed">
              Aerithion is led by Umair Khan. For all enquiries, send an email
              directly.
            </p>
            <div className="mt-10 flex justify-center">
              <Button href={founderMailto} variant="primary">
                Send Email
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
