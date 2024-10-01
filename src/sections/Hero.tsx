import { HeroCard } from "../components/HeroCard"
import metakgpLogo from "../assets/metakgp_logo_one_line-cropped.svg"

export const HeroSection = () => {
  return (
    <section>
      <div className="hero-container">
        {/*<div className="small-tagline">We build projects</div>*/}
        <div className="hero-header-container">
          <div><h1 className="main-header">For The People</h1></div>
          <div><h1 className="main-header">By The People</h1></div>
          <p className="hero-description">
            Solving KGP's problems, one tech project at a time.
          </p>
        </div>
        <div className="hero-card-container">
          <HeroCard imageSource={metakgpLogo} title="IQPS" description="Hi!!!" />
        </div>
      </div>
    </section>
  )
}

