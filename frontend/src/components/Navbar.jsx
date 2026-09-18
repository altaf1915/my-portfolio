import { useEffect, useState } from "react";

const links = [
  ["Work", "projects"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = ["hero", ...links.map(([, id]) => id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const jump = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className={`nav-wrap ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="nav container" aria-label="Primary navigation">
        <button className="brand" onClick={() => jump("hero")} aria-label="Go to home">
          <span className="brand-mark">AN</span><span>Altaf Ansari<span className="accent">.</span></span>
        </button>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([label, id]) => (
            <button className={active === id ? "active" : ""} key={id} onClick={() => jump(id)}>{label}</button>
          ))}
          <a className="nav-resume" href="#contact">Résumé on request ↗</a>
        </div>
        <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"}>
          {open ? "×" : "☰"}
        </button>
      </nav>
    </header>
  );
}
