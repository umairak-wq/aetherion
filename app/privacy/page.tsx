import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import { FOUNDER_EMAIL, founderMailto } from "@/lib/contact";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Aerithion.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Aerithion handles information submitted through this website."
      />

      <Section>
        <Container>
          <div className="max-w-2xl space-y-6 text-base text-bone-dim leading-relaxed">
            <p>
              Aerithion collects only the information you choose to provide when
              contacting us, such as your name, email address, organisation, and
              message content.
            </p>
            <p>
              This information is used solely to respond to enquiries and manage
              early conversations. We do not sell personal data.
            </p>
            <p>
              If you have questions about this policy, contact us at{" "}
              <a
                href={founderMailto}
                className="text-bone hover:text-bone-dim transition-colors"
              >
                {FOUNDER_EMAIL}
              </a>
              .
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
