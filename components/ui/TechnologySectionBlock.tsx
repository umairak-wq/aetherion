import { TechnologySection } from "@/lib/content";
import Reveal from "@/components/motion/Reveal";

export default function TechnologySectionBlock({
  section,
}: {
  section: TechnologySection;
}) {
  return (
    <div id={section.id} className="hairline-t py-14 md:py-16 scroll-mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="font-mono text-sm text-bone-muted">{section.index}</p>
            <h2 className="mt-4 font-display text-2xl md:text-[28px] font-medium leading-tight text-balance">
              {section.title}
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal delay={0.08}>
            <p className="text-base md:text-lg text-bone-dim leading-relaxed max-w-2xl">
              {section.intro}
            </p>
            <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {section.points.map((point) => (
                <li
                  key={point}
                  className="text-sm md:text-[15px] text-bone-dim leading-relaxed pl-5 relative before:absolute before:left-0 before:top-[0.6em] before:h-px before:w-3 before:bg-bone/40"
                >
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
