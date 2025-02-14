import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import App from "./pages/App";
import About from "./pages/About";
import Contribute from "./pages/Contribute";
import DCPage from "./pages/DCPage";
import Projects from "./pages/Projects";
import reportWebVitals from "./tests/reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contribute" element={<Contribute />} />
      <Route path="/dc" element={<DCPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
