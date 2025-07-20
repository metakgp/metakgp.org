import { Link } from "react-router-dom"
import { FEATURED_REPO, REPO_DATA_TYPE } from "../utils/types";
import FeaturedData from "../data/featured_data.json";
import RepoData from "../data/repo_data.json";
import "../styles/components/FeaturedDisplay.css"
import "../styles/components/Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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

  const display_settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  return (
    <section className="topic-section">
      <h2 className="section-header-left">Featured Projects</h2>
      <Slider {...display_settings}>
        {featuredRepos.map((featuredRepo, index) => (
          <div className='featured-display' key={index}>
            <div className='featured-top'>
              <Link to={featuredRepo.repo.homepage}>
                <div className='featured-screenshot'>
                  <img src={featuredRepo.screenshot_img} />
                </div>
              </Link>
              <div className='featured-desc-container'>
                <a href={`https://github.com/metakgp/${featuredRepo.repo.name}`} className="no-highlight featured-repo-title">
                  <h2 className='section-header-left'>{featuredRepo.repo.name}</h2>
                </a>
                <p className='description'>{featuredRepo.usage}</p>
                <a href={featuredRepo.repo.homepage} className='featured-button no-highlight'>
                  <p>Check it out!</p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* <Carousel>
        {featuredRepos.map((repo, index) => (
          <RepoCard repoData={repo.repo} key={index} />
        ))}
      </Carousel> */}
    </section>

  )
}

export default FeaturedSection;
