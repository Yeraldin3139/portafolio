"use client";

import { useState } from "react";
import { useApp } from "@/app/context";

export default function Contact() {
  const { darkMode, lang } = useApp();
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const textos = {
    es: { titulo: "Contacto", nombre: "Nombre", email: "Email", mensaje: "Mensaje", boton: "Enviar mensaje", exito: "¡Mensaje enviado correctamente!" },
    en: { titulo: "Contact", nombre: "Name", email: "Email", mensaje: "Message", boton: "Send message", exito: "Message sent successfully!" },
  };

  const t = textos[lang];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.mensaje) return;
    setEnviado(true);
    setFormData({ nombre: "", email: "", mensaje: "" });
    setTimeout(() => setEnviado(false), 4000);
  };

  const inputStyle = {
    width: "100%", padding: "12px 16px", borderRadius: "12px",
    border: "1.5px solid #B2DFDB", outline: "none",
    fontSize: "0.875rem",
    backgroundColor: darkMode ? "#0D1F1A" : "#E8F5F3",
    color: darkMode ? "#ffffff" : "#1a1a1a",
  };

  return (
    <section
      id="contacto"
      style={{
        padding: "80px 24px",
        backgroundColor: darkMode ? "#111f1a" : "#E8F5F3",
        transition: "background-color 0.3s",
      }}
    >
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
        <h2 style={{
          fontSize: "2rem", fontWeight: "800", marginBottom: "48px",
          color: darkMode ? "#ffffff" : "#1a1a1a",
        }}>
          {t.titulo}
        </h2>

        <div style={{
          maxWidth: "640px", borderRadius: "16px", padding: "32px",
          border: "1.5px solid #B2DFDB",
          backgroundColor: darkMode ? "#1A2E28" : "#ffffff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}>

          {enviado && (
            <div style={{
              marginBottom: "24px", padding: "12px 16px", borderRadius: "12px",
              backgroundColor: "#B2DFDB", color: "#1B6B5A",
              fontSize: "0.875rem", fontWeight: "500",
            }}>
              ✅ {t.exito}
            </div>
          )}

          {/* Nombre */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", marginBottom: "8px", color: darkMode ? "#ffffff" : "#1a1a1a" }}>
              {t.nombre}
            </label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder={t.nombre} style={inputStyle} />
          </div>

          {/* Email */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", marginBottom: "8px", color: darkMode ? "#ffffff" : "#1a1a1a" }}>
              {t.email}
            </label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t.email} style={inputStyle} />
          </div>

          {/* Mensaje */}
          <div style={{ marginBottom: "32px" }}>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", marginBottom: "8px", color: darkMode ? "#ffffff" : "#1a1a1a" }}>
              {t.mensaje}
            </label>
            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} placeholder={t.mensaje} rows={5} style={{ ...inputStyle, resize: "none" }} />
          </div>

          <button
            onClick={handleSubmit}
            style={{
              display: "flex", alignItems: "center", gap: "8px",
              padding: "12px 24px", borderRadius: "12px",
              backgroundColor: "#2D9B83", color: "white",
              fontSize: "0.875rem", fontWeight: "600",
              border: "none", cursor: "pointer",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t.boton}
          </button>
        </div>
      </div>
    </section>
  );
}