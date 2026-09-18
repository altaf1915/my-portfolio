import SectionHeading from "./SectionHeading";

const items = [
  {
    period: "01 Jan 2026 - July 2026",
    title: "Fullstack Web Development",
    company: "Unified Mentor / Expense Tracker, music-streaming, social-media, backend-remover Projects",
    text: "Building end-to-end web experiences with React on the client and Node.js/Express on the server, including API integration, validation and responsive UI."
  },
  {
    period: "15 Feb 2026 - Apr 2026",
    title: "Full stack web development with AI",
    company: "Internshala Training / PGLife",
    text: "full-stack web-development project, it is a student accommodation / Paying Guest (PG) discovery platform. Users can search for PG accommodations in different cities, view property details, and manage properties they are interested in. Similar implementations commonly use HTML/CSS/Bootstrap/JavaScript on the frontend with PHP and MySQL on the backend."
  },
  {
    period: "NEXT",
    title: "Open to the right team",
    company: "Frontend · Full-stack · Product",
    text: "Looking for a role where I can contribute to real product work, learn from experienced engineers, and take ownership from implementation through release."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container experience-grid">
        <SectionHeading eyebrow="EXPERIENCE" title="What&nbsp; I&nbsp; want&nbsp; to&nbsp; contribute." text="A concise snapshot of my current direction. Replace these entries with your real employment, internships, freelance work, or education before publishing." />
        <div className="timeline">
          {items.map((item, index) => (
            <article className="timeline-item reveal" key={item.title}>
              <div className="timeline-marker">{String(index + 1).padStart(2, "0")}</div>
              <div className="timeline-content">
                <div className="timeline-top"><span>{item.period}</span><span>{item.company}</span></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
