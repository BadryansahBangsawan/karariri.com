import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/landing/About";
import { CafeFooter } from "@/components/landing/CafeFooter";
import { CafeHero } from "@/components/landing/CafeHero";
import { CafeNav } from "@/components/landing/CafeNav";
import { FindUs } from "@/components/landing/FindUs";
import { Gallery } from "@/components/landing/Gallery";
import { MenuHighlights } from "@/components/landing/MenuHighlights";
import { OurCoffee } from "@/components/landing/OurCoffee";
import { RoomsStrip } from "@/components/landing/RoomsStrip";
import { Space } from "@/components/landing/Space";
import { Testimonials } from "@/components/landing/Testimonials";
import { localBusinessJsonLd } from "@/lib/karariri";

import "@/styles/landing.css";

export const Route = createFileRoute("/")({
  component: HomeComponent,
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd()),
      },
    ],
  }),
});

function HomeComponent() {
  return (
    <div className="karariri">
      <CafeNav />
      <CafeHero />
      <MenuHighlights />
      <RoomsStrip />
      <OurCoffee />
      <About />
      <Gallery />
      <Space />
      <Testimonials />
      <FindUs />
      <CafeFooter />
    </div>
  );
}
