"use client";

import { useApp } from "@/app/context";

const testimoniosEs = [
  { id: 1, text: "Yeraldin es una estudiante muy dedicada y comprometida con su aprendizaje. Siempre busca la mejor solución.", name: "Docente UCC", role: "Profesor de Ingeniería", initial: "D" },
  { id: 2, text: "Yeraldin, Destaca por la pasión y responsabilidad que pone en cada tarea y en cada sueño. Tiene un gran talento para analizar las situaciones y resolver con creatividad todo lo que se propone.", name: "Jessika Mayaly Urbano", role: "gerente de EID group sas", initial: "J" },
  { id: 3, text: "Tiene una gran capacidad para aprender nuevas tecnologías y aplicarlas de forma práctica en proyectos reales.", name: "Mentor de proyecto", role: "Desarrollador Senior", initial: "M" },
];

const testimoniosEn = [
  { id: 1, text: "Yeraldin is a very dedicated and committed student. She always looks for the best solution.", name: "UCC Teacher", role: "Engineering Professor", initial: "T" },
  { id: 2, text: "Yeraldin, Yeraldin stands out for the passion and responsibility she brings to every task and every dream. She has a great talent for analyzing situations and creatively solving everything she sets her mind to.", name: "Jessika Mayaly Urbano", role: "gerente de EID group sas", initial: "J" },
  { id: 3, text: "She has a great ability to learn new technologies and apply them practically in real projects.", name: "Project Mentor", role: "Senior Developer", initial: "M" },
];

export default function Testimonials() {
  const { darkMode, lang } = useApp();
  const testimonios = lang === "es" ? testimoniosEs : testimoniosEn;

  return (
    <section
      id="testimonios"
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
          {lang === "es" ? "Testimonios" : "Testimonials"}
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}>
          {testimonios.map((t) => (
            <div key={t.id} style={{
              backgroundColor: darkMode ? "#1A2E28" : "#ffffff",
              borderRadius: "16px", padding: "24px",
              display: "flex", flexDirection: "column", gap: "16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "#2D9B83" }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>

              <p style={{
                fontSize: "0.875rem", lineHeight: "1.75", flex: 1,
                color: darkMode ? "#cccccc" : "#555555",
              }}>
                &ldquo;{t.text}&rdquo;
              </p>

              <div style={{ height: "1px", backgroundColor: "#B2DFDB" }} />

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "50%",
                  backgroundColor: "#2D9B83", color: "white",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: "700", fontSize: "0.875rem", flexShrink: 0,
                }}>
                  {t.initial}
                </div>
                <div>
                  <p style={{ fontSize: "0.875rem", fontWeight: "600", color: darkMode ? "#ffffff" : "#1a1a1a" }}>
                    {t.name}
                  </p>
                  <p style={{ fontSize: "0.75rem", color: darkMode ? "#aaaaaa" : "#888888" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}