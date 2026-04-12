"use client";

import { useState, useEffect } from "react";

const linksEs = [
  { label: "Inicio", href: "#inicio" },
  { label: "Acerca de mí", href: "#acerca" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
];

const linksEn = [
  { label: "Home", href: "#inicio" },
  { label: "About me", href: "#acerca" },
  { label: "Projects", href: "#proyectos" },
  { label: "Testimonials", href: "#testimonios" },
  { label: "Experience", href: "#experiencia" },
  { label: "Contact", href: "#contacto" },
];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState<"es" | "en">("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["inicio", "acerca", "proyectos", "testimonios", "experiencia", "contacto"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentLinks = lang === "es" ? linksEs : linksEn;

  return (
    <nav
      style={{
        backgroundColor: darkMode ? "#0D1F1A" : "#ffffff",
        boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
        borderBottom: scrolled ? "none" : "1px solid #f0f0f0",
      }}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{ backgroundColor: "#2D9B83" }}
          >
            Y
          </div>
          <span
            className="font-bold text-lg"
            style={{ color: darkMode ? "#ffffff" : "#1a1a1a" }}
          >
            Yeraldin
          </span>
        </div>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-2">
          {currentLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    backgroundColor: isActive ? "#E8F5F3" : "transparent",
                    color: isActive ? "#2D9B83" : darkMode ? "#cccccc" : "#555555",
                    border: isActive ? "1px solid #5ECFB1" : "1px solid transparent",
                  }}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80"
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Botones derecha */}
        <div className="flex items-center gap-2">

          {/* Dark mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              backgroundColor: "transparent",
              color: darkMode ? "#cccccc" : "#555555",
            }}
            className="p-2 rounded-full transition-colors duration-200 hover:opacity-70"
            aria-label="Cambiar tema"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>

          {/* Traductor */}
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            style={{
              backgroundColor: "transparent",
              color: darkMode ? "#cccccc" : "#555555",
            }}
            className="p-2 rounded-full transition-colors duration-200 hover:opacity-70"
            aria-label="Cambiar idioma"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
          </button>

          {/* Hamburguesa mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              backgroundColor: "transparent",
              color: darkMode ? "#cccccc" : "#555555",
            }}
            className="md:hidden p-2 rounded-full transition-colors duration-200 hover:opacity-70"
            aria-label="Menú"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Línea inferior teal */}
      <div className="h-0.5 w-full" style={{ backgroundColor: "#2D9B83" }} />

      {/* Menú mobile */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: darkMode ? "#0D1F1A" : "#ffffff",
            borderTop: "1px solid #f0f0f0",
          }}
          className="md:hidden px-6 py-4"
        >
          <ul className="flex flex-col gap-2">
            {currentLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      backgroundColor: isActive ? "#E8F5F3" : "transparent",
                      color: isActive ? "#2D9B83" : darkMode ? "#cccccc" : "#555555",
                      border: isActive ? "1px solid #5ECFB1" : "1px solid transparent",
                    }}
                    className="block px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}