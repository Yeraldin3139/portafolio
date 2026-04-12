"use client";

const projects = [
  {
    id: 1,
    title: "Truck-Expenses-and-income",
    description: "Plataforma de gestion de gastos e ingresos de un camion",
    language: "java script",
    github: "https://github.com/Yeraldin3139",
    vercel: "https://vercel.com",
    demo: "https://vercel.com",
  },
  {
    id: 2,
    title: "Reproductor de musica",
    description: "pagina de reproduccion de musica",
    language: "python",
    github: "https://github.com/Yeraldin3139",
    vercel: "https://vercel.com",
    demo: "https://vercel.com",
  },
  {
    id: 3,
    title: "Reloj",
    description: "pagina reloj",
    language: "JavaScript",
    github: "https://github.com/Yeraldin3139",
    vercel: "https://vercel.com",
    demo: null,
  },
];

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="py-20 px-6"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-12"
          style={{ color: "#1a1a1a" }}
        >
          Mis Proyectos
        </h2>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl overflow-hidden shadow-md flex flex-col
                         transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ border: "1px solid #e0e0e0" }}
            >

              {/* Imagen superior verde */}
              <div
                className="w-full h-44 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #2D9B83 0%, #5ECFB1 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 text-white opacity-80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 9l3 3-3 3m5 0h3"
                  />
                </svg>
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col gap-3 flex-1 bg-white">

                {/* Título proyecto */}
                <h3
                  className="font-bold text-base"
                  style={{ color: "#1a1a1a" }}
                >
                  {project.title}
                </h3>

                {/* Descripción */}
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "#555555" }}
                >
                  {project.description}
                </p>

                {/* Lenguaje */}
                <span
                  className="text-xs font-medium"
                  style={{ color: "#2D9B83" }}
                >
                  {project.language}
                </span>

                {/* Botón Ver código */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl
                             text-white text-sm font-semibold transition-opacity duration-200 hover:opacity-80"
                  style={{ backgroundColor: "#1a1a1a" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Ver código
                </a>

                {/* Botones Vercel y Demo */}
                <div className="flex gap-3">
                  <a
                    href={project.vercel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl
                               text-sm font-medium transition-opacity duration-200 hover:opacity-80"
                    style={{
                      backgroundColor: "#E8F5F3",
                      color: "#2D9B83",
                      border: "1px solid #B2DFDB",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Vercel
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl
                                 text-sm font-medium transition-opacity duration-200 hover:opacity-80"
                      style={{
                        backgroundColor: "#E8F5F3",
                        color: "#2D9B83",
                        border: "1px solid #B2DFDB",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
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