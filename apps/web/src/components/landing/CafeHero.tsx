import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { hoursLabel, karariri } from "@/lib/karariri";
import { fadeUp, stagger } from "@/lib/motion";

export function CafeHero() {
  const reduce = useReducedMotion();
  const [lamp, setLamp] = useState(() => hoursLabel());

  useEffect(() => {
    setLamp(hoursLabel());
    const id = window.setInterval(() => setLamp(hoursLabel()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="cafe-hero" id="top">
      <div className="cafe-hero-bleed">
        <img
          src={karariri.images.hero}
          alt="Ilustrasi interior kedai kopi hangat, meja kayu dan lampu pagi"
          width={2000}
          height={1333}
          fetchPriority="high"
        />
        <div className="cafe-hero-fade" />
      </div>

      <motion.div
        className="cafe-hero-copy"
        variants={stagger}
        initial={reduce ? false : "hidden"}
        animate="show"
      >
        <motion.p className="cafe-label" variants={fadeUp}>
          {karariri.ui.hero.label}
        </motion.p>
        <motion.h1 variants={fadeUp}>
          {karariri.ui.hero.line1}
          <br />
          {karariri.ui.hero.line2}
          <br />
          <span className="cafe-accent">{karariri.ui.hero.line3}</span>
        </motion.h1>
        <motion.p className="cafe-hero-sub" variants={fadeUp}>
          {karariri.ui.hero.sub}
        </motion.p>
        <motion.p className="cafe-hours" variants={fadeUp}>
          {lamp}
        </motion.p>
        <motion.div className="cafe-hero-actions" variants={fadeUp}>
          <a className="cafe-btn" href="#sajian">
            {karariri.ui.ctaMenu}
          </a>
          <a className="cafe-btn cafe-btn-ghost" href="#datang">
            {karariri.ui.ctaFind}
          </a>
        </motion.div>
        <motion.div className="cafe-hero-chips" variants={fadeUp}>
          {karariri.ui.hero.chips.map((chip) => (
            <span className="cafe-chip" key={chip}>
              {chip}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
