import React from 'react';
import { HeroSection } from "../sections/Hero";
import { StatsSection } from "../sections/Statistics";

function About() {
  return (
    <div className="page-container">
      <HeroSection />
      <StatsSection />
      <section className="topic-section">
        <h2 className="section-header-left">Featured Projects</h2>
      </section>
    </div>
  )
}

export default About;
