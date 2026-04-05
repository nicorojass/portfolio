import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);

    const addHover = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };
    addHover();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <motion.div
        animate={{ x: pos.x - 6, y: pos.y - 6 }}
        transition={{ type: "spring", stiffness: 800, damping: 40 }}
        style={{
          position: "fixed",
          zIndex: 9999,
          width: 12,
          height: 12,
          borderRadius: "50%",
          backgroundColor: "var(--accent)",
          pointerEvents: "none",
          boxShadow: "0 0 10px var(--accent), 0 0 20px var(--accent)",
          scale: hovered ? 1.8 : 1,
        }}
      />
      <motion.div
        animate={{ x: pos.x - 20, y: pos.y - 20 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        style={{
          position: "fixed",
          zIndex: 9998,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: `1px solid var(--accent)`,
          pointerEvents: "none",
          opacity: hovered ? 0.8 : 0.3,
        }}
      />
    </>
  );
}
