"use client";
import { useState, useEffect, useCallback } from "react";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Features", href: "#features" },
  { label: "Programs", href: "#programs" },
  { label: "Partners", href: "#partners" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setScrolled(y > 20);
    const total = document.body.scrollHeight - window.innerHeight;
    setProgress(total > 0 ? (y / total) * 100 : 0);

    // Active section
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    for (const id of sections.reverse()) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 100) {
        setActiveLink(`#${id}`);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 z-[100] h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />

      <nav
        className={`fixed top-0.5 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-glass shadow-md py-3" : "bg-transparent py-5"
        }`}
        style={{ borderBottom: scrolled ? "1px solid rgba(229,231,235,0.6)" : "none" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md transition-transform duration-300 group-hover:scale-110" style={{ background: "linear-gradient(135deg, #1a56db, #2563eb)" }}>
              A
            </div>
            <span className="font-bold text-xl" style={{ fontFamily: "Sora, sans-serif", color: "#0a1628" }}>
              Accredian <span style={{ color: "#1a56db" }}>Enterprise</span>
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-250 group"
                style={{ color: activeLink === link.href ? "#1a56db" : "#374151" }}
              >
                {link.label}
                <span
                  className="absolute bottom-1 left-4 right-4 h-0.5 rounded-full transition-all duration-300 origin-left"
                  style={{
                    background: "#1a56db",
                    transform: activeLink === link.href ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
                <span className="absolute inset-0 rounded-lg bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-outline text-sm py-2.5 px-5"
            >
              Book a Demo
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-primary text-sm py-2.5 px-5"
            >
              <span>Get Started →</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-gray-800 rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-gray-800 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-gray-800 rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
          style={{ background: "rgba(255,255,255,0.98)", backdropFilter: "blur(20px)" }}
        >
          <div className="px-6 pb-6 pt-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left px-4 py-3 rounded-xl text-sm font-medium transition-all hover:bg-blue-50 hover:text-blue-600"
                style={{ color: "#374151" }}
              >
                {link.label}
              </button>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <button onClick={() => scrollTo("#contact")} className="btn-outline text-sm py-3">Book a Demo</button>
              <button onClick={() => scrollTo("#contact")} className="btn-primary text-sm py-3"><span>Get Started →</span></button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
