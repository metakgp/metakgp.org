import React from 'react';
import { AboutSection } from '../sections/About';
import { HeaderSection } from '../sections/Header';
import { HeroSection } from '../sections/Hero';
import { StatsSection } from '../sections/Statistics';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderSection />
      </header>
      <HeroSection />
      <StatsSection />
    </div>
  );
}

export default App;
