import { useEffect, useState } from "react";

import { hoursLabel, karariri } from "@/lib/karariri";

export function FindUs() {
  const [copied, setCopied] = useState(false);
  const [lamp, setLamp] = useState(() => hoursLabel());

  useEffect(() => {
    setLamp(hoursLabel());
    const id = window.setInterval(() => setLamp(hoursLabel()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  function copyPlusCode() {
    void navigator.clipboard.writeText(karariri.plusCode).then(
      () => setCopied(true),
      () => setCopied(false),
    );
  }

  return (
    <section className="cafe-find" id="datang">
      <div className="cafe-wrap">
        <h2>{karariri.ui.findTitle}</h2>
        <p>
          {karariri.hoursLine}
          <br />
          {lamp}
        </p>
        <p>
          <button type="button" className="cafe-plus" onClick={copyPlusCode} aria-label={karariri.ui.copyPlus}>
            {copied ? karariri.ui.copiedPlus : karariri.plusCode}
          </button>
          {" · "}
          {karariri.ui.nearPemkab}
        </p>
        <p className="cafe-live" aria-live="polite" role="status">
          {copied ? karariri.ui.copiedPlus : ""}
        </p>
        <div className="cafe-find-actions">
          <a className="cafe-btn cafe-btn-cream" href={karariri.mapsDirUrl} rel="noopener noreferrer">
            {karariri.ui.ctaRouteArrow}
          </a>
          <a className="cafe-btn cafe-btn-on-dark" href={karariri.mapsPlaceUrl} rel="noopener noreferrer">
            {karariri.ui.photos}
          </a>
        </div>
      </div>
    </section>
  );
}
