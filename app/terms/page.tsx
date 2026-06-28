import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the Aerithion website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="Terms governing use of the Aerithion website."
      />

      <Section>
        <Container>
          <div className="max-w-2xl space-y-6 text-base text-bone-dim leading-relaxed">
            <p>
              This website is provided for general information about Aerithion
              and its work. Content may change as the company develops.
            </p>
            <p>
              Nothing on this site constitutes investment, legal, or professional
              advice. Aerithion makes no representation that any platform
              capability described here is currently available as a finished
              product.
            </p>
            <p>
              By using this website, you agree to use it lawfully and not to
              attempt to disrupt its operation.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
