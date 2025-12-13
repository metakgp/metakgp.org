import React, { useState } from "react";
import "../styles/sections/header.css";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const NavElement = ({ 
  route, 
  isActive,
  onHover 
}: { 
  route: string;
  isActive: boolean;
  onHover: () => void;
}) => {
  return (
    <Link 
      to={route} 
      className={isActive ? `active-nav-element` : `nav-element`}
      onMouseEnter={onHover}
    >
      {route !== "dc" ? route.charAt(0).toUpperCase() + route.slice(1) : "DC++"}
    </Link>
  )
}

export const HeaderSection = () => {
  const location = useLocation();
  const pages = ["about", "projects", "contribute", "dc"];
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <div className="header">
      <Link to={"https://wiki.metakgp.org"} className="metakgp-logo-link">
        <h1 className='metakgp-logo' data-set="metaKGP" ><span className='bold'>meta</span><span className='black'>KGP</span></h1>
      </Link>
      <nav className="nav-bar" onMouseLeave={() => setHoveredTab(null)}>
        {pages.map((page) => (
          <div key={page} style={{ position: "relative" }}>
            {(hoveredTab === page || (location.pathname.slice(1) === page && !hoveredTab)) && (
              <motion.div
                layoutId="navbar-indicator"
                className={hoveredTab === page ? "nav-hover-bg" : "nav-active-bg"}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
            <NavElement 
              route={page} 
              isActive={location.pathname.slice(1) === page}
              onHover={() => setHoveredTab(page)}
            />
          </div>
        ))}
      </nav>
    </div>
  )
}