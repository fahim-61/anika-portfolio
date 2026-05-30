export default function Portfolio() {
  const projects = [
    {
      title: "Slide Presentation Design for Client",
      category: "Presentation Design",
      views: "1,010",
      appreciations: 11,
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/affb2d238637541.6924609d90658.png",
      link: "https://www.behance.net/gallery/238637541/Slide-Presentation-Design-for-Client",
    },
    {
      title: "Arabic Logo Collection — VOL 1 (2025)",
      category: "Logo Design",
      views: "2,727",
      appreciations: 44,
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/fa0f87231160461.Y3JvcCwxMDA2LDc4NywwLDA.jpg",
      link: "https://www.behance.net/gallery/231160461/Arabic-Logo-Collection-VOL-1(2025)",
    },
    {
      title: "Logo & Brand Identity for German Wine Restaurant",
      category: "Branding",
      views: "2,828",
      appreciations: 11,
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/12ae98229000703.Y3JvcCwzMDAwLDIzNDYsMCw4MzE.jpg",
      link: "https://www.behance.net/gallery/229000703/Logo-and-Brand-identity-for-German-wine-restaurant",
    },
    {
      title: 'Logo & Brand Identity for Crypto Company "Node"',
      category: "Branding",
      views: "5,757",
      appreciations: 66,
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/d4dbce226303417.Y3JvcCwzMDAwLDIzNDYsMCwzMjY.jpg",
      link: "https://www.behance.net/gallery/226303417/Logo-Brand-identity-for-crypto-company-Node",
    },
    {
      title: "Perfume & Organic Mart Logo and Brand Identity",
      category: "Branding",
      views: "121",
      appreciations: 12,
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/ea7a19225603925.Y3JvcCw1NTg4LDQzNzAsMCwxNDM4.jpg",
      link: "https://www.behance.net/gallery/225603925/Perfume-and-organic-mart-logo-and-brand-identity",
    },
    {
      title: "Portfolio — Graphic Designer",
      category: "Portfolio",
      views: "6,161",
      appreciations: 11,
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/9c9f99212396829.69b6f49649c6f.png",
      link: "https://www.behance.net/gallery/212396829/Portfolio-graphic-designer",
    },
  ];

  const services = [
    { label: "Logo Design", icon: "✦" },
    { label: "Brand Identity", icon: "◈" },
    { label: "Arabic Typography", icon: "ع" },
    { label: "Presentation Design", icon: "▨" },
    { label: "Social Media Design", icon: "⊞" },
    { label: "Print & Digital", icon: "◉" },
  ];

  const stats = [
    { value: "316+", label: "Project Views" },
    { value: "38", label: "Total Appreciations" },
    { value: "6+", label: "Projects Published" },
    { value: "16", label: "Followers" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        color: "#1a1a1a",
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,600;0,9..40,800;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap');
        :root {
          --sea: #2e8b70;
          --sea-dark: #1c6652;
          --sea-light: #e6f5f1;
          --sea-mid: #3aaa87;
          --sea-accent: #d4ede7;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; }
        .serif { font-family: 'DM Serif Display', serif; }
        .project-card:hover .project-img { transform: scale(1.06); }
        .btn-primary {
          background: var(--sea);
          color: #fff;
          border: none;
          padding: 14px 32px;
          border-radius: 100px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          text-decoration: none;
          display: inline-block;
        }
        .btn-primary:hover { background: var(--sea-dark); transform: translateY(-1px); }
        .btn-outline {
          background: transparent;
          color: var(--sea);
          border: 1.5px solid var(--sea);
          padding: 13px 32px;
          border-radius: 100px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          text-decoration: none;
          display: inline-block;
        }
        .btn-outline:hover { background: var(--sea-light); }
        .stat-card {
          border: 1px solid #e0e0e0;
          border-radius: 20px;
          padding: 32px 24px;
          text-align: center;
          transition: border-color 0.2s;
        }
        .stat-card:hover { border-color: var(--sea); }
        .tag {
          display: inline-block;
          background: var(--sea-accent);
          color: var(--sea-dark);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 4px 14px;
          border-radius: 100px;
          text-transform: uppercase;
        }
        .nav-link {
          color: #444;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-link:hover { color: var(--sea); }
        .divider {
          width: 48px;
          height: 3px;
          background: var(--sea);
          border-radius: 4px;
          margin: 16px 0 24px;
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .services-grid { grid-template-columns: 1fr 1fr !important; }
          .cta-inner { padding: 40px 24px !important; }
          .h1-size { font-size: 48px !important; }
          .h2-size { font-size: 32px !important; }
          .footer-inner { flex-direction: column !important; gap: 16px !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ borderBottom: "1px solid #f0f0f0", padding: "0 48px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68, position: "sticky", top: 0, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", zIndex: 100 }}>
        <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: "var(--sea)", letterSpacing: "-0.01em" }}>Anika.</span>
        <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
          <a href="#about" className="nav-link">About</a>
          <a href="#work" className="nav-link">Work</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="https://www.behance.net/anika_ashraf_2325" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "9px 22px", fontSize: 14 }}>Behance ↗</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "80px 48px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <span className="tag">Available for Freelance</span>
            <h1 className="h1-size serif" style={{ fontSize: 72, lineHeight: 1.05, marginTop: 20, marginBottom: 20, letterSpacing: "-0.02em", color: "#111" }}>
              Logo & Brand<br />
              <span style={{ color: "var(--sea)" }}>Identity</span><br />
              Designer.
            </h1>
            <p style={{ fontSize: 17, color: "#555", lineHeight: 1.75, maxWidth: 440, marginBottom: 36 }}>
              Hi, I'm <strong>Anika Ashraf</strong> — a student at the University of Rajshahi, Bangladesh, and a passionate logo & brand identity designer. I create meaningful visuals that help brands stand out.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#work" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-outline">Hire Me</a>
            </div>
            <div style={{ marginTop: 40, display: "flex", gap: 32 }}>
              {[["38", "Appreciations"], ["316+", "Views"], ["6+", "Projects"]].map(([v, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 26, fontWeight: 800, color: "var(--sea)" }}>{v}</div>
                  <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: -24, right: -24, width: 320, height: 320, background: "var(--sea-accent)", borderRadius: "50%", zIndex: 0 }} />
            <div style={{ position: "relative", zIndex: 1, borderRadius: 32, overflow: "hidden", border: "3px solid var(--sea-accent)" }}>
              <img
                src="https://pps.services.adobe.com/api/profile/EF276B7764A297C30A495FC1@AdobeID/image/983053a6-18ab-47c7-ae65-02cee3589a80/276"
                alt="Anika Ashraf"
                style={{ width: "100%", height: 500, objectFit: "cover", display: "block" }}
              />
            </div>
            <div style={{ position: "absolute", bottom: 28, left: -20, background: "#fff", border: "1px solid #e8e8e8", borderRadius: 16, padding: "14px 20px", boxShadow: "0 8px 32px rgba(0,0,0,0.08)", zIndex: 2 }}>
              <div style={{ fontSize: 12, color: "#888", marginBottom: 2 }}>📍 Location</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#111" }}>Rajshahi, Bangladesh</div>
            </div>
            <div style={{ position: "absolute", top: 32, left: -20, background: "var(--sea)", borderRadius: 16, padding: "14px 20px", zIndex: 2 }}>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginBottom: 2 }}>Member Since</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>Sep 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ background: "var(--sea-light)", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="hero-grid">
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--sea)", marginBottom: 8 }}>About Me</p>
              <div className="divider" />
              <h2 className="h2-size serif" style={{ fontSize: 42, lineHeight: 1.15, color: "#111", marginBottom: 24, letterSpacing: "-0.01em" }}>
                Designing Visual Identities That Last.
              </h2>
              <p style={{ fontSize: 16, color: "#555", lineHeight: 1.8, marginBottom: 20 }}>
                I'm a student currently studying at the <strong>University of Rajshahi, Bangladesh</strong>, and a Logo & Brand Identity designer. I specialize in creating compelling brand visuals — from logos to full identity systems.
              </p>
              <p style={{ fontSize: 16, color: "#555", lineHeight: 1.8 }}>
                I hope I can help you through my work. Feel free to knock me if you want me as your designer — Happy Designing!
              </p>
              <div style={{ marginTop: 32, display: "flex", gap: 16 }}>
                <a href="http://instagram.com/the_silly_brush" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: 14, padding: "10px 22px" }}>Instagram</a>
                <a href="https://www.behance.net/anika_ashraf_2325" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 14, padding: "10px 22px" }}>Behance</a>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--sea)", marginBottom: 8 }}>Services</p>
              <div className="divider" />
              <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {services.map((s) => (
                  <div key={s.label} style={{ background: "#fff", border: "1px solid #e0f0ea", borderRadius: 16, padding: "20px 20px", display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ fontSize: 22, color: "var(--sea)" }}>{s.icon}</span>
                    <span style={{ fontSize: 15, fontWeight: 600, color: "#222" }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "64px 48px", borderBottom: "1px solid #f0f0f0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {stats.map((s) => (
              <div key={s.label} className="stat-card">
                <div style={{ fontSize: 48, fontWeight: 800, color: "var(--sea)", letterSpacing: "-0.02em" }}>{s.value}</div>
                <div style={{ fontSize: 14, color: "#777", marginTop: 8, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" style={{ padding: "80px 48px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--sea)", marginBottom: 8 }}>Featured Projects</p>
            <div className="divider" />
            <h2 className="h2-size serif" style={{ fontSize: 42, lineHeight: 1.15, color: "#111", letterSpacing: "-0.01em", maxWidth: 500 }}>
              Real Work. Real Brands. Real Impact.
            </h2>
          </div>
          <a href="https://www.behance.net/anika_ashraf_2325/projects" target="_blank" rel="noopener noreferrer" className="btn-outline">
            All on Behance ↗
          </a>
        </div>

        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 28 }}>
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              style={{ borderRadius: 24, overflow: "hidden", border: "1px solid #ebebeb", background: "#fff", textDecoration: "none", color: "inherit", display: "block", transition: "box-shadow 0.3s, border-color 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(46,139,112,0.12)"; e.currentTarget.style.borderColor = "var(--sea)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#ebebeb"; }}
            >
              <div style={{ overflow: "hidden", height: 260 }}>
                <img
                  src={p.image}
                  alt={p.title}
                  className="project-img"
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s" }}
                />
              </div>
              <div style={{ padding: "22px 24px 24px" }}>
                <span className="tag">{p.category}</span>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#111", margin: "12px 0 10px", lineHeight: 1.3 }}>{p.title}</h3>
                <div style={{ display: "flex", gap: 20, fontSize: 13, color: "#888" }}>
                  <span>❤ {p.appreciations} appreciations</span>
                  <span>👁 {p.views} views</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" style={{ padding: "64px 48px", background: "var(--sea-light)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="cta-inner" style={{ background: "var(--sea)", borderRadius: 32, padding: "72px 64px", textAlign: "center" }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 16 }}>Let's Work Together</p>
            <h2 className="serif h2-size" style={{ fontSize: 52, color: "#fff", lineHeight: 1.15, marginBottom: 20, letterSpacing: "-0.01em" }}>
              Have a Brand to Build?
            </h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.75 }}>
              Available for freelance logo design, brand identity, and presentation design projects. Let's create something meaningful together.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="http://instagram.com/the_silly_brush" target="_blank" rel="noopener noreferrer" style={{ background: "#fff", color: "var(--sea-dark)", border: "none", padding: "14px 32px", borderRadius: 100, fontSize: 15, fontWeight: 700, cursor: "pointer", textDecoration: "none" }}>
                Instagram DM
              </a>
              <a href="https://www.behance.net/anika_ashraf_2325" target="_blank" rel="noopener noreferrer" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.3)", padding: "13px 32px", borderRadius: 100, fontSize: 15, fontWeight: 600, cursor: "pointer", textDecoration: "none" }}>
                View Behance ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #f0f0f0", padding: "28px 48px" }}>
        <div className="footer-inner" style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, color: "var(--sea)" }}>Anika Ashraf</span>
          <p style={{ fontSize: 14, color: "#888" }}>© 2026 Anika Ashraf · Rajshahi, Bangladesh</p>
          <div style={{ display: "flex", gap: 24 }}>
            {[["Behance", "https://www.behance.net/anika_ashraf_2325"], ["Instagram", "http://instagram.com/the_silly_brush"], ["LinkedIn", "https://www.linkedin.com/in/anika-ashraf"]].map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ color: "#555", textDecoration: "none", fontSize: 14, fontWeight: 500 }}
                onMouseEnter={e => e.target.style.color = "var(--sea)"}
                onMouseLeave={e => e.target.style.color = "#555"}
              >{label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
