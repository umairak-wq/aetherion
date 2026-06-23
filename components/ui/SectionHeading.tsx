import clsx from "@/lib/clsx";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="label mb-5">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.08] text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-bone-dim leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
