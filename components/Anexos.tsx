"use client";

import Image from "next/image";
import { useApp } from "@/app/context";

export default function Anexos() {
  const { darkMode, lang } = useApp();

  return (
    <section
      id="anexos"
      style={{
        padding: "80px 24px",
        backgroundColor: darkMode ? "#0D1F1A" : "#ffffff",
        transition: "background-color 0.3s",
      }}
    >
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
        <h2 style={{
          fontSize: "2rem", fontWeight: "800", marginBottom: "48px",
          color: darkMode ? "#ffffff" : "#1a1a1a",
        }}>
          {lang === "es" ? "Anexos" : "Attachments"}
        </h2>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{
            position: "relative", width: "100%", maxWidth: "480px", height: "384px",
            borderRadius: "16px", overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            backgroundColor: "#1a1a1a",
          }}>
            <Image src="/images/arte.jpg" alt="Arte de Yeraldin" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </section>
  );
}