export default function Hero() {
  const jump = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="hero section">
      <div className="hero-grid container">
        <div className="hero-copy reveal">
          <div className="availability"><span className="pulse" /> Open to work frontend & full-stack opportunities</div>
          <p className="eyebrow">FULL-STACK WEB DEVELOPER · REACT · NODE.JS</p>
          <h1>
            I turn ideas into <span className="hero-accent">fast, useful web products.</span>
          </h1>
          <p className="hero-text">
            I build responsive interfaces, practical APIs, and polished product experiences —
            with an eye for details that make software easy to trust and easy to use.
          </p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => jump("projects")}>See my work <span>↗</span></button>
            <a className="button button-ghost" href="#contact">Get my résumé <span>↗</span></a>
          </div>
          <div className="hero-meta" aria-label="Core strengths">
            <div><strong>React</strong><span>Frontend</span></div>
            <div><strong>Node.js</strong><span>Backend</span></div>
            <div><strong>UI → API</strong><span>End to end</span></div>
          </div>
        </div>

        <div className="hero-visual reveal" aria-label="Developer profile">
          <div className="code-window">
            <div className="window-bar"><span /><span /><span /><b>portfolio.js</b></div>
            <pre aria-hidden="true">{`const developer = {
  focus: "web products",
  frontend: ["React", "JavaScript", "Css"],
  backend: ["Node.js", "Express", "REST"],
  database: ["MySql", "MongoDB"],
  mindset: "ship thoughtfully"
};`}</pre>
            <div className="terminal-line"><span>●</span> Ready to build something useful.</div>
          </div>
          <div className="floating-note note-one">Responsive by default</div>
          <div className="floating-note note-two">Clean · accessible · deployable</div>
        </div>
      </div>
      <div className="scroll-cue container"><span>Selected work ↓</span><span>01 / 06</span></div>
    </section>
  );
}
