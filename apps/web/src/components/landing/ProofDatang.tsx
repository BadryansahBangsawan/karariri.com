import { useState } from "react";

import { karariri } from "@/lib/karariri";

const DAYS = [
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
  "Minggu",
] as const;

export function ProofDatang() {
  const [copied, setCopied] = useState(false);

  function copyPlusCode() {
    void navigator.clipboard.writeText(karariri.plusCode).then(
      () => setCopied(true),
      () => setCopied(false),
    );
  }

  return (
    <>
      <section className="cafe-section" id="ulasan">
        <h2>{karariri.ui.nav.ulasan}</h2>
        <p className="cafe-rating">{karariri.ui.ratingLine}</p>
        {karariri.reviews.map((review) => (
          <blockquote className="cafe-quote" key={review.author}>
            <p>{review.text}</p>
            <footer>{review.author}</footer>
          </blockquote>
        ))}
      </section>

      <section className="cafe-section" id="datang">
        <h2>{karariri.ui.nav.datang}</h2>
        <div className="cafe-visit">
          <address>{karariri.addressLine}</address>
          <button
            type="button"
            className="cafe-plus"
            onClick={copyPlusCode}
            aria-label={karariri.ui.copyPlus}
          >
            {karariri.plusCode}
          </button>
          <button type="button" className="cafe-copy" onClick={copyPlusCode}>
            {copied ? karariri.ui.copiedPlus : karariri.ui.copyPlus}
          </button>
          <p className="cafe-live" aria-live="polite" role="status">
            {copied ? karariri.ui.copiedPlus : ""}
          </p>
          <p>{karariri.ui.nearPemkab}</p>
          <table className="cafe-hours-table">
            <tbody>
              {DAYS.map((day) => (
                <tr key={day}>
                  <th scope="row">{day}</th>
                  <td>{karariri.hoursDisplay}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <a
            className="cafe-cta cafe-cta-lg"
            href={karariri.mapsDirUrl}
            rel="noopener noreferrer"
          >
            {karariri.ui.ctaRoute}
          </a>
          <a
            className="cafe-photos"
            href={karariri.mapsPlaceUrl}
            rel="noopener noreferrer"
          >
            {karariri.ui.photos}
          </a>
        </div>
      </section>
    </>
  );
}
