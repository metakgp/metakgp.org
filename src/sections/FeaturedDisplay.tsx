import { Link } from "react-router-dom"
import Carousel from "../components/Carousel"
import { FEATURED_REPO, REPO_DATA_TYPE } from "../utils/types";
import FeaturedData from "../data/featured_data.json";
import RepoData from "../data/repo_data.json";
import RepoCard from "../components/GithubCard";
import "../styles/components/FeaturedDisplay.css"

interface featured_json {
  screenshot_img: string;
  usage: string;
  name: string;
}

const FeaturedSection = () => {

  const Repos: REPO_DATA_TYPE[] = RepoData as REPO_DATA_TYPE[];

  const featuredReposList: featured_json[] = FeaturedData as featured_json[];
  const featuredRepos: FEATURED_REPO[] = featuredReposList.map((featured_repo) => {
    return {
      screenshot_img: featured_repo.screenshot_img,
      usage: featured_repo.usage,
      repo: Repos.find(repo => repo.name == featured_repo.name)!
    }
  })
  const featuredRepo = featuredRepos[Math.floor(Math.random() * featuredRepos.length)];

  return (
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
            <Link to={featuredRepo.repo.homepage} className='no-highlight'>
              <button className="contribute-button">Check it out!</button>
            </Link>
          </div>
        </div>
      </div>
      <Carousel>
        {featuredRepos.map((repo, index) => (
          <RepoCard repoData={repo.repo} key={index} />
        ))}
      </Carousel>
    </section>

  )
}

export default FeaturedSection;
