import { Hero } from "@/components/sections/hero";
import { Benefits } from "@/components/sections/benefits";
import { MenuPreview } from "@/components/sections/menu-preview";
import { About } from "@/components/sections/about";
import { Location } from "@/components/sections/location";
import { Freshness } from "@/components/sections/testimonials";
import { CtaFinal } from "@/components/sections/cta-final";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <MenuPreview />
      <About />
      <Location />
      <Freshness />
      <CtaFinal />
    </>
  );
}
