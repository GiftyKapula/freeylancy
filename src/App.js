import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import "./styles/global.css";

/**
 * Main App Component
 * A modern, minimal, Swiss-inspired landing page for Freeylancy
 */
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
