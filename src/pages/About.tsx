import React from 'react';
import GroupPicture from "../assets/metakgp_group_picture.jpeg";
import MetaSpringImage from "../assets/metasprint.jpeg";
import { HeroSection } from "../sections/Hero";
import { StatsSection } from "../sections/Statistics";
import FeaturedSection from '../sections/FeaturedDisplay';
import "../styles/pages/About.css";

function About() {

  return (
    <div className="page-container">
      <HeroSection />
      <StatsSection />
      <FeaturedSection />
      <section className="topic-section">
        <h2 className="section-header-left">About Us</h2>

        <div className='about-top-container'>

          <div className='about-top-left'>
            {/* you can see how bad i am at class names*/}
            <p className='vikrant-quote'>
              <strong><em>
                "The biggest resource we have is the quality of people who choose to participate. That is what must be maximised at all times. Smart people don’t like drudgery, and are generally driven enough to find another way to do something they really want to do, if we get in their way."
              </em></strong>
              <br />
              <br />
              - <a href='https://github.com/amrav'>Vikrant Varma</a>, metaKGP co-founder
            </p>

            <p className="description">
              metaKGP is an <strong>open, student-driven</strong> community at IIT Kharagpur dedicated to improving campus life by sharing knowledge and creating innovative projects. Students from all walks of life come together to <strong>document experiences, build tools, and create resources</strong> that benefit everyone at metaKGP.
            </p>
          </div>

          <div className='image-container'>
            <img src={GroupPicture} className='metakgp-image' alt='metaKGP group picture' />
            <figcaption>
              A group picture of some active metaKGP maintainers
            </figcaption>
          </div>
        </div>

        <div className='about-bottom-container'>
          <div className='about-bottom-right'>
            <p className='description'>
              metaKGP hosts <strong>Metasprints</strong> — focused, collaborative sessions where members come together to brainstorm, develop, and enhance projects. These events are a great way for anyone, regardless of experience, to get involved and make a real impact.
            </p>
            <p className='description'>
              If you’re passionate about contributing, learning, or simply making campus life better, join metaKGP and help shape a more open and supportive IIT Kharagpur community!
            </p>
          </div>

          <div className='image-container'>
            <img src={MetaSpringImage} className='metakgp-image' alt='metasprint' />
            <figcaption>
              A metasprint in progress
            </figcaption>
          </div>
        </div>


        <p className='description'>
          Get to know more about us and our history
          <ul>
            <li>
              <a href='https://wiki.metakgp.org/w/Metakgp:About'>https://wiki.metakgp.org/w/Metakgp:About</a>
            </li>
            <li>
              <a href='https://wiki.metakgp.org/w/User:Hargup/Why_metakgp%3F'>Why metaKGP: by Harsh Gupta</a>
            </li>
            <li>
              <a href='https://wiki.metakgp.org/w/User:Amrav/Why_metakgp%3F'>Why metaKGP: by Vikrant Varma</a>
            </li>
          </ul>
        </p>

      </section>
    </div>
  )
}

export default About;
