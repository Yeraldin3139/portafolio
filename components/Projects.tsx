"use client";

import { useApp } from "@/app/context";

const proyectosEs = [
  { id: 1, title: "Truck-Expenses-and-income", description: "Plataforma de gestion de gastos e ingresos de un camion", language: "JavaScript", github: "https://github.com/Yeraldin3139", vercel: "https://truck-expenses-and-income-frontend.onrender.com/", demo: null },
  { id: 2, title: "Reproductor de musica", description: "pagina de reproduccion de musica", language: "Python", github: "https://github.com/Yeraldin3139", vercel: null, demo: null },
  { id: 3, title: "Reloj", description: "pagina reloj", language: "JavaScript", github: "https://github.com/Yeraldin3139", vercel: null, demo: null },
];

const proyectosEn = [
  { id: 1, title: "Truck-Expenses-and-income", description: "Platform for managing truck expenses and income", language: "JavaScript", github: "https://github.com/Yeraldin3139", vercel: "https://truck-expenses-and-income-frontend.onrender.com/", demo: null },
  { id: 2, title: "Music Player", description: "Music reproduction page", language: "Python", github: "https://github.com/Yeraldin3139", vercel: null, demo: null },
  { id: 3, title: "Clock", description: "Clock page", language: "JavaScript", github: "https://github.com/Yeraldin3139", vercel: null , demo: null },
];

export default function Projects() {
  const { darkMode, lang } = useApp();
  const projects = lang === "es" ? proyectosEs : proyectosEn;

  return (
    <section
      id="proyectos"
      style={{
        padding: "80px 24px",
        backgroundColor: darkMode ? "#0D1F1A" : "#ffffff",
        transition: "background-color 0.3s",
      }}
    >
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>

        <h2 style={{
          fontSize: "2rem", fontWeight: "800", marginBottom: "48px",
          color: darkMode ? "#ffffff" : "#1a1a1a",
        }}>
          {lang === "es" ? "Mis Proyectos" : "My Projects"}
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "32px",
        }}>
          {projects.map((project) => (
            <div key={project.id} style={{
              borderRadius: "16px", overflow: "hidden",
              border: `1px solid ${darkMode ? "#1A2E28" : "#e0e0e0"}`,
              display: "flex", flexDirection: "column",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              backgroundColor: darkMode ? "#1A2E28" : "#ffffff",
            }}>

              {/* Header verde */}
              <div style={{
                width: "100%", height: "160px",
                background: "linear-gradient(135deg, #2D9B83 0%, #5ECFB1 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ color: "white", fontSize: "2rem", fontWeight: "bold", opacity: 0.8 }}>
                  {"</>"}
                </span>
              </div>

              {/* Contenido */}
              <div style={{
                padding: "24px", display: "flex",
                flexDirection: "column", gap: "12px", flex: 1,
              }}>
                <h3 style={{ fontWeight: "700", fontSize: "1rem", color: darkMode ? "#ffffff" : "#1a1a1a" }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: darkMode ? "#aaaaaa" : "#555555", flex: 1 }}>
                  {project.description}
                </p>
                <span style={{ fontSize: "0.75rem", color: "#2D9B83", fontWeight: "500" }}>
                  {project.language}
                </span>

                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  gap: "8px", padding: "10px", borderRadius: "12px",
                  backgroundColor: "#1a1a1a", color: "white",
                  fontSize: "0.875rem", fontWeight: "600", textDecoration: "none",
                }}>
                  {lang === "es" ? "Ver código" : "View code"}
                </a>

                <div style={{ display: "flex", gap: "12px" }}>
                  {project.vercel && (
                    <a href={project.vercel} target="_blank" rel="noopener noreferrer" style={{
                      flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                      padding: "8px", borderRadius: "12px",
                      backgroundColor: darkMode ? "#0D1F1A" : "#E8F5F3",
                      color: "#2D9B83", border: "1px solid #B2DFDB",
                      fontSize: "0.875rem", fontWeight: "500", textDecoration: "none",
                    }}>
                      Vercel
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{
                      flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                      padding: "8px", borderRadius: "12px",
                      backgroundColor: darkMode ? "#0D1F1A" : "#E8F5F3",
                      color: "#2D9B83", border: "1px solid #B2DFDB",
                      fontSize: "0.875rem", fontWeight: "500", textDecoration: "none",
                    }}>
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}