import React from 'react';
import { HeroSection } from "../sections/Hero";
import { StatsSection } from "../sections/Statistics";
import CardGrid from '../sections/CardGrid';
import RepoData from "../data/repo_data.json";
import { REPO_DATA_TYPE } from '../utils/types';

function About() {
  const Repos: REPO_DATA_TYPE[] = RepoData as REPO_DATA_TYPE[];
  const featuredReposList: string[] = ["iqps-go", "metakgp.org"];
  const featuredRepos: REPO_DATA_TYPE[] = Repos.filter(repo => featuredReposList.includes(repo.name)) ?? [{
    name: "ERROR",
    description: "You seem to have inputted a wrong repo name in the featured repos list, please check that your names are valid",
    stars: 69,
    forks: 420,
    language: "ERROR"
  }];

  return (
    <div className="page-container">
      <HeroSection />
      <StatsSection />
      <section className="topic-section">
        <h2 className="section-header-left">Featured Projects</h2>
        <CardGrid repos={featuredRepos} displayMode='featured' />
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
