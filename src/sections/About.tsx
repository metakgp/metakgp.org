

export const AboutSection = () => {
  return (
    <div>
      <h1 className="about-header">What is <span className="bold">meta</span><span className="black">KGP</span>?</h1>
      <div className="about-container">
        <div className="about-left">
          <p>
            MetaKGP is a loose association of engineers, hackers, artists, and students from IIT Kharagpur...
          </p>
        </div>
        <div className="about-right">
          <h3 className="quote">
            "The biggest resource we have is the quality of people who choose to participate. That is what must be maximised at all times. Smart people don’t like drudgery, and are generally driven enough to find another way to do something they really want to do, if we get in their way."
            <br />
            - Vikrant Verma, MetaKGP Co-Founder
          </h3>
        </div>
      </div>
    </div>
  )
}
