import React from "react";
import devFocus from "../assets/undraw_pair_programming_re_or4x.svg";
import "../styles/sections/hero.css";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="topic-section">
      <div className="hero-container">
        <div className="hero-header-container">
          <h1 className="main-header">F*ck The People</h1>
        </div>
        <div className="hero-image-container">
          <img className="hero-image" src="https://ichef.bbci.co.uk/news/480/cpsprodpb/141D8/production/_133729328_muskarmgesture.png.webp" alt="hero-image" />
        </div>
      </div>
    </section>
  )
}

