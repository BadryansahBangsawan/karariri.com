import { useEffect, useState } from "react";

import { hoursLabel, karariri } from "@/lib/karariri";

export function CafeHero() {
  const [lamp, setLamp] = useState(() => hoursLabel());

  useEffect(() => {
    setLamp(hoursLabel());
    const id = window.setInterval(() => setLamp(hoursLabel()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <header>
      <div className="cafe-bar">
        <p className="cafe-wordmark">{karariri.name}</p>
        <a
          className="cafe-cta"
          href={karariri.mapsDirUrl}
          rel="noopener noreferrer"
        >
          {karariri.ui.ctaRoute}
        </a>
      </div>

      <div className="cafe-hero">
        <div>
          <h1>{karariri.ui.hook}</h1>
          <p className="cafe-hours">{lamp}</p>
          <a
            className="cafe-cta cafe-cta-lg"
            href={karariri.mapsDirUrl}
            rel="noopener noreferrer"
          >
            {karariri.ui.ctaRoute}
          </a>
        </div>

        <figure className="cafe-shot">
          <svg
            className="cafe-shot-art"
            viewBox="0 0 320 180"
            aria-hidden="true"
            focusable="false"
          >
            <rect width="320" height="180" fill="#1E4A38" />
            <ellipse cx="160" cy="118" rx="54" ry="10" fill="#F3EDE1" opacity="0.18" />
            <path
              d="M118 58h84a8 8 0 0 1 8 8v44c0 22-20 40-50 40s-50-18-50-40V66a8 8 0 0 1 8-8z"
              fill="#F3EDE1"
            />
            <path
              d="M210 78h18c12 0 22 10 22 22s-10 22-22 22h-10"
              fill="none"
              stroke="#F3EDE1"
              strokeWidth="6"
            />
            <rect x="142" y="44" width="36" height="16" rx="4" fill="#F3EDE1" />
          </svg>
          <figcaption>Ilustrasi</figcaption>
        </figure>
      </div>

      <nav className="cafe-nav">
        <a href="#ruang">{karariri.ui.nav.ruang}</a>
        <a href="#sajian">{karariri.ui.nav.sajian}</a>
        <a href="#ulasan">{karariri.ui.nav.ulasan}</a>
        <a href="#datang">{karariri.ui.nav.datang}</a>
      </nav>
    </header>
  );
}
