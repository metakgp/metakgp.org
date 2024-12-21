import React from 'react';
import { HeaderSection } from '../sections/Header';
import { HeroSection } from '../sections/Hero';
import { StatsSection } from '../sections/Statistics';
import { FooterSection } from '../sections/Footer';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <HeaderSection />
      </header>
      <HeroSection />
      <StatsSection />
      <FooterSection />
    </div>
  );
}

export default App;
