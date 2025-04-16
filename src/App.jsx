import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Helmet } from 'react-helmet'

import Home from './components/Home'
import Header from './components/Header'
import OnPageChange from './components/OnPageChange'
// import ScrollToTop from './components/Helper/ScrollToTop'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import JoinTeamForm from './components/JoinTeamForm'
import Blogs from './components/Blogs'
import ContentWritingBlog from './components/Blogs/ContentWritingBlog'
import LeadGenerationBlog from './components/Blogs/LeadGenerationBlog'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsAndConditions from './components/TermsAndConditions'
import SinglePost from './components/Blogs/Post/SinglePost'
// portfolio
import SinglePortfolio from './components/Portfolio/SinglePortfolio'
import Rupiya from './components/Portfolio/Rupiya'
import Mitticool from './components/Portfolio/Mitticool'
import Siddha from './components/Portfolio/Siddha'
import Roha from './components/Portfolio/Roha'
import OmMouldings from './components/Portfolio/OmMouldings'
import Namah from './components/Portfolio/Namah'
import Nilam from './components/Portfolio/Nilam'
import Mmpl from './components/Portfolio/Mmpl'
import Hearmo from './components/Portfolio/Hearmo'
import Samarpan from './components/Portfolio/Samarpan'
import TheWineLeaf from './components/Portfolio/TheWineLeaf'
import EagleExpress from './components/Portfolio/EagleExpress'
import Batwa from './components/Portfolio/Batwa'
import Dunamis from './components/Portfolio/Dunamis'
import Amrut from './components/Portfolio/Amrut'
import Nirvana from './components/Portfolio/Nirvana'
import GuruRandhawa from './components/Portfolio/GuruRandhawa'
import WhiteNirvana from './components/Portfolio/WhiteNirvana'
// services
import GraphicDesigning from './components/Services/GraphicDesigning'
import Branding from './components/Services/Branding'
import WebDevelopment from './components/Services/WebDevelopment'
import SocialMedia from './components/Services/SocialMedia'
import ContentWriting from './components/Services/ContentWriting'
import DigitalMedia from './components/Services/DigitalMedia'
import Blank from './components/Blank'
import Error from './components/Error'

function App() {
  // const [count, setCount] = useState(0)
  // on Back Page Reload
  window.addEventListener("popstate", (event) => {
    window.location.reload();
    window.location.reload();
  });

  // useEffect(() => {
  //   // Function to handle the context menu event
  //   const handleContextMenu = (event) => {
  //     event.preventDefault();
  //   };

  //   // Add the event listener to the document
  //   document.addEventListener('contextmenu', handleContextMenu);

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     document.removeEventListener('contextmenu', handleContextMenu);
  //   };
  // }, []); // Empty dependency array ensures this runs once on mount

  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
  //       e.preventDefault();
  //     }
  //   };

  //   window.addEventListener('keydown', handleKeyDown);

  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, []);


  return (
    <>
      <div className="relative">
        <ParallaxProvider>
          <div className="relative">
            <Helmet>
              <title>
                Digital Marketing Agency &amp; Company In Mumbai |Aghori Media
                House
              </title>
              <meta
                name="description"
                content="Aghori Media House is a leading digital marketing agency having professional expertise in branding, marketing, website development services and social media."
              />
            </Helmet>
            <Header />
            <BrowserRouter>
              
              <OnPageChange />
              <Routes>
                <Route path="/" element={<Home className="home" />} />
                <Route exact path="/identity" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/portfolio" element={<Portfolio />} />
                <Route exact path="/expertis" element={<Services />} />
                <Route exact path="/joinTeamForm" element={<JoinTeamForm />} />
                <Route path="/blogs" element={<Blogs />} />
                {/* Blogs */}
                <Route
                  path="/blogs/benefits-of-content-writing"
                  element={<ContentWritingBlog />}
                />
                <Route
                  path="/blogs/Lead-Generation"
                  element={<LeadGenerationBlog />}
                />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route
                  path="/terms-and-condition"
                  element={<TermsAndConditions />}
                />
                <Route path="/single-post" element={<SinglePost />} />
                {/* Portfolios */}
                <Route path="/single-portfolio" element={<SinglePortfolio />} />
                <Route path="/portfolio/rupiya" element={<Rupiya />} />
                <Route path="/portfolio/mitticool" element={<Mitticool />} />
                <Route path="/portfolio/siddha" element={<Siddha />} />
                <Route path="/portfolio/roha-group" element={<Roha />} />
                <Route path="/portfolio/om-mouldings" element={<OmMouldings />} />
                <Route path="/portfolio/enfuse" element={<Mitticool />} />
                <Route path="/portfolio/namah" element={<Namah />} />
                <Route path="/portfolio/nilam" element={<Nilam />} />
                <Route path="/portfolio/mmpl" element={<Mmpl />} />
                <Route path="/portfolio/hearmo" element={<Hearmo />} />
                <Route path="/portfolio/samarpan" element={<Samarpan />} />
                <Route path="/portfolio/the-wine-leaf" element={<TheWineLeaf />} />
                <Route path="/portfolio/eagle-express" element={<EagleExpress />} />
                <Route path="/portfolio/batwa" element={<Batwa />} />
                <Route path="/portfolio/dunamis" element={<Dunamis />} />
                <Route path="/portfolio/amrut-masala" element={<Amrut />} />
                <Route path="/portfolio/nirvana-group" element={<Nirvana />} />
                <Route path="/portfolio/guru-randhawa" element={<GuruRandhawa />} />
                <Route path="/portfolio/white-nirvana" element={<WhiteNirvana />} />
                {/* Services */}
                <Route path="/expertis/graphic-designing" element={<GraphicDesigning />} />
                <Route path="/expertis/branding" element={<Branding />} />
                <Route path="/expertis/web-development" element={<WebDevelopment />} />
                <Route path="/expertis/social-media" element={<SocialMedia />} />
                <Route path="/expertis/content-writing" element={<ContentWriting />} />
                <Route path="/expertis/digital-media" element={<DigitalMedia />} />
                <Route path="/blank" element={<Blank />} />
                <Route path="*" element={<Error />} />
              </Routes>

              <Footer />
              {/* <ScrollToTop /> */}
            </BrowserRouter>
          </div>
        </ParallaxProvider>
      </div>
      
    </>
  )
}

export default App
