import React from 'react';
import { HeroSection } from "../sections/Hero";
import { StatsSection } from "../sections/Statistics";
import CardGrid from '../sections/CardGrid';

function About() {
  return (
    <div className="page-container">
      <HeroSection />
      <StatsSection />
      <section className="topic-section">
        <h2 className="section-header-left">Featured Projects</h2>
        <CardGrid names={["iqps-go", "metakgp.org"]} displayMode='featured' />
      </section>
      <section className="topic-section">
        <h2 className="section-header-left">About MetaKGP</h2>
        <p className="description">
          About metaKGP! Add a nice a writeup and images here!
        </p>
      </section>
    </div>
  )
}

export default About;
