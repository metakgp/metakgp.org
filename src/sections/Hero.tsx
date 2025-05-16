import React from "react";
import devFocus from "../assets/undraw_pair_programming_re_or4x.svg";
import "../styles/sections/hero.css";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="topic-section">
      <div className="hero-container">
        <div className="hero-header-container">
          <h1 className="main-header">For The People</h1>
          <h1 className="main-header">By The People</h1>
          <p className="hero-description">
            metaKGP is IIT Kharagpur's (open) community for open-source enthuasists. We are dedicated to solving KGP's problems, one tech project at a time.
          </p>
          <div className="hero-button-container">
            <div className="samesite-links">
              <Link to="/projects" className="project-button no-highlight">
                <p>Projects</p>
              </Link>
              <Link to="/contribute" className="contribute-button no-highlight">
                <p>Contribute</p>
              </Link>
            </div>
            <a href={"https://slack.metakgp.org"} className="slack-link">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffreepnglogo.com%2Fimages%2Fall_img%2F1707837044slack-icon-png.png&f=1&nofb=1&ipt=295e07f40f4184171119bf2ef9d839481d89cf7773ed9ffb63c4a8a987da6489" width={16} height={16} />
              <p>Contact</p>
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <img className="hero-image" src={devFocus} alt="hero-image" />
        </div>
      </div>
    </section>
  )
}

