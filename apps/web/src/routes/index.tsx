import { createFileRoute } from "@tanstack/react-router";

import { CafeHero } from "@/components/landing/CafeHero";
import { ProofDatang } from "@/components/landing/ProofDatang";
import { RoomsSajian } from "@/components/landing/RoomsSajian";
import { karariri, localBusinessJsonLd } from "@/lib/karariri";

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
      <CafeHero />
      <RoomsSajian />
      <ProofDatang />
      <footer className="cafe-colophon">
        <p>{karariri.ui.ownerLine}</p>
        <p>{karariri.nameOrigin}</p>
        <p>{karariri.ui.footerSource}</p>
      </footer>
    </div>
  );
}
