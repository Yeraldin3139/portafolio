"use client";

import Image from "next/image";
import { useApp } from "@/app/context";

export default function Hero() {
  const { darkMode, lang } = useApp();

  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px 40px",
        backgroundColor: darkMode ? "#0D1F1A" : "#ffffff",
        transition: "background-color 0.3s",
      }}
    >
      <div style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", textAlign: "center",
        gap: "24px", maxWidth: "672px", margin: "0 auto"
      }}>

        {/* Foto */}
        <div style={{
          width: "220px", height: "220px", borderRadius: "50%",
          overflow: "hidden", border: "4px solid #2D9B83",
          boxShadow: "0 4px 20px rgba(45,155,131,0.3)",
          position: "relative", backgroundColor: "#1a1a1a"
        }}>
          <Image src="/images/foto.jpg" alt="Yeraldin" fill style={{ objectFit: "cover" }} priority />
        </div>

        {/* Textos */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "800",
            color: darkMode ? "#ffffff" : "#1a1a1a",
          }}>
            {lang === "es" ? "Hola, soy Yeraldin Araujo" : "Hi, I'm Yeraldin Araujo"}
          </h1>
          <p style={{ fontSize: "1.125rem", fontWeight: "500", color: "#2D9B83" }}>
            {lang === "es" ? "Estudiante de ingeniería de software y artista en constante formación. Dedicada a transformar ideas complejas en experiencias digitales funcionales, aportando una sensibilidad estética única a cada proyecto de desarrollo." : "Software engineering student and artist in the making. Dedicated to transforming complex ideas into functional digital experiences, bringing a unique aesthetic sensitivity to every development project."}
          </p>
          <p style={{ fontSize: "0.875rem", color: darkMode ? "#aaaaaa" : "#888888" }}>
            {lang === "es"
              ? "Universidad Cooperativa de Colombia Campus Pasto"
              : "Universidad Cooperativa de Colombia Campus Pasto"}
          </p>
        </div>

        {/* Botón CV */}
        <a
          href="/cv.pdf"
          download
          style={{
            display: "flex", alignItems: "center", gap: "8px",
            padding: "12px 32px", borderRadius: "12px",
            backgroundColor: "#2D9B83", color: "white",
            fontWeight: "600", fontSize: "0.875rem",
            textDecoration: "none", transition: "opacity 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          {lang === "es" ? "Descargar CV" : "Download CV"}
        </a>

      </div>
    </section>
  );
}