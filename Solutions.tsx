"use client";
import { useEffect } from "react";

const solutions = [
  {
    icon: "🎓",
    title: "University-Grade Curriculum",
    desc: "Programs co-designed with IITs, IIMs, and global universities. Every course is rigorously structured for real-world applicability and industry relevance.",
    color: "#eef3ff",
    accent: "#1a56db",
  },
  {
    icon: "📊",
    title: "Real-Time Analytics Dashboard",
    desc: "Track completion rates, engagement scores, and ROI through a live command center. Make data-driven L&D decisions with clarity.",
    color: "#f0fdf4",
    accent: "#16a34a",
  },
  {
    icon: "🧑‍🏫",
    title: "Live 1:1 Mentorship",
    desc: "Industry practitioners guide your teams through capstone projects. 500+ mentors across AI/ML, Data Science, Product, and Leadership.",
    color: "#fff7ed",
    accent: "#ea580c",
  },
  {
    icon: "👥",
    title: "Cohort-Based Learning",
    desc: "Structured cohorts foster collaboration, accountability, and peer learning — driving completion rates above 94%.",
    color: "#fdf4ff",
    accent: "#9333ea",
  },
  {
    icon: "🔧",
    title: "Custom Program Design",
    desc: "Tailor programs to your organization's skill gaps, industry context, and strategic goals. No one-size-fits-all approach.",
    color: "#fff1f2",
    accent: "#e11d48",
  },
  {
    icon: "🏆",
    title: "Globally Recognized Credentials",
    desc: "Verifiable, shareable certifications from prestigious partner institutions. Career-defining credentials that boost retention.",
    color: "#fefce8",
    accent: "#d97706",
  },
  {
    icon: "🤖",
    title: "AI-Adaptive Learning Engine",
    desc: "Intelligent paths that adjust to each learner's pace and baseline. Surfaces the right content at the right time for maximum engagement.",
    color: "#f0f9ff",
    accent: "#0284c7",
  },
  {
    icon: "🌍",
    title: "Global Team Deployment",
    desc: "Seamlessly upskill distributed teams across different timezones. Designed for scale with enterprise-grade infrastructure.",
    color: "#f0fdf4",
    accent: "#059669",
  },
];

export default function Solutions() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="solutions" style={{ background: "white", padding: "100px 0" }}>
      {/* Decorations */}
      <div className="blob" style={{ width: 500, height: 500, background: "#1a56db", left: -200, top: "50%" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-5"
            style={{ background: "#eef3ff", color: "#1a56db", border: "1px solid #c7d9ff" }}>
            ✦ Complete Operating System for L&amp;D
          </div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-5"
            style={{ fontFamily: "Sora, sans-serif", color: "#0a1628", letterSpacing: "-0.02em" }}
          >
            Everything Your Team Needs to{" "}
            <span className="gradient-text">Grow Faster</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From curriculum design to analytics — Accredian Enterprise is the operating system for ambitious learning organizations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {solutions.map((s, i) => (
            <div
              key={i}
              className="reveal card-hover rounded-2xl p-6 border group cursor-pointer"
              style={{
                borderColor: "#e5e7eb",
                background: "white",
                transitionDelay: `${i * 60}ms`,
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: s.color }}
              >
                {s.icon}
              </div>
              {/* Accent line */}
              <div
                className="h-0.5 w-8 rounded-full mb-4 transition-all duration-300 group-hover:w-full"
                style={{ background: s.accent }}
              />
              <h3 className="font-bold text-base mb-2" style={{ color: "#0a1628" }}>
                {s.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center reveal">
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-6 rounded-3xl px-10 py-8"
            style={{
              background: "linear-gradient(135deg, #0a1628, #112240)",
              boxShadow: "0 24px 60px rgba(10,22,40,0.2)",
            }}
          >
            <div className="text-left">
              <p className="text-white font-bold text-lg">Ready to transform your L&amp;D?</p>
              <p className="text-gray-400 text-sm mt-1">Join 500+ enterprises already seeing results</p>
            </div>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary whitespace-nowrap px-8 py-4 text-base"
            >
              <span>Schedule a Consultation →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
