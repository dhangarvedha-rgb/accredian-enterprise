"use client";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    quote: "Accredian Enterprise transformed how we think about talent development. Within 6 months, our data engineering team's velocity improved by 40%. The ROI is undeniable.",
    name: "Arjun Mehta",
    role: "CHRO, FinTech Unicorn",
    company: "Razorpay",
    letter: "A",
    color: "#1a56db",
    rating: 5,
    metric: "40% velocity boost",
  },
  {
    quote: "The combination of IIT-quality curriculum and live mentorship is unlike anything else in the market. Our engineers are now capable of leading ML projects independently.",
    name: "Priya Sharma",
    role: "VP Engineering, BFSI",
    company: "HDFC Bank",
    letter: "P",
    color: "#7c3aed",
    rating: 5,
    metric: "3× ML project output",
  },
  {
    quote: "We onboarded 300 managers across three geographies simultaneously. The enterprise dashboard made tracking trivially easy. Completion rates hit 96% — unprecedented for us.",
    name: "Rohan Kapoor",
    role: "L&D Director",
    company: "Infosys",
    letter: "R",
    color: "#059669",
    rating: 5,
    metric: "96% completion rate",
  },
  {
    quote: "Our mid-level managers who completed the IIM program are now driving strategic initiatives. The curriculum depth and practical applicability exceeded our expectations.",
    name: "Neha Gupta",
    role: "Head of People & Culture",
    company: "Flipkart",
    letter: "N",
    color: "#ea580c",
    rating: 5,
    metric: "12 leaders promoted",
  },
  {
    quote: "Accredian's platform gave us real-time visibility into what our people are learning and where they're getting stuck. That alone justified the investment.",
    name: "Vikram Singh",
    role: "CEO",
    company: "D2C Startup",
    letter: "V",
    color: "#0284c7",
    rating: 5,
    metric: "2× team efficiency",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 250);
  };

  const next = () => goTo((active + 1) % testimonials.length);
  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    intervalRef.current = setInterval(next, 5500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [active]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const t = testimonials[active];

  return (
    <section id="testimonials" style={{ background: "white", padding: "100px 0" }}>
      <div className="blob" style={{ width: 500, height: 500, background: "#60a5fa", left: -150, bottom: -100 }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-5"
            style={{ background: "#eef3ff", color: "#1a56db", border: "1px solid #c7d9ff" }}>
            ✦ Customer Stories
          </div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "Sora, sans-serif", color: "#0a1628", letterSpacing: "-0.02em" }}
          >
            Loved by <span className="gradient-text">L&amp;D Leaders</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Hear from CHROs and L&amp;D directors who transformed their organizations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Sidebar */}
          <div className="space-y-3 reveal-left">
            {testimonials.map((test, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="w-full text-left rounded-2xl p-4 transition-all duration-300 flex items-center gap-4 group"
                style={{
                  background: active === i ? "linear-gradient(135deg, #0a1628, #112240)" : "white",
                  border: active === i ? "none" : "1.5px solid #e5e7eb",
                  boxShadow: active === i ? "0 12px 40px rgba(10,22,40,0.2)" : "none",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: test.color }}
                >
                  {test.letter}
                </div>
                <div className="text-left">
                  <div
                    className="font-semibold text-sm"
                    style={{ color: active === i ? "white" : "#0a1628" }}
                  >
                    {test.name}
                  </div>
                  <div className="text-xs" style={{ color: active === i ? "#9ca3af" : "#6b7280" }}>
                    {test.company}
                  </div>
                </div>
                {active === i && (
                  <span className="ml-auto text-xs font-bold px-2 py-1 rounded-full" style={{ background: "rgba(96,165,250,0.2)", color: "#60a5fa" }}>
                    {test.metric}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Main testimonial */}
          <div
            className="lg:col-span-2 reveal-right rounded-3xl p-10 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #f8faff, #eef3ff)",
              border: "1px solid #dbeafe",
            }}
          >
            {/* Quote mark */}
            <div
              className="absolute top-6 right-8 text-8xl font-bold opacity-10 select-none"
              style={{ color: t.color, fontFamily: "Georgia, serif", lineHeight: 1 }}
            >
              &ldquo;
            </div>

            <div
              style={{ opacity: animating ? 0 : 1, transform: animating ? "translateY(8px)" : "translateY(0)", transition: "all 0.25s ease" }}
            >
              <StarRating count={t.rating} />
              <blockquote
                className="text-xl lg:text-2xl font-medium mt-5 mb-8 leading-relaxed"
                style={{ color: "#0a1628" }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg"
                    style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}aa)` }}
                  >
                    {t.letter}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role} · {t.company}</div>
                  </div>
                </div>

                {/* Result chip */}
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-xl"
                  style={{ background: `${t.color}15`, border: `1px solid ${t.color}30` }}
                >
                  <span className="text-green-500 text-base">↑</span>
                  <span className="text-sm font-bold" style={{ color: t.color }}>{t.metric}</span>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-250 hover:bg-blue-50 hover:border-blue-200"
                style={{ borderColor: "#e5e7eb" }}
              >
                ←
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-250 hover:bg-blue-50 hover:border-blue-200"
                style={{ borderColor: "#e5e7eb" }}
              >
                →
              </button>
              {/* Dots */}
              <div className="flex items-center gap-2 ml-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: active === i ? 20 : 6,
                      height: 6,
                      background: active === i ? "#1a56db" : "#d1d5db",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
