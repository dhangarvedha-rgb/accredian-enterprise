"use client";
import { useState, useEffect } from "react";

const companyTypes = ["Startup (1–50)", "SME (51–500)", "Enterprise (500+)", "MNC (5000+)"];
const domains = ["AI & Data Science", "Engineering", "Product Management", "Leadership", "Digital Marketing", "Finance", "Other"];

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", companyType: "", domain: "", teamSize: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = "Valid email required";
    if (!form.company.trim()) errs.company = "Company is required";
    if (!form.companyType) errs.companyType = "Please select company type";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, submittedAt: new Date().toISOString() }),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => { const n = { ...e }; delete n[field]; return n; });
  };

  if (status === "success") {
    return (
      <section id="contact" style={{ background: "#f8faff", padding: "100px 0" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="rounded-3xl p-12" style={{ background: "white", border: "1px solid #e5e7eb", boxShadow: "0 24px 60px rgba(10,22,40,0.08)" }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 animate-scale-in" style={{ background: "linear-gradient(135deg, #dcfce7, #bbf7d0)" }}>
              ✅
            </div>
            <h3 className="text-3xl font-extrabold mb-3" style={{ fontFamily: "Sora, sans-serif", color: "#0a1628" }}>
              You&apos;re on the list!
            </h3>
            <p className="text-gray-600 mb-2">Our enterprise team will reach out within <strong>24 hours</strong> to schedule your personalized demo.</p>
            <p className="text-sm text-gray-400">Check your inbox for a confirmation email.</p>
            <button
              className="mt-8 btn-primary px-8 py-3"
              onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", company: "", companyType: "", domain: "", teamSize: "", message: "" }); }}
            >
              <span>Submit Another →</span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" style={{ background: "#f8faff", padding: "100px 0" }}>
      <div className="blob" style={{ width: 500, height: 500, background: "#1a56db", right: -150, top: -100 }} />
      <div className="blob" style={{ width: 300, height: 300, background: "#60a5fa", left: -100, bottom: 0 }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <div className="reveal-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ background: "#eef3ff", color: "#1a56db", border: "1px solid #c7d9ff" }}>
              ✦ Get a Custom Proposal
            </div>
            <h2
              className="text-4xl lg:text-5xl font-extrabold mb-5"
              style={{ fontFamily: "Sora, sans-serif", color: "#0a1628", letterSpacing: "-0.02em" }}
            >
              Start Your <span className="gradient-text">Enterprise Journey</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Our consultants will map your skill gaps, business goals, and requirements — then design a custom program that delivers measurable ROI.
            </p>

            {/* What to expect */}
            <div className="space-y-5 mb-10">
              {[
                { icon: "📞", title: "Discovery Call", desc: "30-min strategy session to understand your goals and team structure" },
                { icon: "🗺️", title: "Skills Assessment", desc: "Free skills gap analysis for your target teams" },
                { icon: "📋", title: "Custom Proposal", desc: "Tailored curriculum and pricing delivered within 48 hours" },
                { icon: "🚀", title: "Pilot Program", desc: "Optional 2-week pilot with 10 learners, risk-free" },
              ].map((step, i) => (
                <div
                  key={i}
                  className="reveal flex items-start gap-4"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: "#eef3ff" }}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{step.title}</div>
                    <div className="text-sm text-gray-500">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-3">
              {["No commitment required", "Free pilot available", "24hr response SLA", "SOC 2 Compliant"].map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium"
                  style={{ background: "#f0fdf4", color: "#15803d", border: "1px solid #bbf7d0" }}
                >
                  <span className="text-green-500">✓</span>
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            className="reveal-right rounded-3xl p-8"
            style={{ background: "white", boxShadow: "0 24px 80px rgba(10,22,40,0.1)", border: "1px solid #e5e7eb" }}
          >
            <h3 className="text-xl font-bold mb-2" style={{ color: "#0a1628" }}>Book a Free Demo</h3>
            <p className="text-sm text-gray-500 mb-6">Fill in the form and we&apos;ll be in touch within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name *</label>
                  <input
                    className={`form-input ${errors.name ? "!border-red-400" : focused === "name" ? "!border-blue-500" : ""}`}
                    placeholder="Arjun Mehta"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Work Email *</label>
                  <input
                    className={`form-input ${errors.email ? "!border-red-400" : focused === "email" ? "!border-blue-500" : ""}`}
                    placeholder="arjun@company.com"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone</label>
                  <input
                    className="form-input"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Company *</label>
                  <input
                    className={`form-input ${errors.company ? "!border-red-400" : ""}`}
                    placeholder="Company name"
                    value={form.company}
                    onChange={(e) => update("company", e.target.value)}
                    onFocus={() => setFocused("company")}
                    onBlur={() => setFocused(null)}
                  />
                  {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Company Size *</label>
                <div className="grid grid-cols-2 gap-2">
                  {companyTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => update("companyType", type)}
                      className="py-2.5 px-3 rounded-xl text-sm font-medium border transition-all duration-200 text-left"
                      style={{
                        background: form.companyType === type ? "#eef3ff" : "white",
                        borderColor: form.companyType === type ? "#1a56db" : "#e5e7eb",
                        color: form.companyType === type ? "#1a56db" : "#4b5563",
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                {errors.companyType && <p className="text-red-500 text-xs mt-1">{errors.companyType}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Domain of Interest</label>
                <select
                  className="form-input"
                  value={form.domain}
                  onChange={(e) => update("domain", e.target.value)}
                >
                  <option value="">Select a domain...</option>
                  {domains.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Team Size to Upskill</label>
                <input
                  className="form-input"
                  placeholder="e.g. 50 engineers"
                  value={form.teamSize}
                  onChange={(e) => update("teamSize", e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Additional Context</label>
                <textarea
                  className="form-input"
                  rows={3}
                  placeholder="Tell us about your learning goals, challenges, or timeline..."
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  style={{ resize: "none" }}
                />
              </div>

              {status === "error" && (
                <div className="p-3 rounded-xl text-sm" style={{ background: "#fef2f2", color: "#dc2626", border: "1px solid #fecaca" }}>
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-xl font-bold text-base text-white transition-all duration-300 relative overflow-hidden"
                style={{
                  background: status === "loading"
                    ? "#9ca3af"
                    : "linear-gradient(135deg, #1a56db, #2563eb)",
                  boxShadow: status !== "loading" ? "0 8px 32px rgba(26,86,219,0.35)" : "none",
                  transform: status === "loading" ? "none" : undefined,
                }}
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  "Book My Free Demo →"
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                By submitting, you agree to our{" "}
                <span className="underline cursor-pointer hover:text-blue-500">Privacy Policy</span>.
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
