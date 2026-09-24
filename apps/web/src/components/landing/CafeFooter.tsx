import { karariri } from "@/lib/karariri";

export function CafeFooter() {
  return (
    <footer className="cafe-footer">
      <div className="cafe-wrap">
        <p className="cafe-footer-mark">{karariri.ui.footerMark}</p>
        <p>
          © 2026 {karariri.legalName} · {karariri.plusCode}, {karariri.addressLine}
        </p>
        <p>{karariri.ui.ownerLine}</p>
        <p>{karariri.ui.footerSource}</p>
      </div>
    </footer>
  );
}
