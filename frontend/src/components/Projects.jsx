import { useEffect, useMemo, useState } from "react";
import SectionHeading from "./SectionHeading";
import { API_URL } from "../App";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const categories = useMemo(() => ["All", ...new Set(projects.map((p) => p.category))], [projects]);

  useEffect(() => {
    let cancelled = false;
    fetch(`${API_URL}/projects`)
      .then((res) => { if (!res.ok) throw new Error("Could not load projects."); return res.json(); })
      .then((payload) => { if (!cancelled) setProjects(payload.data || []); })
      .catch((err) => { if (!cancelled) setError(err.message); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, []);

  const filtered = category === "All" ? projects : projects.filter((p) => p.category === category);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="projects-head">
          <SectionHeading eyebrow="SELECTED WORK" title="Work&nbsp; that&nbsp; shows&nbsp; how&nbsp; I&nbsp; build." text="Explore projects that demonstrate my approach to frontend craft, backend thinking, responsive interfaces, and building products beyond the happy path." />
          <div className="filter-row" aria-label="Project filters">
            {categories.map((item) => <button key={item} className={`filter-pill ${category === item ? "active" : ""}`} onClick={() => setCategory(item)}>{item}</button>)}
          </div>
        </div>

        {loading && <div className="state-box">Loading projects…</div>}
        {error && <div className="state-box state-error">{error}</div>}
        {!loading && !error && filtered.length === 0 && <div className="state-box">No projects found for this category.</div>}

        <div className="project-grid">
          {filtered.map((project, index) => (
            <article className={`project-card reveal project-tone-${index % 4}`} key={project.id}>
              <div className="project-visual">
                <span className="project-badge">{project.category}</span>
                <span className="project-year">{project.year}</span>
                <div className="project-art"><span>{project.shortLabel}</span><i /><b /></div>
              </div>
              <div className="project-body">
                <div className="project-heading-row"><span className="project-index">0{index + 1}</span><span className="project-role">{project.role || "Development"}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.highlights?.length ? <ul className="project-highlights">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul> : null}
                <div className="project-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
                <div className="project-links">
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">Live demo ↗</a>
                  <a href={project.codeUrl} target="_blank" rel="noreferrer">Source ↗</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
