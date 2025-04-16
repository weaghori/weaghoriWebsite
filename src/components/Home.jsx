import React from 'react'
import Hero from './Home/Hero'
import ShowCase from './Home/ShowCase'
import AboutContent from './Home/AboutContent'
// import Ethics from "./components/pagesSection/home/Ethics";
import OurServices from './Home/OurServices'
import ProcessContent from './Home/ProcessContent'
import RecentWorks from './Home/RecentWorks'
import TestimonialSec from './Home/TestimonialSec'
import HomeContact from './Home/HomeContact'
import "../index.css";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="h-[10vh]"></div>
      <ShowCase />
      <AboutContent />
      <OurServices />
      <ProcessContent />
      <RecentWorks />
      {/* <Ethics /> */}
      <TestimonialSec />
      <HomeContact />
    </>
  )
}

export default Home
