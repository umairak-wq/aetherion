import { Domain } from "@/lib/content";

export default function DomainCard({ domain }: { domain: Domain }) {
  return (
    <div className="group relative hairline p-7 md:p-8 bg-ink-950/40 hover:bg-ink-900/60 transition-colors duration-300">
      <p className="font-mono text-xs text-bone-muted">{domain.code}</p>
      <h3 className="mt-6 font-display text-lg md:text-xl font-medium leading-snug">
        {domain.title}
      </h3>
      <p className="mt-4 text-sm text-bone-dim leading-relaxed">
        {domain.description}
      </p>
      <div className="absolute bottom-0 left-0 h-px w-0 bg-bone/50 transition-all duration-500 group-hover:w-full" />
    </div>
  );
}
