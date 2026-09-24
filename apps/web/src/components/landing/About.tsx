import { SectionHeading } from "@/components/landing/SectionHeading";
import { karariri } from "@/lib/karariri";

export function About() {
  return (
    <section className="cafe-section" id="tentang">
      <div className="cafe-wrap cafe-split cafe-split-flip">
        <div className="cafe-split-copy">
          <SectionHeading>{karariri.ui.aboutTitle}</SectionHeading>
          <p>{karariri.ui.aboutP1}</p>
          <p>{karariri.ui.aboutP2}</p>
          <div className="cafe-chips">
            {karariri.ui.aboutChips.map((chip) => (
              <span className="cafe-chip cafe-chip-amber" key={chip}>
                {chip}
              </span>
            ))}
          </div>
        </div>
        <figure className="cafe-about-shot">
          <img
            src={karariri.images.founder}
            alt="Ilustrasi barista di balik bar, cahaya alami"
            width={1400}
            height={1750}
            loading="lazy"
          />
          <figcaption className="cafe-caption">
            {karariri.ui.ilustrasi} · {karariri.ui.ownerLine}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
