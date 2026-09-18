import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container split-grid">
        <SectionHeading
          eyebrow="ABOUT"
          title="Full-Stack&nbsp; Developer&nbsp; building&nbsp; fast,&nbsp; practical&nbsp; web applications."
          text="I build modern web applications with React, JavaScript, Node.js, Express, and MongoDB, with a focus on clean code, responsive interfaces, and real-world usability."
        />
        <div className="about-panel reveal">
          <div className="about-kicker">How I work</div>
          <p className="about-lead">Understand the problem. Build the smallest solid solution. Test the edges. Ship it clean.</p>
          <div className="about-line" />
          <div className="about-facts">
            <div><span>Frontend</span><strong>React, JavaScript, responsive UI</strong></div>
            <div><span>Backend</span><strong>Node.js, Express, REST APIs</strong></div>
            <div><span>Quality</span><strong>Accessibility, SEO, performance</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}
