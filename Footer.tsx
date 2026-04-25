"use client";

const footerLinks = {
  Platform: ["Features", "Analytics Dashboard", "Cohort Learning", "Mentorship Network", "Certifications", "AI Learning Engine"],
  Programs: ["AI & Machine Learning", "Data Science", "Product Management", "Leadership", "Engineering", "Browse All"],
  Company: ["About Us", "Careers", "Press Kit", "Blog", "Partners", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security", "Compliance"],
};

const socials = [
  { label: "LinkedIn", icon: "in", href: "#" },
  { label: "Twitter", icon: "𝕏", href: "#" },
  { label: "YouTube", icon: "▶", href: "#" },
  { label: "GitHub", icon: "⌥", href: "#" },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#0a1628", color: "white" }}>
      {/* CTA Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #1a56db 0%, #1d4ed8 50%, #1e40af 100%)",
          padding: "60px 24px",
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="text-3xl lg:text-4xl font-extrabold text-white mb-4"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Ready to Build a World-Class Workforce?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Join 500+ enterprises already transforming their L&amp;D with Accredian Enterprise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ background: "white", color: "#1a56db" }}
            >
              Book a Free Demo →
            </button>
            <button
              onClick={() => scrollTo("programs")}
              className="px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105"
              style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1.5px solid rgba(255,255,255,0.3)" }}
            >
              Explore Programs
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {/* Brand col */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                style={{ background: "linear-gradient(135deg, #1a56db, #2563eb)" }}
              >
                A
              </div>
              <span className="font-bold text-xl" style={{ fontFamily: "Sora, sans-serif" }}>
                Accredian <span style={{ color: "#60a5fa" }}>Enterprise</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              India&apos;s most trusted enterprise learning platform. Partner with IITs, IIMs, and global universities to upskill teams at scale.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm transition-all duration-250 hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.08)", color: "#9ca3af" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-bold text-sm mb-4 uppercase tracking-wider" style={{ color: "#9ca3af" }}>
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      onClick={(e) => { e.preventDefault(); }}
                      className="text-sm text-gray-500 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">›</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p>© {new Date().getFullYear()} Accredian (Fullstack Education Pvt. Ltd.) · All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              All systems operational
            </span>
            <span>Bengaluru · Gurugram · Mumbai</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
