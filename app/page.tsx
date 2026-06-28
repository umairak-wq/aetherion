import Hero from "@/components/home/Hero";
import Mission from "@/components/home/Mission";
import FocusAreas from "@/components/home/FocusAreas";
import PlatformInDevelopment from "@/components/home/PlatformInDevelopment";
import FinalCTA from "@/components/home/FinalCTA";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site";

export const metadata = createPageMetadata({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <FocusAreas />
      <PlatformInDevelopment />
      <FinalCTA />
    </>
  );
}
