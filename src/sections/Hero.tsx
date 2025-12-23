import React from "react";
import devFocus from "../assets/undraw_pair_programming_re_or4x.svg";
import slackLogo from "../assets/slack_icon.webp"
import "../styles/sections/hero.css";
import { Link } from "react-router-dom";
import "../styles/layout/container.css";

export const HeroSection = () => {
  return (
    <section className="topic-section">
      <div className="container hero-container">
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
              <img src={slackLogo} width={16} height={16} alt="Slack logo"/>
              <p>Join Us!</p>
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <img src="one-line.svg" alt="metaKGP Logo" className="hero-logo"/>
          <img className="hero-image" src={devFocus} alt="hero-image"/>
        </div>
      </div>
    </section>
  )
}

