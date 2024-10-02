import { HeroCard } from "../components/HeroCard"
import metakgpLogo from "../assets/metakgp_logo_one_line-cropped.svg"

export const HeroSection = () => {
  return (
    <section>
      <div className="hero-container">
        {/*<div className="small-tagline">We build projects</div>*/}
        <div className="hero-header-container">
          <h1 className="main-header">For The People</h1>
          <h1 className="main-header">By The People</h1>
          <p className="hero-description">
            Solving KGP's problems, one tech project at a time.
          </p>
          <div className="hero-button-container">
            <button className="project-button">See our Projects!</button>
            <button className="about-button">Learn more about what we do!</button>
          </div>
        </div>
        <div className="hero-card-container">
          <HeroCard imageSource={metakgpLogo} title="IQPS" description="Hi!!!" />
          <HeroCard imageSource={metakgpLogo} title="WIMP" description="Hi!!!" />
          <HeroCard imageSource={metakgpLogo} title="Naarad" description="Hi!!!" />
        </div>
      </div>
    </section>
  )
}

