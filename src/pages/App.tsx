import React from 'react';
import { HeaderSection } from '../sections/Header';
import { FooterSection } from '../sections/Footer';
import "../styles/pages/App.css"
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderSection />
      </header>
      <main className='App-main'>
        <Outlet />
      </main>
      <footer className='App-footer'>
        <FooterSection />
      </footer>
    </div>
  );
}

export default App;
