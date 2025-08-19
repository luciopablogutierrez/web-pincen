"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorMagnetico() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40 });
  const springY = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [x, y]);

  useEffect(() => {
    const handleMagnet = (e: MouseEvent) => {
      const targets = document.querySelectorAll(".magnetic-target");
      let snapped = false;
      targets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        const dist = Math.hypot(
          e.clientX - (rect.left + rect.width / 2),
          e.clientY - (rect.top + rect.height / 2)
        );
        if (dist < 80) {
          x.set(rect.left + rect.width / 2);
          y.set(rect.top + rect.height / 2);
          snapped = true;
        }
      });
      if (!snapped) {
        x.set(e.clientX);
        y.set(e.clientY);
      }
    };
    window.addEventListener("mousemove", handleMagnet);
    return () => window.removeEventListener("mousemove", handleMagnet);
  }, [x, y]);

  return (
    <motion.div
      ref={cursorRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        x: springX,
        y: springY,
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: "rgba(0,255,255,0.25)",
        border: "2px solid #0ff",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "difference"
      }}
      transition={{ type: "spring", stiffness: 500, damping: 40 }}
    />
  );
}
// Para activar el efecto magnético en cualquier elemento, añade la clase "magnetic-target".