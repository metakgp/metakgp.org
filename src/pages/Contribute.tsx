import React from "react";
import "../styles/pages/contribute.css";
import helloImage from "../assets/undraw_hello_ccwj.svg";
import TerminalDisplay from "../components/TerminalDisplay";
import { Link } from "react-router-dom";

const ContributePage = () => {
  return (
    <div className="content-page-container">
      <section className="contri-intro-section">
        <div className="contri-intro">
          <div className="contri-intro-container">
            <p className="contri-intro-para description">
              Hi, we're so glad you want to contribute to metaKGP!
              Open Source thrives on collaboration and contribution, and we appreciate all the help we can get!
              <br />
              <br />
              If you ever need help with anything, just ask us in the <code>#general</code> channel on our Slack server.
            </p>
            <a href={"https://slack.metakgp.org"} className="slack-link">
              <img src="https://freepnglogo.com/images/all_img/1707837044slack-icon-png.png" width={16} height={16} />
              <p>Join the Slack!</p>
            </a>
          </div>
          <div className="contri-intro-image-container">
            <img src={helloImage} alt="hello-image" className="contri-intro-image" />
          </div>
        </div>
      </section>
      <section className="topic-section">
        <div>
          <h2 className="section-header-left">Wiki Contributions</h2>
          <p className="description">
            A simple way to contribute to metaKGP would be to keep the <a href="https://wiki.metakgp.org">MetaWiki</a> updated! You can help out by dropping feedback on any courses you took, keep your society pages updated, make sure content is accurate etc.
            {/* TODO: add images with arrow to edit_article once wiki is back up*/}
          </p>
        </div>
      </section>
      <section className="topic-section">
        <div>
          <h2 className="section-header-left">Pick a Project</h2>
          <p className="description">
            First pick a project that looks interesting to you. Try out the various projects we are working on over at <Link to="/projects">projects</Link>.
            <br />
            Try out projects related to the technologies you're familiar with. You can filter by language, frameworks etc. We have a variety of projects made with a variety of technologies, and we always enjoy trying out new frameworks.
          </p>
        </div>
      </section>
      <section className="topic-section">
        <div className="explore-project">
          <h2 className="section-header-left">Explore the Project</h2>
          <p className="description">
            <ul>
              <li>
                Start by first trying out the project for its intended use
              </li>
              <li>
                Go through the docs of the project, read the github README.md on how to use it
              </li>
              <li>
                Explore the codebase!
              </li>
              <div className="centered-div">
                <TerminalDisplay command={`$ git clone https://github.com/metakgp/PROJECT_NAME.git\n$ cd PROJECT_NAME/`} />
              </div>
              <li>
                You might not always understand everything the code is doing and how it is doing it, but it is important to be patient and start small
              </li>
            </ul>
          </p>
        </div>
      </section>
      <section className="topic-section contributing">
        <h2 className="section-header-left">Contributing </h2>
        <p className="description">
          Now that you have used the tool and gone through the codebase you should have an idea of the issues you faced.
          You can raise these issues on Github
          <br /><br />
          You can also go through these issues to see what you can help with. If you think you have something you can help with then please submit a PR! Start by forking the project on Github
          <div className="centered-div">
            <TerminalDisplay command={`$ git clone 'https://github.com/YOUR_USERNAME/YOUR_FORK'\n$ cd YOUR_FORK/\n$ git checkout -b feature/new_feature`} />
          </div>
          Add your code, commit your changes, and push. Then create a PR on Github
        </p>
      </section>
      <section className="topic-section">
        <h2 className="section-header-left">Resources</h2>
        <p className="description">
          <ul>
            <li>
              <a href="https://learngitbranching.js.org/">Learn Git Branching</a>
            </li>
            <li>
              <a href="https://goodfirstissue.dev/">Good First Issues</a>
            </li>
            <li>
              <a href="https://github.com/orgs/metakgp/projects/4">MetaKGP Dreams: some issues to work on in MetaKGP</a>
            </li>
          </ul>
        </p>
      </section>
    </div>
  );
};

export default ContributePage;
