import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Mission from "@/components/home/Mission";
import TechnologyDomains from "@/components/home/TechnologyDomains";
import MarketsOverview from "@/components/home/MarketsOverview";
import StrategicPosition from "@/components/home/StrategicPosition";
import FinalCTA from "@/components/home/FinalCTA";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
};

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
