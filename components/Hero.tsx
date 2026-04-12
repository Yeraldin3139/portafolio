"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">

        {/* Foto circular */}
        <div
          className="relative w-40 h-40 rounded-full overflow-hidden border-4 shadow-lg"
          style={{ borderColor: "#2D9B83" }}
        >
          <Image
            src="/images/foto.jpg"
            alt="Foto de Yeraldin"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Título */}
        <div className="flex flex-col gap-2">
          <h1
            className="text-4xl md:text-5xl font-extrabold"
            style={{ color: "#1a1a1a" }}
          >
            Hola, soy Yeraldin
          </h1>

          {/* Subtítulo */}
          <p
            className="text-lg md:text-xl font-medium"
            style={{ color: "#2D9B83" }}
          >
            Estudiante de ingenieria de software
          </p>

          {/* Universidad */}
          <p
            className="text-sm md:text-base"
            style={{ color: "#888888" }}
          >
            Universidad Cooperativa de Colombia Campus Pasto
          </p>
        </div>

        {/* Botón Descargar CV */}
        <a
          href="/cv.pdf"
          download
          className="flex items-center gap-2 px-8 py-3 rounded-xl text-white font-semibold
                     transition-all duration-300 hover:opacity-90 hover:scale-105 shadow-md"
          style={{ backgroundColor: "#2D9B83" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Descargar CV
        </a>

      </div>
    </section>
  );
}