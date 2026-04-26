"use client";
import { useState, useEffect } from "react";

const categories = ["All", "AI & Data", "Leadership", "Product", "Engineering"];

const programs = [
  {
    title: "Executive Program in AI & Machine Learning",
    institution: "IIT Delhi",
    duration: "11 Months",
    category: "AI & Data",
    level: "Advanced",
    badge: "🔥 Most Popular",
    modules: 24,
    mentors: 12,
    enrolled: "1,240",
    tags: ["Python", "Deep Learning", "MLOps", "LLMs"],
    color: "#1a56db",
  },
  {
    title: "Post Graduate Program in Data Science",
    institution: "IIT Bombay",
    duration: "9 Months",
    category: "AI & Data",
    level: "Intermediate",
    badge: "🏆 Top Rated",
    modules: 18,
    mentors: 8,
    enrolled: "980",
    tags: ["Statistics", "SQL", "Tableau", "Python"],
    color: "#7c3aed",
  },
  {
    title: "Executive Leadership & Strategy",
    institution: "IIM Bangalore",
    duration: "6 Months",
    category: "Leadership",
    level: "Senior",
    badge: "⭐ New Batch",
    modules: 12,
    mentors: 6,
    enrolled: "640",
    tags: ["Strategy", "OKRs", "Change Mgmt", "Finance"],
    color: "#059669",
  },
  {
    title: "Digital Product Management",
    institution: "IIM Calcutta",
    duration: "8 Months",
    category: "Product",
    level: "Intermediate",
    badge: "✨ Editor's Pick",
    modules: 16,
    mentors: 9,
    enrolled: "820",
    tags: ["Roadmapping", "Agile", "UX Research", "Metrics"],
    color: "#ea580c",
  },
  {
    title: "Cloud Engineering & DevOps",
    institution: "BITS Pilani",
    duration: "7 Months",
    category: "Engineering",
    level: "Intermediate",
    badge: "🚀 Fast Track",
    modules: 14,
    mentors: 7,
    enrolled: "560",
    tags: ["AWS", "Kubernetes", "CI/CD", "Terraform"],
    color: "#0284c7",
  },
  {
    title: "Business Analytics for Executives",
    institution: "IIM Ahmedabad",
    duration: "5 Months",
    category: "AI & Data",
    level: "Beginner",
    badge: "💼 Corporate Special",
    modules: 10,
    mentors: 5,
    enrolled: "1,100",
    tags: ["Excel", "PowerBI", "SQL", "Storytelling"],
    color: "#d97706",
  },
];

const levelColors: Record<string, string> = {
  Beginner: "#16a34a",
  Intermediate: "#d97706",
  Advanced: "#dc2626",
  Senior: "#7c3aed",
};

export default function Programs() {
  const [filter, setFilter] = useState("All");
  const [visible, setVisible] = useState(false);

  const filtered = filter === "All" ? programs : programs.filter((p) => p.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            setVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="programs" style={{ background: "white", padding: "100px 0" }}>
      <div className="blob" style={{ width: 450, height: 450, background: "#1a56db", right: -150, bottom: 0 }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-5"
            style={{ background: "#eef3ff", color: "#1a56db", border: "1px solid #c7d9ff" }}>
            ✦ Program Catalog
          </div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "Sora, sans-serif", color: "#0a1628", letterSpacing: "-0.02em" }}
          >
            Programs for Every <span className="gradient-text">Career Stage</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            50+ programs co-created with India&apos;s top institutions, designed for real-world impact.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-250"
              style={{
                background: filter === cat ? "#0a1628" : "#f3f4f6",
                color: filter === cat ? "white" : "#4b5563",
                transform: filter === cat ? "scale(1.04)" : "scale(1)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Program cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((prog, i) => (
            <div
              key={prog.title}
              className="reveal card-hover rounded-2xl overflow-hidden border group"
              style={{ borderColor: "#e5e7eb", transitionDelay: `${i * 80}ms` }}
            >
              {/* Header */}
              <div
                className="h-2 w-full"
                style={{ background: `linear-gradient(to right, ${prog.color}, ${prog.color}aa)` }}
              />
              <div className="p-6">
                {/* Badge + Level */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: `${prog.color}15`, color: prog.color }}
                  >
                    {prog.badge}
                  </span>
                  <span
                    className="text-xs font-semibold px-2 py-1 rounded-full"
                    style={{
                      background: `${levelColors[prog.level]}15`,
                      color: levelColors[prog.level],
                    }}
                  >
                    {prog.level}
                  </span>
                </div>

                <h3
                  className="font-bold text-base mb-1 group-hover:text-blue-700 transition-colors"
                  style={{ color: "#0a1628", lineHeight: 1.4 }}
                >
                  {prog.title}
                </h3>
                <div className="flex items-center gap-1.5 mb-4">
                  <div
                    className="w-5 h-5 rounded flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: prog.color }}
                  >
                    {prog.institution[0]}
                  </div>
                  <span className="text-sm text-gray-500 font-medium">{prog.institution}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {prog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md font-medium"
                      style={{ background: "#f3f4f6", color: "#374151" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats row */}
                <div
                  className="flex items-center justify-between py-3 border-t border-b mb-4 text-sm"
                  style={{ borderColor: "#f3f4f6" }}
                >
                  <div className="text-center">
                    <div className="font-bold text-gray-800">{prog.duration}</div>
                    <div className="text-gray-400 text-xs">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-800">{prog.modules}</div>
                    <div className="text-gray-400 text-xs">Modules</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-800">{prog.enrolled}</div>
                    <div className="text-gray-400 text-xs">Enrolled</div>
                  </div>
                </div>

                <button
                  className="w-full py-3 rounded-xl text-sm font-semibold transition-all duration-250 hover:opacity-90"
                  style={{
                    background: `linear-gradient(135deg, ${prog.color}, ${prog.color}cc)`,
                    color: "white",
                  }}
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Request Custom Cohort →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Browse more */}
        <div className="text-center mt-10 reveal">
          <p className="text-gray-500 mb-4">50+ programs available across 12 domains</p>
          <button
            className="btn-outline px-8 py-3"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Browse Full Catalog →
          </button>
        </div>
      </div>
    </section>
  );
}
