import React from 'react';
import { HeroSection } from "../sections/Hero";
import { StatsSection } from "../sections/Statistics";
// import CardGrid from '../sections/CardGrid';
import Carousel from "../components/Carousel";
import RepoData from "../data/repo_data.json";
import { FEATURED_REPO, REPO_DATA_TYPE } from '../utils/types';
import "../styles/components/FeaturedDisplay.css"
import RepoCard from '../components/GithubCard';

function About() {
  const Repos: REPO_DATA_TYPE[] = RepoData as REPO_DATA_TYPE[];
  const featuredReposList: string[] = ["iqps-go", "metakgp.org", "travel-buddy", "metakgp-wiki", "gyft", "naarad"];
  const featuredRepos: REPO_DATA_TYPE[] = Repos.filter(repo => featuredReposList.includes(repo.name)) ?? [{
    name: "ERROR",
    description: "You seem to have inputted a wrong repo name in the featured repos list, please check that your names are valid",
    stars: 69,
    forks: 420,
    language: "ERROR"
  }];

  const featuredRepo: FEATURED_REPO = {
    screenshot_img: "http://0x0.st/84N_.png",
    usage: "Using GYFT you can get your KGP time table directly in your calendar app such as Google Calendar or [whatever else people use]. Either login with your ERP credentials or upload a screenshot of your timetable.",
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
              <p className='description'>{featuredRepo.usage}</p>
            </div>
          </div>
        </div>
        <Carousel>
          {featuredRepos.map((repo, index) => (
            <RepoCard repoData={repo} key={index} />
          ))}
        </Carousel>
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
