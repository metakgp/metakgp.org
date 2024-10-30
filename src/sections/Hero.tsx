import devFocus from "../assets/undraw_pair_programming_re_or4x.svg";

export const HeroSection = () => {
  // <div className="hero-card-container">
  //   <HeroCard imageSource={metakgpLogo} title="IQPS" description="Hi!!!" />
  //   <HeroCard imageSource={metakgpLogo} title="WIMP" description="Hi!!!" />
  //   <HeroCard imageSource={metakgpLogo} title="Naarad" description="Hi!!!" />
  // </div>
  return (
    <section>
      <div className="hero-container">
        <div className="hero-header-container">
          <h1 className="main-header">For The People</h1>
          <h1 className="main-header">By The People</h1>
          <p className="hero-description">
            metaKGP is IIT Kharagpur's (open) community for open-source enthuasists. We are dedicated to solving KGP's problems, one tech project at a time.
          </p>
          <div className="hero-button-container">
            <button className="project-button">See our Projects!</button>
            <button className="about-button">Learn more about what we do!</button>
          </div>
        </div>
        <div className="hero-image-container">
          <img className="hero-image" src={devFocus} />
        </div>
      </div>
    </section>
  )
}

