import { motion, useReducedMotion } from "motion/react";

import { karariri } from "@/lib/karariri";
import { fadeLeft, stagger, viewportOnce } from "@/lib/motion";

export function RoomsStrip() {
  const reduce = useReducedMotion();

  return (
    <section className="cafe-strip" id="ruang">
      <motion.div
        className="cafe-wrap cafe-strip-grid"
        variants={stagger}
        initial={reduce ? false : "hidden"}
        whileInView="show"
        viewport={viewportOnce}
      >
        {karariri.roomsStrip.map((room) => (
          <motion.div key={room.name} variants={fadeLeft}>
            <h3>{room.name}</h3>
            <p>{room.line}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
