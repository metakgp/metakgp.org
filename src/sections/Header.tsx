import React, { useEffect, useState } from "react";
import "../styles/sections/header.css";
import DarkMode from "../assets/darkmode.svg";
import LightMode from "../assets/lightmode.svg";
import { Link, useLocation } from "react-router-dom";

const NavElement = ({ route, isActive }: { route: string, isActive: boolean }) => {
  return (
    <Link to={route} className={isActive ? `active-nav-element` : `nav-element`}>{route !== "dc" ? route.charAt(0).toUpperCase() + route.slice(1) : "DC++"}</Link>
  )
}

export const HeaderSection = () => {
  const location = useLocation();
  const pages = ["about", "projects", "contribute", "dc"];
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="header">
      <Link to={"/"} className="metakgp-logo-link">
        <img src="one-line.svg" alt="metaKGP Logo" className="metakgp-logo" />
      </Link>
      <div className="nav-container">
        <nav className="nav-bar">
          {pages.map((page) => (
            <NavElement route={page} isActive={location.pathname.slice(1) === page} />
          ))}
        </nav>
        {/* Theme toggle */}
        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme">
          <img
            src={theme === "dark" ? LightMode : DarkMode}
            alt={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          />
        </button>
      </div>
    </div>
  )
}
