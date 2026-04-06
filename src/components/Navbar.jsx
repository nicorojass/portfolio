import { useLang } from "../context/LangContext";

export default function Navbar() {
  const { lang, toggle, t } = useLang();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "rgba(13,13,13,0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <a href="#">
        <img
          src="NicoRojasId.png"
          style={{
            width: "40px",
          }}
        ></img>
      </a>

      {/* Links — ocultos en mobile */}
      <div
        className="nav-links"
        style={{
          display: "flex",
          gap: "2rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.85rem",
        }}
      >
        <a
          href="#stack"
          style={{ color: "var(--muted)", textDecoration: "none" }}
        >
          {t.nav.stack}
        </a>
        <a
          href="#projects"
          style={{ color: "var(--muted)", textDecoration: "none" }}
        >
          {t.nav.projects}
        </a>
        <a
          href="#contact"
          style={{ color: "var(--muted)", textDecoration: "none" }}
        >
          {t.nav.contact}
        </a>
      </div>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <button
          onClick={toggle}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            padding: "0.5rem 1rem",
            background: "transparent",
            border: "1px solid var(--border)",
            color: "var(--muted)",
            cursor: "none",
            letterSpacing: "0.05em",
            transition: "border-color 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--accent)";
            e.currentTarget.style.color = "var(--accent)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.color = "var(--muted)";
          }}
        >
          {lang === "en" ? "ES" : "EN"}
        </button>

        {/* RESUME — oculto en mobile */}
        <a
          className="nav-resume"
          href="/cv.pdf"
          download
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            padding: "0.5rem 1.2rem",
            border: "1px solid var(--accent)",
            color: "var(--accent)",
            textDecoration: "none",
            letterSpacing: "0.05em",
          }}
        >
          {t.nav.resume}
        </a>
      </div>
    </nav>
  );
}
