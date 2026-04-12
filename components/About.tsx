"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="acerca"
      className="py-20 px-6"
      style={{ backgroundColor: "#E8F5F3" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-12"
          style={{ color: "#1a1a1a" }}
        >
          Acerca de mí
        </h2>

        {/* Contenido: texto + foto */}
        <div className="flex flex-col md:flex-row gap-12 items-start mb-16">

          {/* Texto */}
          <div className="flex-1 flex flex-col gap-5">
            <p className="text-base leading-relaxed" style={{ color: "#333333" }}>
              Soy estudiante de quinto semestre de ingenieria de software de la
              Universidad Cooperativa de Colombia - Campus Pasto
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#333333" }}>
              Me gusta aprender nuevas tecnologías y aplicarlas para resolver
              problemas. me interesa la importancia de la accesibilidad y la
              experiencia de usuario.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#333333" }}>
              En mi tiempo libre me apaciona ampliar y desarrolar mis
              conocimientos del arte (pintura, dibujo, diseño, entre otros)
            </p>
          </div>

          {/* Foto */}
          <div className="flex-shrink-0 w-full md:w-80">
            <div
              className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg"
              style={{ backgroundColor: "#1a1a1a" }}
            >
              <Image
                src="/images/foto.jpg"
                alt="Yeraldin"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>

        {/* Cards de habilidades */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div
            className="bg-white rounded-2xl p-8 flex flex-col items-center text-center gap-4 shadow-sm"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#B2DFDB" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ color: "#2D9B83" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-base" style={{ color: "#1a1a1a" }}>
                Desarrollo Frontend
              </h3>
              <p className="text-sm mt-1" style={{ color: "#888888" }}>
                React, TypeScript, Tailwind CSS
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white rounded-2xl p-8 flex flex-col items-center text-center gap-4 shadow-sm"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#B2DFDB" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ color: "#2D9B83" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-base" style={{ color: "#1a1a1a" }}>
                Diseño UI/UX
              </h3>
              <p className="text-sm mt-1" style={{ color: "#888888" }}>
                Diseño responsive, accesibilidad
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white rounded-2xl p-8 flex flex-col items-center text-center gap-4 shadow-sm"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#B2DFDB" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ color: "#2D9B83" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-base" style={{ color: "#1a1a1a" }}>
                Optimización
              </h3>
              <p className="text-sm mt-1" style={{ color: "#888888" }}>
                mejores prácticas
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}