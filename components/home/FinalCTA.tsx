import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import { founderMailto } from "@/lib/contact";

export default function FinalCTA() {
  return (
    <section className="relative py-28 md:py-40 bg-black overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(244,243,239,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(244,243,239,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 60% 70% at 50% 50%, black 0%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 70% at 50% 50%, black 0%, transparent 80%)",
        }}
      />

      <Container className="relative z-10 text-center">
        <Reveal>
          <p className="label">Get In Touch</p>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.05] text-balance">
            Partner with Aetherion
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-base md:text-lg text-bone-dim leading-relaxed">
            For strategic partnerships, investor discussions, research
            enquiries, and institutional collaboration.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href={founderMailto} variant="primary">
              Contact
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
