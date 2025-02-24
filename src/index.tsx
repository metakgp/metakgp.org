import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import App from "./pages/App";
import About from "./pages/About";
import Contribute from "./pages/Contribute";
import DCPage from "./pages/DCPage";
import Projects from "./pages/Projects";
import reportWebVitals from "./tests/reportWebVitals";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/about" replace />} />
      <Route path="/" element={<App />}>
        <Route index path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/dc" element={<DCPage />} />
      </Route>
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
