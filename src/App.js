import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Benefits from "./sections/Benefits";
import Work from "./sections/Work";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import "./styles/global.css";

/**
 * Main App Component
 * A modern, minimal, Swiss-inspired landing page for Freeylancy
 */
function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <Services />
          <Benefits />
          <Work />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
