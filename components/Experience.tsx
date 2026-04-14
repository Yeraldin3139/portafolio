"use client";

import { useApp } from "@/app/context";

interface Item {
  id: number;
  titulo: string;
  institucion: string;
  periodo: string;
  descripcion: string;
}

const dataEs = {
  academica: [
    { id: 1, titulo: "Bachiller Academica", institucion: "Colegio Filipense 'Nuestra Señora de la Esperanza'", periodo: "2011-2021", descripcion: "graduada con certificacion de exelencia en puntualidad" },
    { id: 2, titulo: "Estudiante de artes", institucion: "Academia Rumipamba", periodo: "2022-2026", descripcion: "reforzando mis conocimientos y desarollando mejor mi habilidad en arte(pintura, dibujo,diseño y otros)" },
    { id: 3, titulo: "Ingenieria de Software", institucion: "Universidad Cooperativa de Colombia - Campus Pasto", periodo: "2024 - Actualidad", descripcion: "Estudiante de quinto semestre, aprendiendo desarrollo web, bases de datos y programación orientada a objetos" },
  ],
  laboral: [
    { id: 1, titulo: "Asistente registro civil", institucion: "Notaria Tercera Pasto Nariño", periodo: "2022-2026", descripcion: "Asistente registro civil" },
    { id: 2, titulo: "venta y produccion", institucion: "Independiente", periodo: "2022 - Actualidad", descripcion: "venta y produccion de productos agricolas, artesanales, maroquineria y de productos de arte" },
  ],
};


const dataEn = {
  academica: [
    { id: 1, titulo: "High School Graduate", institucion: "Colegio Filipense 'Nuestra Señora de la Esperanza'", periodo: "2011-2021", descripcion: "Graduated with excellence certification in punctuality" },
    { id: 2, titulo: "Arts Student", institucion: "Academia Rumipamba", periodo: "2022-2026", descripcion: "Strengthening my knowledge and developing my skills in art (painting, drawing, design and others)" },
    { id: 3, titulo: "Software Engineering", institucion: "Universidad Cooperativa de Colombia - Campus Pasto", periodo: "2024 - Present", descripcion: "Fifth semester student, learning web development, databases and object-oriented programming" },
  ],
  laboral: [
    { id: 1, titulo: " Civil Registry Assistant", institucion: " Third Notary Office of Pasto", periodo: "2022-2026", descripcion: " Civil Registry Assistant" },
    { id: 2, titulo: " Sales and Production", institucion: "Freelance", periodo: "2022 - Present", descripcion: " Sales and production of agricultural and artisanal products, leather goods, and the creation and sale of artwork" },
  ],
};

function TimelineItem({ item, darkMode }: { item: Item; darkMode: boolean }) {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ width: "16px", height: "16px", borderRadius: "50%", backgroundColor: "#2D9B83", flexShrink: 0, marginTop: "4px" }} />
        <div style={{ width: "2px", flex: 1, backgroundColor: "#B2DFDB", marginTop: "8px" }} />
      </div>
      <div style={{
        flex: 1, borderRadius: "16px", padding: "24px", marginBottom: "24px",
        border: "1.5px solid #B2DFDB",
        backgroundColor: darkMode ? "#1A2E28" : "#ffffff",
      }}>
        <h4 style={{ fontWeight: "700", fontSize: "1rem", marginBottom: "4px", color: darkMode ? "#ffffff" : "#1a1a1a" }}>
          {item.titulo}
        </h4>
        <p style={{ fontSize: "0.875rem", fontWeight: "500", marginBottom: "4px", color: "#2D9B83" }}>
          {item.institucion}
        </p>
        <p style={{ fontSize: "0.75rem", marginBottom: "12px", color: "#2D9B83" }}>
          {item.periodo}
        </p>
        <p style={{ fontSize: "0.875rem", lineHeight: "1.6", color: darkMode ? "#cccccc" : "#555555" }}>
          {item.descripcion}
        </p>
      </div>
    </div>
  );
}

export default function Experience() {
  const { darkMode, lang } = useApp();
  const data = lang === "es" ? dataEs : dataEn;

  return (
    <section
      id="experiencia"
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
          {lang === "es" ? "Experiencia" : "Experience"}
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px" }}>
          <div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "32px", color: darkMode ? "#ffffff" : "#1a1a1a" }}>
              {lang === "es" ? "Académica" : "Academic"}
            </h3>
            {data.academica.map((item) => (
              <TimelineItem key={item.id} item={item} darkMode={darkMode} />
            ))}
          </div>
          <div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "32px", color: darkMode ? "#ffffff" : "#1a1a1a" }}>
              {lang === "es" ? "Laboral" : "Work"}
            </h3>
            {data.laboral.map((item) => (
              <TimelineItem key={item.id} item={item} darkMode={darkMode} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}