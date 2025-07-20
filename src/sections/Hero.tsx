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
              <img src="https://freepnglogo.com/images/all_img/1707837044slack-icon-png.png" width={16} height={16} />
              <p>Join Us!</p>
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

