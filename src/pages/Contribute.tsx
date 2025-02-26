import React from "react";
import "../styles/pages/contribute.css";
import helloImage from "../assets/undraw_hello_ccwj.svg";
import TerminalDisplay from "../components/TerminalDisplay";
import { Link } from "react-router-dom";

const ContributePage = () => {
  return (
    <div className="page-container">
      <section>
        <div className="contri-intro">
          <p className="contri-intro-para description">
            Hi, we're so glad you want to contribute to metaKGP!
            Open Source thrives on collaboration and contribution, and we appreciate all the help we can get!
            <br />
            <br />
            The best way to get started is by asking for help in the #projects channel on our Slack server. This page aims
            to help you get started on your own, but Slack is the best place to <i>ask</i> for help
          </p>
          <div className="contri-intro-image-container">
            <img src={helloImage} alt="hello-image" className="contri-intro-image" />
          </div>
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
        <p className="descripion"> WIP </p>
      </section>
    </div>
  );
};

export default ContributePage;
