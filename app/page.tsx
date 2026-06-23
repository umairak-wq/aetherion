import Hero from "@/components/home/Hero";
import Mission from "@/components/home/Mission";
import TechnologyDomains from "@/components/home/TechnologyDomains";
import MarketsOverview from "@/components/home/MarketsOverview";
import StrategicPosition from "@/components/home/StrategicPosition";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <TechnologyDomains />
      <MarketsOverview />
      <StrategicPosition />
      <FinalCTA />
    </>
  );
}
