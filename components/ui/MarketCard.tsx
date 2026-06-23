import { Market } from "@/lib/content";

export default function MarketCard({ market, index }: { market: Market; index: number }) {
  return (
    <div className="hairline p-7 md:p-8 flex flex-col justify-between min-h-[200px] bg-ink-950/30">
      <p className="font-mono text-xs text-bone-muted">{String(index + 1).padStart(2, "0")}</p>
      <div>
        <h3 className="font-display text-lg md:text-xl font-medium leading-snug">
          {market.title}
        </h3>
        <p className="mt-3 text-sm text-bone-dim leading-relaxed">{market.description}</p>
      </div>
    </div>
  );
}
