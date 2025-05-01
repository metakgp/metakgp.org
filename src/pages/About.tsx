import React from 'react';
import { HeroSection } from "../sections/Hero";
import { StatsSection } from "../sections/Statistics";
// import CardGrid from '../sections/CardGrid';
import RepoData from "../data/repo_data.json";
import { FEATURED_REPO, REPO_DATA_TYPE } from '../utils/types';
import "../styles/components/FeaturedDisplay.css"

function About() {
  const Repos: REPO_DATA_TYPE[] = RepoData as REPO_DATA_TYPE[];
  // const featuredReposList: string[] = ["iqps-go", "metakgp.org"];
  // const featuredRepos: REPO_DATA_TYPE[] = Repos.filter(repo => featuredReposList.includes(repo.name)) ?? [{
  //   name: "ERROR",
  //   description: "You seem to have inputted a wrong repo name in the featured repos list, please check that your names are valid",
  //   stars: 69,
  //   forks: 420,
  //   language: "ERROR"
  // }];

  const featuredRepo: FEATURED_REPO = {
    screenshot_img: "http://0x0.st/84N_.png",
    swimlane_img: "http://0x0.st/84Nz.png",
    usage: "Login with your ERP credentials to download your time table in an easy to use format!\nAlternatively upload an image of your tiemtable to generate a .ics file for it!",
    repo: Repos.find(repo => repo.name == "gyft")!
  }

  return (
    <div className="page-container">
      <HeroSection />
      <StatsSection />
      <section className="topic-section">
        <h2 className="section-header-left">Featured Projects</h2>
        <div className='featured-display'>
          <div className='featured-top'>
            <div className='featured-screenshot'>
              <img src={featuredRepo.screenshot_img} />
            </div>
            <div className='featured-desc-container'>
              <a href={`https://github.com/metakgp/${featuredRepo.repo.name}`}>
                <h2 className='section-header-left'>{featuredRepo.repo.name}</h2>
              </a>
              <p className='description'>{featuredRepo.repo.description}</p>
            </div>
          </div>
          <div className='featured-bottom'>
            <div className='featured-desc-container'>
              <p className='description'>{featuredRepo.usage}</p>
            </div>
            <div className='featured-swimlane'>
              <img src={featuredRepo.swimlane_img} />
            </div>
          </div>
        </div>
      </section>
      <section className="topic-section">
        <h2 className="section-header-left">About MetaKGP</h2>
        <p className="description">
          About metaKGP! Add a nice a writeup and images here!
        </p>
      </section>
    </div>
  )
}

export default About;
