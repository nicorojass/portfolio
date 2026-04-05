import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";

export default function Projects() {
  const { t } = useLang();
  const projects = t.projectsData;

  return (
    <section
      id="projects"
      style={{ padding: "6rem 2rem", borderBottom: "1px solid var(--border)" }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          color: "var(--muted)",
          marginBottom: "0.5rem",
          letterSpacing: "0.1em",
        }}
      >
        {t.projects.label}
      </p>
      <h2
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "2rem",
          fontWeight: 700,
          marginBottom: "3rem",
          letterSpacing: "0.05em",
        }}
      >
        {t.projects.title}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{
              rotateX: 4,
              rotateY: -4,
              scale: 1.02,
              borderColor: "var(--accent)",
              boxShadow: "0 20px 40px rgba(0, 180, 216, 0.15)",
            }}
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--muted)",
                letterSpacing: "0.1em",
              }}
            >
              {project.badge}
            </span>

            <h3
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1.1rem",
                fontWeight: 700,
              }}
            >
              {project.name}
            </h3>

            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--muted)",
                lineHeight: 1.6,
              }}
            >
              {project.description}
            </p>

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    padding: "0.25rem 0.6rem",
                    border: "1px solid var(--border)",
                    color: "var(--muted)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                color: "var(--accent)",
                textDecoration: "none",
                letterSpacing: "0.1em",
                marginTop: "auto",
              }}
            >
              {t.projects.repo}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
