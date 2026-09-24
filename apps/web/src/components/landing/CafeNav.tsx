import { Coffee, Menu, X } from "lucide-react";
import { useState } from "react";

import { karariri } from "@/lib/karariri";

const LINKS = [
  { href: "#sajian", label: karariri.ui.nav.sajian },
  { href: "#ruang", label: karariri.ui.nav.ruang },
  { href: "#tentang", label: karariri.ui.nav.tentang },
  { href: "#datang", label: karariri.ui.nav.datang },
] as const;

export function CafeNav() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <header className="cafe-nav">
      <div className="cafe-wrap cafe-nav-inner">
        <a className="cafe-brand" href="#top" onClick={close}>
          <span className="cafe-wordmark">{karariri.name}</span>
          <Coffee className="cafe-brand-icon" size={18} strokeWidth={1.75} aria-hidden="true" />
        </a>

        <nav className="cafe-nav-links" aria-label="Bagian halaman">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="cafe-nav-end">
          <a
            className="cafe-btn cafe-nav-cta"
            href={karariri.mapsDirUrl}
            rel="noopener noreferrer"
          >
            {karariri.ui.ctaRouteArrow}
          </a>

          <button
            type="button"
            className="cafe-burger"
            aria-expanded={open}
            aria-controls="cafe-drawer"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        id="cafe-drawer"
        className={open ? "cafe-wrap cafe-drawer is-open" : "cafe-wrap cafe-drawer"}
      >
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
