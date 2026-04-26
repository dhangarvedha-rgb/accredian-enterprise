"use client";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        borderRadius: 14,
        background: "linear-gradient(135deg, #1a56db, #2563eb)",
        color: "white",
        border: "none",
        cursor: "pointer",
        boxShadow: "0 8px 32px rgba(26,86,219,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        zIndex: 99,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.85)",
        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      ↑
    </button>
  );
}
