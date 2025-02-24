import React from 'react';
import { HeroSection } from "../sections/Hero";
import { StatsSection } from "../sections/Statistics";

function About() {
  return (
    <div className='page-container'>
      <HeroSection />
      <StatsSection />
    </div>
  )
}

export default About;
