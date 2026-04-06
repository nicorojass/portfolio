import {
  SiSpring,
  SiSpringboot,
  SiMysql,
  SiJsonwebtokens,
  SiSwagger,
  SiPostman,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { FiCloud } from "react-icons/fi";
import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";

const stack = [
  { icon: FaJava, label: "Java 21", sub: "LTS Runtime" },
  { icon: SiSpring, label: "Spring Boot", sub: "Microservices" },
  { icon: SiSpringboot, label: "Spring Data JPA", sub: "Persistence Layer" },
  { icon: SiJsonwebtokens, label: "JWT Auth", sub: "Security" },
  { icon: SiMysql, label: "MySQL", sub: "Persistence" },
  { icon: TbApi, label: "REST APIs", sub: "OpenAPI/Swagger" },
  { icon: SiPostman, label: "Postman", sub: "API Testing" },
  { icon: FiCloud, label: "Railway", sub: "Deployment" },
  { icon: SiSwagger, label: "Swagger", sub: "Documentation" },
];

const isMobile = window.matchMedia("(hover: none)").matches;

export default function TechStack() {
  const { t } = useLang();

  return (
    <section
      id="stack"
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
        {t.stack.label}
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
        {t.stack.title}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "1rem",
        }}
      >
        {stack.map(({ icon: Icon, label, sub }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              transition: "border-color 0.15s ease, transform 0.15s ease",
            }}
            onMouseEnter={
              isMobile
                ? undefined
                : (e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.transform = "scale(1.02)";
                  }
            }
            onMouseLeave={
              isMobile
                ? undefined
                : (e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.transform = "scale(1)";
                  }
            }
          >
            <Icon size={28} color="var(--accent)" />
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                }}
              >
                {label}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--muted)",
                }}
              >
                {sub}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
