"use client";

import Image from "next/image";
import { useApp } from "@/app/context";

export default function About() {
  const { darkMode, lang } = useApp();

  const textos = {
    es: {
      titulo: "Acerca de mí",
      p1: "Soy Yeraldin Araujo, estudiante de quinto semestre de ingenieria de software de la Universidad Cooperativa de Colombia - Campus Pasto",
      p2: "Me gusta aprender nuevas tecnologías y aplicarlas para resolver problemas. me interesa la importancia de la accesibilidad y la experiencia de usuario.",
      p3: "En mi tiempo libre me apaciona ampliar y desarrolar mis conocimientos del arte (pintura, dibujo, diseño, entre otros)",
      habilidades: [
        { titulo: "Desarrollo Frontend", subtitulo: "React, TypeScript, Tailwind CSS" },
        { titulo: "Diseño UI/UX", subtitulo: "Diseño responsive, accesibilidad" },
        { titulo: "Optimización", subtitulo: "mejores prácticas" },
      ],
    },
    en: {
      titulo: "About me",
      p1: "I am Yeraldin Araujo, a fifth semester software engineering student at Universidad Cooperativa de Colombia - Campus Pasto",
      p2: "I enjoy learning new technologies and applying them to solve problems. I care about accessibility and user experience.",
      p3: "In my free time I love expanding my knowledge of art (painting, drawing, design, among others)",
      habilidades: [
        { titulo: "Frontend Development", subtitulo: "React, TypeScript, Tailwind CSS" },
        { titulo: "UI/UX Design", subtitulo: "Responsive design, accessibility" },
        { titulo: "Optimization", subtitulo: "best practices" },
      ],
    },
  };

  const t = textos[lang];

  const iconos = [
    <svg key="code" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "#2D9B83" }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    <svg key="design" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "#2D9B83" }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
    <svg key="opt" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "#2D9B83" }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  ];

  return (
    <section
      id="acerca"
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

        {/* Texto + foto */}
        <div style={{
          display: "flex", flexWrap: "wrap",
          gap: "48px", alignItems: "flex-start", marginBottom: "64px",
        }}>
          <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "20px" }}>
            {[t.p1, t.p2, t.p3].map((p, i) => (
              <p key={i} style={{
                fontSize: "0.95rem", lineHeight: "1.75",
                color: darkMode ? "#cccccc" : "#333333",
              }}>{p}</p>
            ))}
          </div>

          <div style={{
            width: "320px", height: "320px", borderRadius: "16px",
            overflow: "hidden", position: "relative",
            backgroundColor: "#1a1a1a", flexShrink: 0,
          }}>
            <Image src="/images/foto.jpg" alt="Yeraldin" fill style={{ objectFit: "cover" }} />
          </div>
        </div>

        {/* Cards habilidades */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
        }}>
          {t.habilidades.map((h, i) => (
            <div key={i} style={{
              backgroundColor: darkMode ? "#1A2E28" : "#ffffff",
              borderRadius: "16px", padding: "32px",
              display: "flex", flexDirection: "column",
              alignItems: "center", textAlign: "center", gap: "16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}>
              <div style={{
                width: "64px", height: "64px", borderRadius: "50%",
                backgroundColor: "#B2DFDB",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {iconos[i]}
              </div>
              <div>
                <h3 style={{
                  fontWeight: "700", fontSize: "1rem",
                  color: darkMode ? "#ffffff" : "#1a1a1a",
                }}>{h.titulo}</h3>
                <p style={{
                  fontSize: "0.875rem", marginTop: "4px",
                  color: darkMode ? "#aaaaaa" : "#888888",
                }}>{h.subtitulo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}