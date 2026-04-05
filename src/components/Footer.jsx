import { useLang } from "../context/LangContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer
      style={{
        padding: "2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "var(--font-mono)",
        fontSize: "0.75rem",
        color: "var(--muted)",
      }}
    >
      <span>NROJAS.DEV</span>
      <div style={{ display: "flex", gap: "2rem" }}>
        <a
          href="https://github.com/nicorojass"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--muted)", textDecoration: "none" }}
        >
          GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/nicolaserojas/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--muted)", textDecoration: "none" }}
        >
          LINKEDIN
        </a>
        <a
          href="mailto:nicoorojas1@gmail.com"
          style={{ color: "var(--muted)", textDecoration: "none" }}
        >
          EMAIL
        </a>
      </div>
      <span>{t.footer.built}</span>
    </footer>
  );
}
