import Link from "next/link";
import clsx from "@/lib/clsx";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
}: Props) {
  const base =
    "group inline-flex items-center gap-3 px-7 py-3.5 text-sm uppercase tracking-widest2 transition-all duration-300";

  const styles = {
    primary: "bg-bone text-black hover:bg-bone/90",
    secondary:
      "border border-bone/25 text-bone hover:border-bone/60 hover:bg-bone/5",
  };

  const classes = clsx(base, styles[variant], className);

  const content = (
    <>
      <span>{children}</span>
      <span
        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden
      >
        &rarr;
      </span>
    </>
  );

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
