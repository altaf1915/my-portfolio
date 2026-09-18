import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? "http://localhost:5000/api" : "/api");

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero /><About /><Skills /><Projects /><Experience /><Services /><Contact />
      </main>
      <Footer />
    </div>
  );
}

export function NotFound() {
  return <div className="not-found"><p className="eyebrow">404</p><h1>That page does not exist.</h1><Link className="button button-primary" to="/">Back home</Link></div>;
}
