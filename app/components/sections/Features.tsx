"use client";
import { useState, useEffect } from "react";

const features = [
  {
    tab: "Analytics",
    icon: "📊",
    title: "Command-Center Analytics",
    desc: "A single pane of glass for all your L&D metrics. Track completion rates, learner engagement, skill-gap closure, and ROI — updated in real time.",
    points: [
      "Live completion & engagement dashboards",
      "Per-learner progress heatmaps",
      "ROI reporting with cost-per-skill metrics",
      "Export-ready board-level summaries",
    ],
    visual: {
      type: "chart",
      data: [65, 78, 82, 91, 94, 96],
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
  },
  {
    tab: "Mentorship",
    icon: "🧑‍🏫",
    title: "500+ Industry Mentors",
    desc: "Your employees get matched with practitioners who've actually done it — not academics. Real projects, real feedback, real growth.",
    points: [
      "AI-matched mentors by domain & seniority",
      "Structured capstone project reviews",
      "1:1 career coaching sessions",
      "Asynchronous feedback workflows",
    ],
    visual: { type: "mentors" },
  },
  {
    tab: "Cohorts",
    icon: "👥",
    title: "Cohort Learning System",
    desc: "Synchronized learning paths with peer accountability. Our cohort model consistently delivers 94%+ completion rates.",
    points: [
      "Peer discussion forums & group projects",
      "Weekly live sessions with industry experts",
      "Gamified leaderboards & badges",
      "Cross-functional team cohorts",
    ],
    visual: { type: "cohort" },
  },
  {
    tab: "Credentials",
    icon: "🏆",
    title: "Globally Recognized Certs",
    desc: "Every credential is co-badged with the issuing institution and verifiable on-chain. Employees carry them for life.",
    points: [
      "IIT & IIM co-branded certificates",
      "Verifiable digital badges",
      "LinkedIn-shareable credentials",
      "Industry partner endorsements",
    ],
    visual: { type: "cert" },
  },
];

const mentorAvatars = [
  { name: "Priya S.", role: "ML Lead, Google", letter: "P", bg: "#1a56db" },
  { name: "Rahul K.", role: "Data Eng, Meta", letter: "R", bg: "#7c3aed" },
  { name: "Anita M.", role: "PM, Flipkart", letter: "A", bg: "#059669" },
  { name: "Dev R.", role: "CEO, Ex-Uber", letter: "D", bg: "#ea580c" },
  { name: "Shruti L.", role: "CHRO, TCS", letter: "S", bg: "#e11d48" },
  { name: "Kiran B.", role: "AI Researcher", letter: "K", bg: "#0284c7" },
];

function FeatureVisual({ feature }: { feature: typeof features[0] }) {
  const v = feature.visual;

  if (v.type === "chart" && v.data) {
    const max = Math.max(...v.data);
    return (
      <div className="rounded-2xl p-6" style={{ background: "#0a1628" }}>
        <div className="flex items-end justify-between gap-2 h-40">
          {v.data.map((val, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t-lg transition-all duration-1000 hover:opacity-80 cursor-pointer relative group"
                style={{
                  height: `${(val / max) * 100}%`,
                  background: "linear-gradient(to top, #1a56db, #60a5fa)",
                  minHeight: 8,
                }}
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white rounded px-1.5 py-0.5 text-xs font-bold text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {val}%
                </div>
              </div>
              <span className="text-gray-500 text-xs">{v.labels?.[i]}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <span className="text-white font-semibold text-sm">Completion Rate Trend</span>
          <span className="ml-3 text-green-400 text-sm font-bold">↑ 31% YTD</span>
        </div>
      </div>
    );
  }

  if (v.type === "mentors") {
    return (
      <div className="rounded-2xl p-6" style={{ background: "#0a1628" }}>
        <div className="grid grid-cols-3 gap-3">
          {mentorAvatars.map((m, i) => (
            <div
              key={i}
              className="rounded-xl p-3 text-center transition-all duration-300 hover:scale-105 cursor-pointer group"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2 transition-transform duration-300 group-hover:scale-110"
                style={{ background: m.bg }}
              >
                {m.letter}
              </div>
              <div className="text-white text-xs font-semibold">{m.name}</div>
              <div className="text-gray-500 text-xs">{m.role}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-sm mt-4">500+ mentors across 30+ domains</p>
      </div>
    );
  }

  if (v.type === "cohort") {
    const members = ["A", "B", "C", "D", "E", "F", "G", "H"];
    return (
      <div className="rounded-2xl p-6" style={{ background: "#0a1628" }}>
        <div className="flex flex-wrap gap-2 mb-4">
          {members.map((m, i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold transition-all duration-300 hover:scale-110 cursor-pointer"
              style={{ background: `hsl(${220 + i * 15}, 70%, 45%)` }}
            >
              {m}
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {["Week 1: Foundations", "Week 3: Deep Dive", "Week 6: Capstone", "Week 8: Certification"].map((w, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: i <= 1 ? "#60a5fa" : "rgba(255,255,255,0.2)" }} />
              <div className="flex-1 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
                <div className="h-full rounded-full" style={{ background: "linear-gradient(to right, #1a56db, #60a5fa)", width: i === 0 ? "100%" : i === 1 ? "65%" : i === 2 ? "30%" : "0%" }} />
              </div>
              <span className="text-gray-400 text-xs">{w}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-sm mt-4">94% avg. completion rate</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl p-6 flex flex-col items-center justify-center" style={{ background: "#0a1628", minHeight: 220 }}>
      <div className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl mb-4" style={{ background: "rgba(26,86,219,0.2)", border: "2px solid rgba(26,86,219,0.3)" }}>
        🏆
      </div>
      <div className="text-white font-semibold mb-1">IIT Bombay × Accredian</div>
      <div className="text-gray-400 text-sm">Certificate of Excellence</div>
      <div className="mt-3 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(96,165,250,0.2)", color: "#60a5fa" }}>
        Blockchain Verified ✓
      </div>
    </div>
  );
}

export default function Features() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const f = features[active];

  return (
    <section id="features" style={{ background: "#f8faff", padding: "100px 0" }}>
      <div className="blob" style={{ width: 400, height: 400, background: "#60a5fa", right: -100, top: "30%" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-5"
            style={{ background: "#eef3ff", color: "#1a56db", border: "1px solid #c7d9ff" }}>
            ✦ Platform Features
          </div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "Sora, sans-serif", color: "#0a1628", letterSpacing: "-0.02em" }}
          >
            Built for <span className="gradient-text">Enterprise Scale</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Every feature engineered to maximize learner outcomes and deliver measurable ROI.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {features.map((feat, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
              style={{
                background: active === i ? "linear-gradient(135deg, #1a56db, #2563eb)" : "white",
                color: active === i ? "white" : "#374151",
                border: active === i ? "none" : "1.5px solid #e5e7eb",
                boxShadow: active === i ? "0 8px 24px rgba(26,86,219,0.3)" : "none",
                transform: active === i ? "translateY(-2px)" : "none",
              }}
            >
              <span>{feat.icon}</span>
              {feat.tab}
            </button>
          ))}
        </div>

        {/* Feature display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center" key={active}>
          <div className="reveal-left">
            <h3
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "Sora, sans-serif", color: "#0a1628" }}
            >
              {f.title}
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">{f.desc}</p>
            <ul className="space-y-3">
              {f.points.map((pt, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5"
                    style={{ background: "linear-gradient(135deg, #1a56db, #2563eb)" }}
                  >
                    ✓
                  </div>
                  <span className="text-gray-700 font-medium">{pt}</span>
                </li>
              ))}
            </ul>
            <button
              className="mt-8 btn-primary"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span>Learn More →</span>
            </button>
          </div>

          <div className="reveal-right">
            <FeatureVisual feature={f} />
          </div>
        </div>
      </div>
    </section>
  );
}
