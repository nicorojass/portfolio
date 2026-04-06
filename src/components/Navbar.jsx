import { useLang } from "../context/LangContext";

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

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
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          document.documentElement.scrollIntoView({ behavior: "smooth" });
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        style={{
          textDecoration: "none",
          transition: "opacity 0.2s",
        }}
      >
        <img
          src="/NicoRojasId.png"
          alt="NROJAS.DEV"
          style={{ height: "40px" }}
        />
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
        {[
          { id: "stack", label: t.nav.stack },
          { id: "projects", label: t.nav.projects },
          { id: "contact", label: t.nav.contact },
        ].map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            style={{
              background: "none",
              border: "none",
              color: "var(--muted)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              padding: 0,
              letterSpacing: "inherit",
              transition: "color 0.2s",
            }}
          >
            {label}
          </button>
        ))}
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
