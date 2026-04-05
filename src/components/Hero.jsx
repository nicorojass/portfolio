import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "../context/LangContext";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const { t } = useLang();

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 2rem",
        paddingTop: "80px",
        borderBottom: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <DotGrid />

      <motion.div
        style={{
          y,
          opacity,
          maxWidth: "700px",
          position: "relative",
          zIndex: 1,
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "var(--accent)",
            border: "1px solid var(--accent)",
            padding: "0.3rem 0.8rem",
            letterSpacing: "0.15em",
            marginBottom: "2rem",
            display: "inline-block",
          }}
        >
          {t.hero.status}
        </span>

        <h1
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            margin: "1rem 0",
          }}
        >
          {t.hero.title} <span style={{ color: "var(--accent)" }}>ROJAS</span>
        </h1>

        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "1rem",
            color: "var(--muted)",
            marginBottom: "1rem",
          }}
        >
          {t.hero.subtitle}
        </p>

        <p
          style={{
            fontSize: "1rem",
            color: "var(--muted)",
            lineHeight: 1.7,
            maxWidth: "520px",
            marginBottom: "2.5rem",
          }}
        >
          {t.hero.tagline}
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="#projects"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              padding: "0.75rem 1.5rem",
              backgroundColor: "var(--accent)",
              color: "#000",
              textDecoration: "none",
              fontWeight: 700,
              letterSpacing: "0.05em",
            }}
          >
            {t.hero.cta1}
          </a>
          <a
            href="/cv.pdf"
            download
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              padding: "0.75rem 1.5rem",
              border: "1px solid var(--muted)",
              color: "var(--text)",
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
          >
            {t.hero.cta2}
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function DotGrid() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        backgroundImage:
          "radial-gradient(circle, #2a2a2a 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        opacity: 0.5,
      }}
    />
  );
}
