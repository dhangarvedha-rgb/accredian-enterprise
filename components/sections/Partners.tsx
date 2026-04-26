"use client";
import { useEffect, useRef } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Enterprise Clients", icon: "🏢" },
  { value: 50, suffix: "K+", label: "Employees Trained", icon: "👨‍💼" },
  { value: 94, suffix: "%", label: "Completion Rate", icon: "🎯" },
  { value: 40, suffix: "%", label: "Avg Productivity Boost", icon: "📈" },
];

const institutions = [
  { name: "IIT Delhi", abbr: "IITD", color: "#1a56db" },
  { name: "IIT Bombay", abbr: "IITB", color: "#dc2626" },
  { name: "IIM Bangalore", abbr: "IIMB", color: "#059669" },
  { name: "IIM Calcutta", abbr: "IIMC", color: "#d97706" },
  { name: "BITS Pilani", abbr: "BITS", color: "#7c3aed" },
  { name: "IIM Ahmedabad", abbr: "IIMA", color: "#0284c7" },
  { name: "IIT Madras", abbr: "IITM", color: "#ea580c" },
  { name: "NUS Singapore", abbr: "NUS", color: "#e11d48" },
];

const companyLogos = [
  "Google", "Microsoft", "Amazon", "Flipkart", "Infosys", "TCS", "Wipro", "HCL",
  "Accenture", "Deloitte", "HDFC", "ICICI", "Zomato", "Swiggy",
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const ran = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || ran.current) return;
        ran.current = true;
        const duration = 2000;
        const start = Date.now();
        const tick = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          if (ref.current) ref.current.textContent = Math.floor(eased * target) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Partners() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Stats Section */}
      <section
        id="partners"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #112240 60%, #1d3557 100%)",
          padding: "80px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="blob" style={{ width: 600, height: 600, background: "#1a56db", opacity: 0.08, left: -200, top: "50%", transform: "translateY(-50%)" }} />
        <div className="blob" style={{ width: 400, height: 400, background: "#60a5fa", opacity: 0.06, right: -100, top: 0 }} />

        {/* Grid bg */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 reveal">
            <h2
              className="text-3xl lg:text-4xl font-extrabold text-white mb-3"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              Numbers That <span className="gradient-text">Speak for Themselves</span>
            </h2>
            <p className="text-gray-400">Measured outcomes across 500+ enterprise deployments</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="reveal text-center rounded-2xl p-8 transition-all duration-300 hover:scale-105 group"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110">{s.icon}</div>
                <div
                  className="text-4xl lg:text-5xl font-extrabold mb-2 gradient-text"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  <CountUp target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-gray-400 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutions Section */}
      <section style={{ background: "#f8faff", padding: "80px 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-5"
              style={{ background: "#eef3ff", color: "#1a56db", border: "1px solid #c7d9ff" }}>
              ✦ Academic Partners
            </div>
            <h2
              className="text-4xl lg:text-5xl font-extrabold mb-4"
              style={{ fontFamily: "Sora, sans-serif", color: "#0a1628", letterSpacing: "-0.02em" }}
            >
              Backed by <span className="gradient-text">India&apos;s Best</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Programs co-designed and certified by India&apos;s most prestigious institutions and global technology leaders.
            </p>
          </div>

          {/* Institution grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {institutions.map((inst, i) => (
              <div
                key={i}
                className="reveal card-hover rounded-2xl p-6 text-center border group"
                style={{ background: "white", borderColor: "#e5e7eb", transitionDelay: `${i * 60}ms` }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${inst.color}, ${inst.color}aa)` }}
                >
                  {inst.abbr}
                </div>
                <div className="font-semibold text-sm text-gray-800">{inst.name}</div>
              </div>
            ))}
          </div>

          {/* Company logos ticker */}
          <div className="text-center mb-6 reveal">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              Trusted by Professionals at
            </p>
          </div>
          <div className="ticker-wrap reveal relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #f8faff, transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #f8faff, transparent)" }} />
            <div className="ticker-inner animate-ticker">
              {[...companyLogos, ...companyLogos].map((name, i) => (
                <div
                  key={i}
                  className="inline-flex items-center mx-6 gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
                  style={{ background: "white", border: "1px solid #e5e7eb", color: "#374151" }}
                >
                  <div
                    className="w-6 h-6 rounded-md flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: `hsl(${(i * 23) % 360}, 65%, 45%)` }}
                  >
                    {name[0]}
                  </div>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
