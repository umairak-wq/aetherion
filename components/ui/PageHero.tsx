import Container from "@/components/ui/Container";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative pt-44 pb-20 md:pt-52 md:pb-28 hairline-b overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(244,243,239,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(244,243,239,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black 0%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black 0%, transparent 75%)",
        }}
      />
      <Container className="relative z-10">
        <p className="label mb-7 animate-fade-in">{eyebrow}</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.04] text-balance max-w-4xl animate-fade-up">
          {title}
        </h1>
        <p
          className="mt-7 max-w-2xl text-base md:text-lg text-bone-dim leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.12s" }}
        >
          {description}
        </p>
      </Container>
    </section>
  );
}
