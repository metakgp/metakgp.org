import React from "react";
import "../styles/sections/header.css";
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
      <h1 className='metakgp-logo' data-set="metaKGP" ><span className='bold'>meta</span><span className='black'>KGP</span></h1>
      <nav className="nav-bar">
        {pages.map((page) => (
          <NavElement route={page} isActive={location.pathname.slice(1) === page} />
        ))}
        <Link to={"https://join.slack.com/t/metakgp/shared_invite/zt-1ybpus0gh-qWHFQZ7mFAzHHapp_JF89Q"} className="slack-link"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffreepnglogo.com%2Fimages%2Fall_img%2F1707837044slack-icon-png.png&f=1&nofb=1&ipt=295e07f40f4184171119bf2ef9d839481d89cf7773ed9ffb63c4a8a987da6489" width={16} height={16} /> Contact</Link>
      </nav>
    </div>
  )
}
