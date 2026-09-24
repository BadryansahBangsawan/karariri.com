import { Star } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { SectionHeading } from "@/components/landing/SectionHeading";
import { karariri } from "@/lib/karariri";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section className="cafe-section" id="ulasan">
      <div className="cafe-wrap">
        <SectionHeading>Kata Tamu</SectionHeading>
        <p className="cafe-label" style={{ marginBottom: "1.25rem" }}>
          {karariri.ui.ratingLine}
        </p>
        <motion.div
          className="cafe-quotes"
          variants={stagger}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={viewportOnce}
        >
          {karariri.reviews.map((review) => (
            <motion.blockquote className="cafe-testimonial" key={review.author} variants={fadeUp}>
              <p>{review.text}</p>
              <footer>
                <cite>
                  {review.author} · {review.visit}
                </cite>
                <div className="cafe-stars" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
