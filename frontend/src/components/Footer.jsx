export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="brand footer-brand"><span className="brand-mark">AN</span><span>Altaf Ansari<span className="accent">.</span></span></div>
          <p>Full-stack web development · React · Node.js </p>
        </div>
        <div className="footer-note"><span>© {new Date().getFullYear()} Altaf Ansari</span><span>Built with React + Express</span></div>
      </div>
    </footer>
  );
}
