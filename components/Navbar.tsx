"use client";

import { useState, useEffect } from "react";
import { useApp } from "@/app/context";

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
  const { darkMode, setDarkMode, lang, setLang } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar si es mobile al montar y al redimensionar
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
        borderBottom: scrolled ? "none" : `1px solid ${darkMode ? "#1A2E28" : "#f0f0f0"}`,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        transition: "all 0.3s",
      }}
    >
      <div style={{
        maxWidth: "1152px",
        margin: "0 auto",
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            width: "36px", height: "36px", borderRadius: "50%",
            backgroundColor: "#2D9B83", display: "flex",
            alignItems: "center", justifyContent: "center",
            color: "white", fontWeight: "700", fontSize: "0.875rem"
          }}>
            S
          </div>
          <span style={{
            fontWeight: "700", fontSize: "1.125rem",
            color: darkMode ? "#ffffff" : "#1a1a1a"
          }}>
            Sayis Araujo
          </span>
        </div>

        {/* Links desktop — solo visible en pantallas >= 768px */}
        {!isMobile && (
          <ul style={{
            display: "flex", alignItems: "center",
            gap: "8px", listStyle: "none",
            margin: 0, padding: 0,
          }}>
            {currentLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      padding: "8px 16px",
                      borderRadius: "999px",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      textDecoration: "none",
                      transition: "all 0.2s",
                      backgroundColor: isActive ? "#E8F5F3" : "transparent",
                      color: isActive ? "#2D9B83" : darkMode ? "#cccccc" : "#555555",
                      border: isActive ? "1px solid #5ECFB1" : "1px solid transparent",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        )}

        {/* Botones derecha */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>

          {/* Dark mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "8px", borderRadius: "50%",
              color: darkMode ? "#cccccc" : "#555555",
            }}
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>

          {/* Traductor */}
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "8px", borderRadius: "50%",
              color: darkMode ? "#cccccc" : "#555555",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
          </button>

          {/* Hamburguesa — solo visible en mobile */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "8px", borderRadius: "50%",
                color: darkMode ? "#cccccc" : "#555555",
              }}
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Línea teal */}
      <div style={{ height: "2px", width: "100%", backgroundColor: "#2D9B83" }} />

      {/* Menú mobile */}
      {isMobile && menuOpen && (
        <div style={{
          backgroundColor: darkMode ? "#0D1F1A" : "#ffffff",
          borderTop: "1px solid #f0f0f0",
          padding: "16px 24px",
        }}>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", margin: 0, padding: 0 }}>
            {currentLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: "block",
                      padding: "8px 16px",
                      borderRadius: "999px",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      textDecoration: "none",
                      backgroundColor: isActive ? "#E8F5F3" : "transparent",
                      color: isActive ? "#2D9B83" : darkMode ? "#cccccc" : "#555555",
                      border: isActive ? "1px solid #5ECFB1" : "1px solid transparent",
                    }}
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