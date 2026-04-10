import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { useState } from "react";
import { useLang } from "../context/LangContext";

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    const numero = "5492235401196"; // tu número con código de país sin + ni espacios
    const mensaje = `Hola Nicolás, te contacto desde tu portfolio.
  
    Nombre: ${form.name}
  
    ${form.message}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      style={{
        padding: "6rem 2rem",
        borderBottom: "1px solid var(--border)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
      }}
    >
      <div>
        <h2
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "1.5rem",
            letterSpacing: "0.05em",
          }}
        >
          {t.contact.title}
        </h2>
        <p
          style={{
            fontSize: "0.95rem",
            color: "var(--muted)",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
            maxWidth: "380px",
          }}
        >
          {t.contact.subtitle}
        </p>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
        >
          {[
            {
              icon: FiMail,
              label: "nicoorojas1@gmail.com",
              href: "mailto:nicoorojas1@gmail.com",
            },
            {
              icon: FiLinkedin,
              label: "linkedin.com/in/nicolaserojas",
              href: "https://www.linkedin.com/in/nicolaserojas/",
            },
            {
              icon: FiGithub,
              label: "github.com/nicorojass",
              href: "https://github.com/nicorojass",
            },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                color: "var(--muted)",
                textDecoration: "none",
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
              }}
            >
              <Icon size={16} color="var(--accent)" />
              {label}
            </a>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {[{ name: "name", placeholder: t.contact.name, type: "text" }].map(
          ({ name, placeholder, type }) => (
            <input
              key={name}
              type={type}
              name={name}
              placeholder={placeholder}
              value={form[name]}
              onChange={handleChange}
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--text)",
                padding: "0.85rem 1rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                outline: "none",
                width: "100%",
              }}
            />
          )
        )}

        <textarea
          name="message"
          placeholder={t.contact.message}
          rows={5}
          value={form.message}
          onChange={handleChange}
          style={{
            backgroundColor: "var(--surface)",
            border: "1px solid var(--border)",
            color: "var(--text)",
            padding: "0.85rem 1rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            outline: "none",
            resize: "none",
            width: "100%",
          }}
        />

        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: "var(--accent)",
            color: "#000",
            border: "none",
            padding: "0.85rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            width: "100%",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          {t.contact.button}
        </button>
      </div>
    </section>
  );
}
