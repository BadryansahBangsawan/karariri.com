import { createFileRoute } from "@tanstack/react-router";

import { ProofDatang } from "@/components/landing/ProofDatang";
import { RoomsSajian } from "@/components/landing/RoomsSajian";
import { WayfindingPlate } from "@/components/landing/WayfindingPlate";
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
      <WayfindingPlate />
      <RoomsSajian />
      <ProofDatang />
      <footer className="kr-plate kr-colophon">
        <p>{karariri.ui.ownerLine}</p>
        <p>{karariri.nameOrigin}</p>
        <p>{karariri.ui.footerSource}</p>
      </footer>
    </div>
  );
}
