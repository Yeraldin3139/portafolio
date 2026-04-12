"use client";

const testimonials = [
  {
    id: 1,
    text: "Yeraldin es una estudiante muy dedicada y comprometida con su aprendizaje. Siempre busca la mejor solución.",
    name: "Docente UCC",
    role: "Profesor de Ingeniería",
    initial: "D",
  },
  {
    id: 2,
    text: "Trabajar con Yeraldin fue una experiencia excelente. Su creatividad y atención al detalle marcan la diferencia.",
    name: "Compañero de clase",
    role: "Estudiante de Sistemas",
    initial: "C",
  },
  {
    id: 3,
    text: "Tiene una gran capacidad para aprender nuevas tecnologías y aplicarlas de forma práctica en proyectos reales.",
    name: "Mentor de proyecto",
    role: "Desarrollador Senior",
    initial: "M",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="py-20 px-6"
      style={{ backgroundColor: "#E8F5F3" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-12"
          style={{ color: "#1a1a1a" }}
        >
          Testimonios
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm
                         transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Ícono mensaje */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ color: "#2D9B83" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>

              {/* Texto testimonio */}
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "#555555" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Divider */}
              <div
                className="w-full h-px"
                style={{ backgroundColor: "#B2DFDB" }}
              />

              {/* Avatar + nombre */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center
                             text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: "#2D9B83" }}
                >
                  {t.initial}
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "#1a1a1a" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "#888888" }}
                  >
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