import React from 'react';
import "../styles/pages/App.css"
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <main className='App-main'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
