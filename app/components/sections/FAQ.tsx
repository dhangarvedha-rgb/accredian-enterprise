"use client";
import { useState, useEffect } from "react";

const faqs = [
  {
    q: "How quickly can we launch a program?",
    a: "Most enterprise programs can be launched within 2–4 weeks from the date of contract signing. For custom programs with new institution partnerships, expect 4–6 weeks for curriculum co-design. We offer a 2-week pilot track for fast-moving organizations.",
  },
  {
    q: "Do you offer customized curricula or only off-the-shelf programs?",
    a: "Both. Our catalog has 50+ ready-to-deploy programs. For organizations with specific needs — niche tech stacks, unique roles, or particular business contexts — we co-design bespoke curricula with our partner institutions. Custom programs are available for cohorts of 25+.",
  },
  {
    q: "What is the minimum team size for enterprise programs?",
    a: "Our cohort-based programs work best with a minimum of 10 participants. For organization-wide deployments, we've successfully managed programs from 10 to 10,000+ employees. We also offer blended cohorts where employees from different companies learn together.",
  },
  {
    q: "How are completion rates maintained above 90%?",
    a: "Our platform combines cohort accountability (peers progress together), 1:1 mentor nudges, weekly live sessions, gamified milestones, and AI-powered engagement alerts. Your dedicated Customer Success Manager also runs monthly check-ins to course-correct early.",
  },
  {
    q: "Are the credentials recognized internationally?",
    a: "Yes. Certificates issued by our IIT and IIM partners carry institutional credibility recognized across India, Southeast Asia, the Middle East, and increasingly in Europe. Each credential is verifiable via a unique QR code and shareable on LinkedIn.",
  },
  {
    q: "What does pricing look like?",
    a: "Pricing is per-learner, per-program and varies by program duration, institution partner, and cohort size. Volume discounts apply for 100+ learners. We'll send a detailed proposal within 48 hours of your discovery call. No hidden fees.",
  },
  {
    q: "Do you integrate with our existing LMS or HRIS?",
    a: "Yes. Accredian Enterprise integrates with major LMS platforms (Moodle, Cornerstone, SAP SuccessFactors, Workday Learning) via SCORM and xAPI. We also offer SSO, HRMS data sync, and REST APIs for custom integrations.",
  },
  {
    q: "Is there a free trial or pilot option?",
    a: "Absolutely. We offer a 2-week, 10-seat pilot for qualified enterprise prospects. This includes full platform access, a sample cohort, and a live mentorship session — completely risk-free. Contact us to see if you qualify.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ background: "white", padding: "100px 0" }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-5"
            style={{ background: "#eef3ff", color: "#1a56db", border: "1px solid #c7d9ff" }}>
            ✦ Frequently Asked Questions
          </div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "Sora, sans-serif", color: "#0a1628", letterSpacing: "-0.02em" }}
          >
            Got <span className="gradient-text">Questions?</span>
          </h2>
          <p className="text-lg text-gray-600">Everything you need to know before partnering with us.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="reveal rounded-2xl border overflow-hidden transition-all duration-300"
              style={{
                borderColor: open === i ? "#c7d9ff" : "#e5e7eb",
                background: open === i ? "#f8faff" : "white",
                transitionDelay: `${i * 40}ms`,
              }}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="font-semibold text-base transition-colors"
                  style={{ color: open === i ? "#1a56db" : "#0a1628" }}
                >
                  {faq.q}
                </span>
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                  style={{
                    background: open === i ? "#1a56db" : "#f3f4f6",
                    color: open === i ? "white" : "#6b7280",
                    transform: open === i ? "rotate(45deg)" : "none",
                  }}
                >
                  +
                </div>
              </button>

              <div
                style={{
                  maxHeight: open === i ? "300px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <p className="px-6 pb-5 text-gray-600 leading-relaxed text-sm">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center reveal">
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <button
            className="btn-primary px-8 py-3"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span>Talk to Our Team →</span>
          </button>
        </div>
      </div>
    </section>
  );
}
