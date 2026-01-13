import React, { useEffect, useState } from 'react';
import { HeaderSection } from '../sections/Header';
import { FooterSection } from '../sections/Footer';
import "../styles/pages/App.css"
import { Outlet } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return (localStorage.getItem("theme") as "light" | "dark") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="App">
      <header className="App-header">
        <HeaderSection theme = {theme} setTheme={setTheme} />
      </header>
      <main className='App-main'>
        <Outlet context={{ theme }} />
      </main>
      <footer className='App-footer'>
        <FooterSection />
      </footer>
    </div>
  );
}

export default App;
