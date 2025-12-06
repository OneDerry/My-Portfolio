"use client";

import type React from "react";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  from?: "left" | "right";
};

export function SlideSection({
  children,
  className,
  id,
  from = "right",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "-10% 0px -10% 0px" });

  const hiddenX = from === "left" ? -100 : 100;

  return (
    <motion.section
      ref={ref}
      className={className}
      id={id}
      initial={{ opacity: 0, x: hiddenX }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: hiddenX }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
