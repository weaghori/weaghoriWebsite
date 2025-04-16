import React from 'react'
import { Helmet } from "react-helmet";
import AboutSecOne from './About/AboutSecOne';
import AboutSecTwo from './About/AboutSecTwo';
import AboutSecThree from './About/AboutSecThree';
import AwardSec from './About/AwardSec';
import AboutSecFour from './About/AboutSecFour';
import AboutTeamTwo from './About/AboutTeamTwo';

const About = () => {
  return (
    <>
      <div style={{ paddingTop: "120px" }}>
        <Helmet>
          <meta
            name="description"
            content="We are an award-winning no. 1 digital media agency that delivers website design, graphic design, branding, content writing, social media marketing, and more."
          />
          <title>
            Know More About Aghori Media House &amp; Our Skilled Team
          </title>
        </Helmet>

        <AboutSecOne />
        <AboutSecTwo />
        <AboutSecThree />
        <AwardSec />
        <AboutSecFour />

        <AboutTeamTwo />
      </div>
    </>
  );
};

export default About
