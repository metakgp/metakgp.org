import React from 'react';
import { HeroSection } from "../sections/Hero";
import { StatsSection } from "../sections/Statistics";
import FeaturedSection from '../sections/FeaturedDisplay';

function About() {

  return (
    <div className="page-container">
      <HeroSection />
      <StatsSection />
      <FeaturedSection />
    </div>
  )
}

export default About;
