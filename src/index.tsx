import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import App from "./pages/App";
import About from "./pages/About";
import Contribute from "./pages/Contribute";
import DCPage from "./pages/DCPage";
import Projects from "./pages/Projects";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/about" replace />} />
      <Route path="/" element={<App />}>
        <Route index path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/dc" element={<DCPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
