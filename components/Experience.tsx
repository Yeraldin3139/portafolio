"use client";

const academica = [
  {
    id: 1,
    titulo: "Bachiller Academica",
    institucion: "Colegio Filipense 'Nuestra Señora de la Esperanza'",
    periodo: "2011-2021",
    descripcion: "graduada con certificacion de exelencia en puntualidad",
  },
  {
    id: 2,
    titulo: "Estudiante de artes",
    institucion: "Academia Rumipamba",
    periodo: "2022-2026",
    descripcion: "reforzando mis conocimientos y desarollando mejor mi habilidad en arte(pintura, dibujo,diseño y otros)",
  },
  {
    id: 3,
    titulo: "Ingenieria de Software",
    institucion: "Universidad Cooperativa de Colombia - Campus Pasto",
    periodo: "2023 - Actualidad",
    descripcion: "Estudiante de quinto semestre, aprendiendo desarrollo web, bases de datos y programación orientada a objetos",
  },
];

const laboral = [
  {
    id: 1,
    titulo: "Proyecto Académico Frontend",
    institucion: "Universidad Cooperativa de Colombia",
    periodo: "2024",
    descripcion: "Desarrollo de interfaces web con React y Tailwind CSS para proyectos universitarios",
  },
  {
    id: 2,
    titulo: "Diseño y Arte Digital",
    institucion: "Independiente",
    periodo: "2022 - Actualidad",
    descripcion: "Creación de ilustraciones digitales, diseño gráfico y pintura como actividad complementaria",
  },
];

interface ExperienciaItem {
  id: number;
  titulo: string;
  institucion: string;
  periodo: string;
  descripcion: string;
}

function TimelineItem({ item }: { item: ExperienciaItem }) {
  return (
    <div className="flex gap-4">

      {/* Punto y línea */}
      <div className="flex flex-col items-center">
        <div
          className="w-4 h-4 rounded-full flex-shrink-0 mt-1"
          style={{ backgroundColor: "#2D9B83" }}
        />
        <div
          className="w-0.5 flex-1 mt-2"
          style={{ backgroundColor: "#B2DFDB" }}
        />
      </div>

      {/* Card */}
      <div
        className="flex-1 rounded-2xl p-6 mb-6 transition-shadow duration-300 hover:shadow-md"
        style={{
          border: "1.5px solid #B2DFDB",
          backgroundColor: "#ffffff",
        }}
      >
        <h4
          className="font-bold text-base mb-1"
          style={{ color: "#1a1a1a" }}
        >
          {item.titulo}
        </h4>
        <p
          className="text-sm font-medium mb-1"
          style={{ color: "#2D9B83" }}
        >
          {item.institucion}
        </p>
        <p
          className="text-xs mb-3"
          style={{ color: "#2D9B83" }}
        >
          {item.periodo}
        </p>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "#555555" }}
        >
          {item.descripcion}
        </p>
      </div>

    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="py-20 px-6"
      style={{ backgroundColor: "#E8F5F3" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Título principal */}
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-12"
          style={{ color: "#1a1a1a" }}
        >
          Experiencia
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Columna Académica */}
          <div>
            <h3
              className="text-xl font-bold mb-8"
              style={{ color: "#1a1a1a" }}
            >
              Académica
            </h3>
            <div>
              {academica.map((item) => (
                <TimelineItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Columna Laboral */}
          <div>
            <h3
              className="text-xl font-bold mb-8"
              style={{ color: "#1a1a1a" }}
            >
              Laboral
            </h3>
            <div>
              {laboral.map((item) => (
                <TimelineItem key={item.id} item={item} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}