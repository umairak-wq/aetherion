import { HTMLAttributes } from "react";
import clsx from "@/lib/clsx";

export default function Section({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <section className={clsx("relative py-24 md:py-32", className)} {...props}>
      {children}
    </section>
  );
}
