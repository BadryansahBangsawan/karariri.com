import { SectionHeading } from "@/components/landing/SectionHeading";
import { karariri } from "@/lib/karariri";

export function OurCoffee() {
  return (
    <section className="cafe-section" id="kopi">
      <div className="cafe-wrap cafe-split">
        <div className="cafe-split-copy">
          <SectionHeading>{karariri.ui.coffeeTitle}</SectionHeading>
          <p className="cafe-quote">{karariri.ui.coffeeQuote}</p>
          <p>{karariri.ui.coffeeP1}</p>
          <p>{karariri.ui.coffeeP2}</p>
          <div className="cafe-chips">
            {karariri.ui.coffeeChips.map((chip) => (
              <span className="cafe-chip cafe-chip-amber" key={chip}>
                {chip}
              </span>
            ))}
          </div>
          <a className="cafe-btn cafe-btn-outline" href="#sajian">
            Lihat sajian →
          </a>
        </div>
        <div className="cafe-stack">
          <figure className="cafe-stack-a">
            <img
              src={karariri.images.beans}
              alt="Ilustrasi biji kopi dituang dari karung goni"
              width={1200}
              height={800}
              loading="lazy"
            />
          </figure>
          <figure className="cafe-stack-b">
            <img
              src={karariri.images.cup}
              alt="Ilustrasi seduhan kopi di cangkir keramik"
              width={1200}
              height={800}
              loading="lazy"
            />
          </figure>
          <p className="cafe-caption">{karariri.ui.ilustrasi}</p>
        </div>
      </div>
    </section>
  );
}
