import { useCallback, useEffect, useState } from "react";

import { hoursLabel, karariri } from "@/lib/karariri";

function Bolt() {
  return (
    <span className="kr-bolt" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="100%" height="100%" focusable="false">
        <circle cx="12" cy="12" r="11" fill="var(--kr-steel)" />
        <circle cx="12" cy="12" r="7" fill="var(--kr-cream)" />
        <circle cx="12" cy="12" r="2.4" fill="var(--kr-green)" />
      </svg>
    </span>
  );
}

export function WayfindingPlate() {
  const [lamp, setLamp] = useState(() => hoursLabel());
  const [live, setLive] = useState("");
  const [clack, setClack] = useState(false);

  useEffect(() => {
    setLamp(hoursLabel());
    const id = window.setInterval(() => setLamp(hoursLabel()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (!clack) return;
    const id = window.setTimeout(() => setClack(false), 700);
    return () => window.clearTimeout(id);
  }, [clack]);

  const copyPlus = useCallback(async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(karariri.plusCode);
      ok = true;
    } catch {
      const el = document.createElement("textarea");
      el.value = karariri.plusCode;
      el.setAttribute("readonly", "");
      el.style.position = "fixed";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      ok = document.execCommand("copy");
      document.body.removeChild(el);
    }
    if (!ok) return;
    setLive("");
    requestAnimationFrame(() => setLive(karariri.ui.copiedPlus));
    setClack(true);
  }, []);

  return (
    <div className={clack ? "kr-plate kr-hero is-clack" : "kr-plate kr-hero"}>
      <Bolt />
      <Bolt />
      <Bolt />
      <Bolt />

      <h1 className="kr-plus">
        <button type="button" onClick={copyPlus} aria-label={karariri.ui.copyPlus}>
          {karariri.plusCode}
        </button>
      </h1>

      <p>{karariri.name}</p>
      <p>{karariri.ui.hook}</p>
      <p className="kr-lamp">{lamp}</p>

      <a
        className="kr-chevron"
        href={karariri.mapsDirUrl}
        rel="noopener noreferrer"
      >
        {karariri.ui.ctaRoute}
      </a>

      <nav className="kr-nav">
        <a href="#ruang">{karariri.ui.nav.ruang}</a>
        <a href="#sajian">{karariri.ui.nav.sajian}</a>
        <a href="#ulasan">{karariri.ui.nav.ulasan}</a>
        <a href="#datang">{karariri.ui.nav.datang}</a>
      </nav>

      <span className="kr-live" aria-live="polite" aria-atomic="true">
        {live}
      </span>
    </div>
  );
}
