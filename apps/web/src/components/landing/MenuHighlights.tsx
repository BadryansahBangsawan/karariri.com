import { motion, useReducedMotion } from "motion/react";

import { SectionHeading } from "@/components/landing/SectionHeading";
import { karariri } from "@/lib/karariri";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function MenuHighlights() {
  const reduce = useReducedMotion();

  return (
    <section className="cafe-section" id="sajian">
      <div className="cafe-wrap">
        <SectionHeading>{karariri.ui.menuTitle}</SectionHeading>
        <motion.div
          className="cafe-menu-grid"
          variants={stagger}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={viewportOnce}
        >
          {karariri.menu.map((item) => (
            <motion.article className="cafe-card" key={item.name} variants={fadeUp}>
              <div className="cafe-card-shot">
                <img src={item.image} alt={`Ilustrasi: ${item.name}`} width={1200} height={900} loading="lazy" />
              </div>
              <div className="cafe-card-body">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="cafe-tag">{item.tag}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
        <p className="cafe-caption">{karariri.ui.ilustrasi} · {karariri.offerRange}</p>
      </div>
    </section>
  );
}
