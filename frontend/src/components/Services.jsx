import SectionHeading from "./SectionHeading";

const services = [
  ["01",
    "Website Development",
    "Modern, responsive websites built with React, with clean layouts, reusable components, smooth navigation and mobile-friendly experiences."],
  ["02",
    "Full-Stack Development",
    "Complete web applications with React on the frontend and Node.js/Express on the backend, including REST APIs, forms, validation and data integration."],
  [ "03",
    "SEO & Website Optimization",
    "SEO-friendly website structure, metadata, sitemap, robots.txt, responsive performance and technical improvements that help websites become easier to discover and use."],
];

export default function Services() {
  return (
    <section className="section section-muted services-section">
      <div className="container">
        <SectionHeading eyebrow="CAPABILITIES" title="Where I can add value on a team." text="Useful whether you need someone focused on the interface or comfortable crossing the frontend/backend boundary." />
        <div className="services-list">
          {services.map(([num, title, text]) => (
            <article className="service-row reveal" key={num}>
              <span className="service-num">{num}</span><h3>{title}</h3><p>{text}</p><span className="service-arrow">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
