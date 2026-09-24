import { SectionHeading } from "@/components/landing/SectionHeading";
import { karariri } from "@/lib/karariri";

export function Space() {
  return (
    <section className="cafe-section cafe-space">
      <div className="cafe-wrap cafe-space-inner">
        <SectionHeading center>{karariri.ui.spaceTitle}</SectionHeading>
        <p>{karariri.ui.spaceBody}</p>
        <div className="cafe-chips">
          {karariri.ui.spaceChips.map((chip) => (
            <span className="cafe-chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>
        <a className="cafe-btn" href={karariri.mapsDirUrl} rel="noopener noreferrer">
          {karariri.ui.ctaRouteArrow}
        </a>
      </div>
    </section>
  );
}
