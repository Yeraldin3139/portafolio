"use client";

import Image from "next/image";

export default function Anexos() {
  return (
    <section
      id="anexos"
      className="py-20 px-6"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-12"
          style={{ color: "#1a1a1a" }}
        >
          Anexos
        </h2>

        {/* Imagen centrada */}
        <div className="flex justify-center">
          <div
            className="relative w-full max-w-lg h-96 rounded-2xl overflow-hidden shadow-lg"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            <Image
              src="/images/arte.jpg"
              alt="Arte de Yeraldin"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}