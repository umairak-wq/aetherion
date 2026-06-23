export default function CinematicField() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_70%,#000_100%)] z-10" />

      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(244,243,239,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(244,243,239,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 35%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 35%, black 0%, transparent 75%)",
        }}
      />

      <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 h-[640px] w-[640px] md:h-[860px] md:w-[860px]">
        <div className="absolute inset-0 rounded-full border border-bone/10" />
        <div className="absolute inset-[12%] rounded-full border border-bone/[0.07]" />
        <div className="absolute inset-[24%] rounded-full border border-bone/[0.05]" />
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(244,243,239,0.08),transparent_60%)] animate-pulse-slow" />
      </div>

      <div className="absolute inset-0 grain-overlay" />
    </div>
  );
}
