"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "94%", label: "Completion Rate" },
  { value: "40%", label: "Avg. Productivity Boost" },
  { value: "50K+", label: "Employees Trained" },
];

const partners = ["IIT Delhi", "IIT Bombay", "IIM Bangalore", "IIM Calcutta", "BITS Pilani", "NUS Singapore", "IIT Madras", "IIM Ahmedabad"];

const words = ["Workforce", "Teams", "Leaders", "Engineers", "Managers"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % words.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToFeatures = () => {
    document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #f8faff 0%, #eef3ff 40%, #fff 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "90px",
      }}
    >
      {/* Background decorations */}
      <div className="blob" style={{ width: 600, height: 600, background: "#1a56db", top: -200, right: -100 }} />
      <div className="blob" style={{ width: 400, height: 400, background: "#60a5fa", bottom: 0, left: -100 }} />

      {/* Grid dots */}
      <div
        className="absolute inset-0 grid-dots opacity-40"
        style={{ zIndex: 0 }}
      />

      {/* Rotating ring decoration */}
      <div
        className="absolute right-10 top-32 animate-spin-slow opacity-10 hidden lg:block"
        style={{ width: 300, height: 300, border: "2px dashed #1a56db", borderRadius: "50%" }}
      />
      <div
        className="absolute right-20 top-40 animate-spin-slow opacity-8 hidden lg:block"
        style={{ width: 200, height: 200, border: "1px solid #60a5fa", borderRadius: "50%", animationDirection: "reverse", animationDuration: "15s" }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{
                background: "linear-gradient(135deg, #eef3ff, #dbeafe)",
                color: "#1a56db",
                border: "1px solid #c7d9ff",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              India&apos;s #1 Enterprise Learning Platform
            </div>

            {/* Headline */}
            <h1
              className={`text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontFamily: "Sora, sans-serif", color: "#0a1628", letterSpacing: "-0.02em" }}
            >
              Upskill Your{" "}
              <span
                className="relative inline-block"
                style={{ minWidth: "220px" }}
              >
                <span
                  className="gradient-text"
                  style={{
                    display: "inline-block",
                    animation: "fadeIn 0.4s ease both",
                  }}
                  key={wordIndex}
                >
                  {words[wordIndex]}
                </span>
              </span>
              <br />
              <span style={{ color: "#0a1628" }}>at Scale</span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-lg text-gray-600 leading-relaxed mb-8 max-w-xl transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              Partner with <strong style={{ color: "#0a1628" }}>IITs, IIMs, and global universities</strong> to deliver curated programs, live mentorship, and real-time analytics — all in one enterprise-grade platform.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-4 mb-12 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <button onClick={scrollToContact} className="btn-primary text-base py-4 px-8">
                <span>Book a Free Demo →</span>
              </button>
              <button onClick={scrollToFeatures} className="btn-outline text-base py-4 px-8">
                Explore Platform
              </button>
            </div>

            {/* Trust strip */}
            <div
              className={`flex items-center gap-4 text-sm text-gray-500 transition-all duration-700 delay-400 ${visible ? "opacity-100" : "opacity-0"}`}
            >
              <div className="flex -space-x-2">
                {["B", "T", "I", "M"].map((l, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: `hsl(${220 + i * 20}, 70%, ${40 + i * 5}%)` }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <span>Trusted by <strong style={{ color: "#0a1628" }}>500+ enterprises</strong> across India &amp; SE Asia</span>
            </div>
          </div>

          {/* Right — Stats + floating card */}
          <div
            className={`transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {/* Main card */}
            <div
              className="rounded-3xl p-8 mb-6 relative overflow-hidden animate-float"
              style={{
                background: "linear-gradient(135deg, #0a1628 0%, #112240 60%, #1d3557 100%)",
                boxShadow: "0 32px 80px rgba(10,22,40,0.25)",
              }}
            >
              <div className="blob" style={{ width: 200, height: 200, background: "#1a56db", right: -50, top: -50 }} />
              <h3 className="text-white font-semibold text-lg mb-6 relative z-10">Platform Overview</h3>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-5 transition-all duration-300 hover:scale-105"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <div
                      className="text-3xl font-bold mb-1 gradient-text"
                      style={{ fontFamily: "Sora, sans-serif" }}
                    >
                      {s.value}
                    </div>
                    <div className="text-sm text-gray-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini floating notification */}
            <div
              className="rounded-2xl px-5 py-4 flex items-center gap-4 animate-float"
              style={{
                background: "white",
                boxShadow: "0 16px 48px rgba(10,22,40,0.1)",
                border: "1px solid #e5e7eb",
                animationDelay: "1s",
                marginLeft: "24px",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: "#eef3ff" }}
              >
                🎓
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-800">New cohort launched</div>
                <div className="text-xs text-gray-500">AI &amp; ML Engineering · 240 enrolled</div>
              </div>
              <div className="ml-auto flex items-center gap-1 text-xs font-semibold" style={{ color: "#16a34a" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Live
              </div>
            </div>
          </div>
        </div>

        {/* Partner ticker */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
            Programs Co-Designed With
          </p>
          <div className="ticker-wrap relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #f8faff, transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #f8faff, transparent)" }} />
            <div className="ticker-inner animate-ticker">
              {[...partners, ...partners].map((p, i) => (
                <span
                  key={i}
                  className="inline-flex items-center mx-8 text-sm font-bold"
                  style={{ color: "#0a1628", opacity: 0.75 }}
                >
                  <span
                    className="w-7 h-7 rounded-lg mr-2.5 flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #1a56db, #2563eb)" }}
                  >
                    {p[0]}
                  </span>
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
