import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { viewportOnce } from "@/lib/motion";

type Props = {
  children: ReactNode;
  center?: boolean;
};

export function SectionHeading({ children, center }: Props) {
  const reduce = useReducedMotion();

  return (
    <h2 className={center ? "cafe-heading cafe-heading-center" : "cafe-heading"}>
      {children}
      <motion.span
        className="cafe-rule"
        aria-hidden="true"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />
    </h2>
  );
}
