import SectionHeading from "./SectionHeading";

const skills = [
  ["01", "React", "Frontend"], ["02", "JavaScript", "Frontend"], ["03", "HTML / CSS", "Frontend"],
  ["04", "Node.js", "Backend"], ["05", "Express", "Backend"], ["06", "REST APIs", "Backend"],
  ["07", "GitHub", "Workflow"], ["08", "Responsive UI", "Frontend"], ["09", "UI/UX", "Product"],
  ["10", "SEO", "Quality"], ["11", "Deployment", "AI"],
];

export default function Skills() {
  return (
    <section id="skills" className="section section-muted">
      <div className="container">
        <SectionHeading eyebrow="SKILLS" title="A&nbsp; practical&nbsp; stack,&nbsp; not&nbsp; a&nbsp; buzzword&nbsp; collection." text="The tools matter less than what I can do with them: turn requirements into interfaces, data flows, and maintainable features." />
        <div className="skills-grid">
          {skills.map(([num, name, group]) => (
            <article className="skill-card reveal" key={name}>
              <span className="skill-num">{num}</span>
              <div><span className="skill-group">{group}</span><h3>{name}</h3></div>
              <span className="skill-arrow">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
