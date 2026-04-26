"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    icon: "🔍",
    title: "Needs Discovery",
    desc: "Our L&D consultants run a deep-dive discovery session to map your skill gaps, team structure, business goals, and timeline.",
    detail: "Free 30-minute consultation · Skills gap analysis · ROI projection",
    color: "#1a56db",
  },
  {
    number: "02",
    icon: "🎨",
    title: "Custom Program Design",
    desc: "We co-design a bespoke curriculum with your partner institution — tailored to your tech stack, culture, and strategic priorities.",
    detail: "University collaboration · Custom modules · Industry relevance review",
    color: "#7c3aed",
  },
  {
    number: "03",
    icon: "🚀",
    title: "Cohort Launch",
    desc: "Your first cohort is onboarded to the platform within 2 weeks. Learners get access to live sessions, mentors, and resources.",
    detail: "Smooth onboarding · LMS access · Mentor matching",
    color: "#059669",
  },
  {
    number: "04",
    icon: "📊",
    title: "Track & Optimize",
    desc: "Real-time dashboards let you monitor engagement, progress, and outcomes. Monthly business reviews with your dedicated CSM.",
    detail: "Live analytics · Monthly reviews · Adaptive improvements",
    color: "#ea580c",
  },
  {
    number: "05",
    icon: "🏆",
    title: "Certify & Scale",
    desc: "Top performers receive globally recognized credentials. Successful cohorts become the foundation for org-wide L&D programs.",
    detail: "Dual certification · Alumni network · Program expansion",
    color: "#d97706",
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((s) => (s + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ background: "#f8faff", padding: "100px 0" }}>
      <div className="blob" style={{ width: 400, height: 400, background: "#1a56db", right: -100, top: "20%" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-5"
            style={{ background: "#eef3ff", color: "#1a56db", border: "1px solid #c7d9ff" }}>
            ✦ Our Process
          </div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "Sora, sans-serif", color: "#0a1628", letterSpacing: "-0.02em" }}
          >
            From Kickoff to <span className="gradient-text">Measurable Impact</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            A proven 5-step framework used by 500+ enterprises to build winning L&amp;D programs.
          </p>
        </div>

        {/* Desktop — horizontal stepper */}
        <div className="hidden lg:block reveal">
          {/* Step numbers + connector */}
          <div className="relative flex items-start justify-between mb-8">
            {/* Progress line */}
            <div
              className="absolute top-7 left-0 right-0 h-0.5 mx-14"
              style={{ background: "#e5e7eb" }}
            />
            <div
              className="absolute top-7 left-0 h-0.5 mx-14 transition-all duration-700"
              style={{
                background: "linear-gradient(to right, #1a56db, #60a5fa)",
                width: `${(activeStep / (steps.length - 1)) * 100}%`,
              }}
            />

            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className="relative flex flex-col items-center gap-3 flex-1 z-10 group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-400"
                  style={{
                    background: i <= activeStep ? `linear-gradient(135deg, ${step.color}, ${step.color}bb)` : "white",
                    border: `2px solid ${i <= activeStep ? step.color : "#e5e7eb"}`,
                    boxShadow: i === activeStep ? `0 8px 24px ${step.color}40` : "none",
                    transform: i === activeStep ? "scale(1.15)" : "scale(1)",
                  }}
                >
                  {step.icon}
                </div>
                <span
                  className="text-sm font-bold text-center"
                  style={{ color: i <= activeStep ? "#0a1628" : "#9ca3af" }}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active step content */}
          <div
            className="rounded-3xl p-10 transition-all duration-400"
            style={{
              background: "white",
              border: "1px solid #e5e7eb",
              boxShadow: "0 16px 48px rgba(10,22,40,0.07)",
            }}
            key={activeStep}
          >
            <div className="flex items-start gap-8">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                style={{ background: `${steps[activeStep].color}15` }}
              >
                {steps[activeStep].icon}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="text-xs font-bold px-2 py-1 rounded-full"
                    style={{ background: `${steps[activeStep].color}15`, color: steps[activeStep].color }}
                  >
                    Step {steps[activeStep].number}
                  </span>
                  <h3 className="text-2xl font-bold" style={{ color: "#0a1628" }}>{steps[activeStep].title}</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">{steps[activeStep].desc}</p>
                <div className="flex flex-wrap gap-2">
                  {steps[activeStep].detail.split(" · ").map((d) => (
                    <span
                      key={d}
                      className="text-sm px-3 py-1.5 rounded-lg font-medium"
                      style={{ background: "#f3f4f6", color: "#374151" }}
                    >
                      ✓ {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile — vertical cards */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="reveal rounded-2xl p-6 border"
              style={{ borderColor: "#e5e7eb", background: "white", transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: `${step.color}15` }}
                >
                  {step.icon}
                </div>
                <div>
                  <span className="text-xs font-bold" style={{ color: step.color }}>Step {step.number}</span>
                  <h3 className="font-bold mt-0.5 mb-2" style={{ color: "#0a1628" }}>{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
