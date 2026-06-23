import { HTMLAttributes } from "react";
import clsx from "@/lib/clsx";

export default function Container({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx("mx-auto w-full max-w-content px-6 md:px-10 lg:px-16", className)}
      {...props}
    >
      {children}
    </div>
  );
}
