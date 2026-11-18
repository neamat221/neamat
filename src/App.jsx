import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import {
  FaCss3Alt,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaJava,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiC,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNetlify,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiReactrouter,
  SiSwagger,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import {
  profile,
  projects,
  skills,
  education,
  contests,
  certifications,
} from "./data.js";

const skillLogos = {
  C: { Icon: SiC, color: "#9fb3c8" },
  Java: { Icon: FaJava, color: "#f89820" },
  JavaScript: { Icon: SiJavascript, color: "#f7df1e" },
  Python: { Icon: SiPython, color: "#4b8bbe" },
  SQL: { Icon: FaDatabase, color: "#6ba3d0" },
  HTML5: { Icon: SiHtml5, color: "#e44d26" },
  CSS3: { Icon: FaCss3Alt, color: "#2f7fd1" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#38bdf8" },
  "React.js": { Icon: SiReact, color: "#61dafb" },
  "Next.js": { Icon: SiNextdotjs, color: "var(--ink)" },
  "React Router": { Icon: SiReactrouter, color: "#ca4245" },
  "Node.js": { Icon: SiNodedotjs, color: "#68a063" },
  "Express.js": { Icon: SiExpress, color: "var(--ink)" },
  "REST APIs": { Icon: SiSwagger, color: "#85ea2d" },
  MongoDB: { Icon: SiMongodb, color: "#47a248" },
  Firebase: { Icon: SiFirebase, color: "#ffa000" },
  Git: { Icon: SiGit, color: "#f05032" },
  GitHub: { Icon: SiGithub, color: "var(--ink)" },
  "VS Code": { Icon: VscVscode, color: "#3aa0f7" },
  Vercel: { Icon: SiVercel, color: "var(--ink)" },
  Netlify: { Icon: SiNetlify, color: "#00c7b7" },
};

function OrbitRing({ items, direction, duration }) {
  const angleStep = 360 / items.length;

  return (
    <ul
      className={`orbit-ring orbit-ring--${direction}`}
      style={{ "--duration": `${duration}s` }}
    >
      {items.map((item, index) => {
        const angle = index * angleStep;
        const { Icon, color } = skillLogos[item] ?? {};

        return (
          <li
            key={item}
            className="orbit-item"
            style={{
              "--angle": `${angle}deg`,
              "--negative-angle": `${-angle}deg`,
            }}
          >
            <span
              className="orbit-badge"
              data-label={item}
              aria-label={item}
              role="img"
              tabIndex={0}
            >
              <span className="orbit-logo" style={{ "--logo-color": color }}>
                {Icon ? <Icon aria-hidden="true" /> : item.slice(0, 2).toUpperCase()}
              </span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function TechOrbit() {
  const innerSkills = skills
    .filter((group) => ["Programming", "Frontend"].includes(group.group))
    .flatMap((group) => group.items);
  const outerSkills = skills
    .filter((group) => !["Programming", "Frontend"].includes(group.group))
    .flatMap((group) => group.items);

  return (
    <div
      className="orbit"
      role="group"
      aria-label="Technical skills orbiting my profile photo"
    >
      <OrbitRing items={innerSkills} direction="forward" duration={34} />
      <OrbitRing items={outerSkills} direction="reverse" duration={48} />
      <div className="orbit-center">
        <img src={profile.photo} alt={profile.name} />
      </div>
    </div>
  );
}

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
    } catch (e) {
      /* storage unavailable */
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      /* storage unavailable */
    }
  }, [theme]);

  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Header({ theme, onToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <Link
        to="/"
        className="brand"
        onClick={() => setMenuOpen(false)}
      >
        <img
          className="brand-photo"
          src={profile.photo}
          alt=""
          aria-hidden="true"
        />
        Neamat Ullah
      </Link>

      <button
        type="button"
        className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="main-navigation"
        className={`site-nav ${menuOpen ? "is-open" : ""}`}
        aria-label="Main"
      >
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
          Projects
        </NavLink>
        <NavLink to="/skills" onClick={() => setMenuOpen(false)}>
          Skills
        </NavLink>
        <NavLink to="/background" onClick={() => setMenuOpen(false)}>
          Background
        </NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>
        <button
          type="button"
          className="theme-btn"
          onClick={onToggle}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="hero-role">{profile.role}</p>
        <h1>
          <span className="line">Neamat</span>
          <span className="line">Ullah</span>
        </h1>
        <p className="hero-headline">{profile.headline}</p>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={profile.cv} download>
            Download CV
          </a>
          <Link className="btn" to="/contact">
            Get in touch
          </Link>
        </div>
      </div>

      <div className="hero-visual">
        <TechOrbit />
        <aside className="live-panel" aria-label="Live projects">
          <h2>Open a live project</h2>
          <ul>
            {projects.map((p) => (
              <li key={p.id}>
                <a href={p.live} target="_blank" rel="noreferrer">
                  <span className="live-title">{p.title}</span>
                  <span className="live-stack">{p.stack.join(", ")}</span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

function Projects() {
  const [open, setOpen] = useState(projects[0].id);

  return (
    <section className="section" id="projects">
      <h2 className="section-title">Projects</h2>
      <p className="section-intro">
        Four full-stack web apps, each deployed and open on GitHub. Select a
        project to see what I built.
      </p>
      <div className="project-list">
        {projects.map((p) => {
          const isOpen = open === p.id;
          return (
            <article key={p.id} className={`project ${isOpen ? "is-open" : ""}`}>
              <h3>
                <button
                  type="button"
                  className="project-head"
                  aria-expanded={isOpen}
                  aria-controls={`panel-${p.id}`}
                  onClick={() => setOpen(isOpen ? null : p.id)}
                >
                  <span className="project-name">{p.title}</span>
                  <span className="project-stack">{p.stack.join(", ")}</span>
                  <span className="project-chevron" aria-hidden="true" />
                </button>
              </h3>
              {isOpen && (
                <div className="project-body" id={`panel-${p.id}`}>
                  <ul>
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    <a className="btn btn-primary" href={p.live} target="_blank" rel="noreferrer">
                      Live demo
                    </a>
                    <a className="btn" href={p.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      <dl className="skills">
        {skills.map((s) => (
          <div key={s.group} className="skill-row">
            <dt>{s.group}</dt>
            <dd>
              {s.items.map((i) => (
                <span key={i} className="chip">
                  {i}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Background() {
  return (
    <section className="section" id="background">
      <h2 className="section-title">Background</h2>
      <div className="background-grid">
        <div>
          <h3 className="sub-title">Education</h3>
          <ol className="timeline">
            {education.map((e) => (
              <li key={e.degree}>
                <p className="tl-period">{e.period}</p>
                <p className="tl-main">{e.degree}</p>
                <p className="tl-sub">
                  {e.school}
                  {e.note ? `, ${e.note}` : ""}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="sub-title">Contests and hackathons</h3>
          <ul className="plain-list">
            {contests.map((c) => (
              <li key={c.name}>
                <p className="tl-main">
                  {c.name} <span className="muted">{c.year}</span>
                </p>
                <p className="tl-sub">{c.text}</p>
              </li>
            ))}
          </ul>

          <h3 className="sub-title">Certifications</h3>
          <ul className="plain-list">
            {certifications.map((c) => (
              <li key={c.name}>
                <p className="tl-main">{c.name}</p>
                <p className="tl-sub">{c.text}</p>
                {c.links && (
                  <p className="cert-links">
                    {c.links.map((l, i) => (
                      <a key={l} href={l} target="_blank" rel="noreferrer">
                        View certificate {i + 1}
                      </a>
                    ))}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <h2 className="section-title">Contact</h2>
      <p className="section-intro">
        I am looking for an internship or junior developer role, and I am open
        to freelance web projects. Email is the fastest way to reach me.
      </p>
      <a className="contact-mail" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <ul className="contact-list">
        <li>
          <span className="muted">Phone</span>
          <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>{profile.phone}</a>
        </li>
        <li>
          <span className="muted">Location</span>
          <span>{profile.location}</span>
        </li>
        <li>
          <span className="muted">LinkedIn</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            neamat-ullah-22a25b365
          </a>
        </li>
        <li>
          <span className="muted">GitHub</span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            neamat221
          </a>
        </li>
      </ul>
    </section>
  );
}

function NotFound() {
  return (
    <section className="section" id="not-found">
      <h2 className="section-title">Page not found</h2>
      <p className="section-intro">
        The page you are looking for does not exist.
      </p>
      <Link className="btn btn-primary" to="/">
        Back to home
      </Link>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-brand-heading">
            <img
              className="footer-photo"
              src={profile.photo}
              alt=""
              aria-hidden="true"
            />
            <div>
              <p className="footer-name">{profile.name}</p>
              <p className="footer-role">{profile.role}</p>
            </div>
          </div>
          <p className="footer-summary">{profile.summary}</p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <h2>Explore</h2>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/background">Background</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="footer-contact">
          <h2>Connect</h2>
          <a href={`mailto:${profile.email}`}>
            <FaEnvelope aria-hidden="true" />
            {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>
            <FaPhoneAlt aria-hidden="true" />
            {profile.phone}
          </a>
          <p>
            <FaMapMarkerAlt aria-hidden="true" />
            {profile.location}
          </p>
          <div className="footer-social">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} <strong>Neamat Ullah</strong>. Built with
          React and Vite.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <Header theme={theme} onToggle={toggleTheme} />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/background" element={<Background />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
