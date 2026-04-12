"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.mensaje) return;
    setEnviado(true);
    setFormData({ nombre: "", email: "", mensaje: "" });
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <section
      id="contacto"
      className="py-20 px-6"
      style={{ backgroundColor: "#E8F5F3" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-12"
          style={{ color: "#1a1a1a" }}
        >
          Contacto
        </h2>

        {/* Formulario */}
        <div
          className="w-full max-w-2xl rounded-2xl p-8 shadow-sm"
          style={{ border: "1.5px solid #B2DFDB", backgroundColor: "#ffffff" }}
        >

          {/* Mensaje de éxito */}
          {enviado && (
            <div
              className="mb-6 px-4 py-3 rounded-xl text-sm font-medium"
              style={{ backgroundColor: "#B2DFDB", color: "#1B6B5A" }}
            >
              ✅ ¡Mensaje enviado correctamente!
            </div>
          )}

          {/* Nombre */}
          <div className="mb-5">
            <label
              className="block text-sm font-semibold mb-2"
              style={{ color: "#1a1a1a" }}
            >
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Nombre"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
              style={{
                border: "1.5px solid #B2DFDB",
                backgroundColor: "#E8F5F3",
                color: "#1a1a1a",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#2D9B83")}
              onBlur={(e) => (e.target.style.borderColor = "#B2DFDB")}
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label
              className="block text-sm font-semibold mb-2"
              style={{ color: "#1a1a1a" }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
              style={{
                border: "1.5px solid #B2DFDB",
                backgroundColor: "#E8F5F3",
                color: "#1a1a1a",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#2D9B83")}
              onBlur={(e) => (e.target.style.borderColor = "#B2DFDB")}
            />
          </div>

          {/* Mensaje */}
          <div className="mb-8">
            <label
              className="block text-sm font-semibold mb-2"
              style={{ color: "#1a1a1a" }}
            >
              Mensaje
            </label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Mensaje"
              rows={5}
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
              style={{
                border: "1.5px solid #B2DFDB",
                backgroundColor: "#E8F5F3",
                color: "#1a1a1a",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#2D9B83")}
              onBlur={(e) => (e.target.style.borderColor = "#B2DFDB")}
            />
          </div>

          {/* Botón enviar */}
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-white
                       text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#2D9B83" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Enviar mensaje
          </button>

        </div>
      </div>
    </section>
  );
}