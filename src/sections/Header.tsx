import React from "react";
import "../styles/header.css";
import { Link, useLocation } from "react-router-dom";

const NavElement = ({ route, isActive }: { route: string, isActive: boolean }) => {
  return (
    <Link to={route} className={isActive ? `active-nav-element` : `nav-element`}>{route !== "dc" ? route.charAt(0).toUpperCase() + route.slice(1) : "DC++"}</Link>
  )
}

export const HeaderSection = () => {
  const location = useLocation();
  const pages = ["about", "projects", "contribute", "dc"];

  return (
    <div className="header">
      <h1 className='metakgp-logo' data-set="metaKGP"
      ><span className='bold'>meta</span><span className='black'>KGP</span></h1>
      <nav className="nav-bar">
        {pages.map((page) => (
          <NavElement route={page} isActive={location.pathname.slice(1) === page} />
        ))}
      </nav>
    </div>
  )
}
