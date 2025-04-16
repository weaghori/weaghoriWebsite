import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Aos from "aos";
import { motion } from "framer-motion";
import PortfolioData from "./Portfolio/PortfolioData";
import { slideIn, staggerContainer } from "../utilities/motion";
import "aos/dist/aos.css";
import cursorImage from "../assets/images/CursorArrowWhite.png"; // Adjust path as necessary
import "./Portfolio/portfolioHover.css";

const Portfolio = () => {
  const navigate = useNavigate();

  const handleRedirect = (url, e) => {
    e.preventDefault();
    navigate(url);
  };

  // AOS Animation Init
  useEffect(() => {
    Aos.init({
      duration: 1500,
      delay: 500,
      easing: "linear",
    });
  }, []);

  // State for hover effect for each item
  const [hoverStates, setHoverStates] = useState(
    PortfolioData.map(() => ({
      visible: false,
      cursorStyle: { left: 0, top: 0 },
    }))
  );

  // Handle mouse movement for a specific image
  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cursorWidth = 30; // You can set the cursor width dynamically if needed
    const cursorHeight = 30;

    // Update the specific image's hover state with the cursor position
    const newHoverStates = [...hoverStates];
    newHoverStates[index].cursorStyle = {
      left: `${e.clientX - rect.left - cursorWidth / 2}px`,
      top: `${e.clientY - rect.top - cursorHeight / 2}px`,
    };
    setHoverStates(newHoverStates);
  };

  // Handle mouse enter for a specific image
  const handleMouseEnter = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index].visible = true;
    setHoverStates(newHoverStates);
  };

  // Handle mouse leave for a specific image
  const handleMouseLeave = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index].visible = false;
    setHoverStates(newHoverStates);
  };

  return (
    <div className={`max-w-[960px] text-white mx-auto px-6 py-20`}>
      {/* Heading */}
      <div
        className="py-12"
        data-aos="fade-down"
        data-aos-delay="900"
        data-aos-duration="1500"
      >
        <h2 className="text-2xl sm:text-6xl text-white mt-[2%] leading-[1.4] lg:leading-[1.2]">
          Compelling visual journeys,
          <br />
          crafted to inspire
        </h2>
      </div>

      {/* Portfolio Grid */}
      <div>
        <div className="grid md:grid-cols-4 grid-cols-1 text-white gap-x-16 gap-y-10 auto-rows-auto ">
          {PortfolioData.map(
            (
              {
                id,
                PortTitle,
                PortWork,
                PortDate,
                PortImg,
                PortStyle,
                PortLink,
                PortHeading,
              },
              index
            ) => (
              <div
                key={id}
                className={`w-full block ${PortStyle} promo`}
              >
                <a
                  // to={PortTitle}
                  // onClick={(e) => handleRedirect(PortTitle, e)}
                  href={`/portfolio/${PortTitle}`}
                >
                  {/* work card start */}
                  <div className="w-full md:max-w-[100%] mx-auto">
                    <div className="relative group w-full ml-0 mr-auto recent_cursor overflow-hidden">
                      <div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ margin: "-140px", once: true }}
                          className="realtive group image-wrapper cursor-none overflow-hidden"
                          onMouseMove={(e) => handleMouseMove(e, index)}
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={() => handleMouseLeave(index)}
                        >
                          <img
                            src={PortImg}
                            alt="work-2"
                            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:animate-zoom"
                          />
                          {/* Custom cursor image */}
                          {hoverStates[index].visible && (
                            <img
                              src={cursorImage}
                              alt="Custom Cursor"
                              style={{
                                position: "absolute",
                                left: hoverStates[index].cursorStyle.left,
                                top: hoverStates[index].cursorStyle.top,
                                pointerEvents: "none",
                                transition: "opacity 0.3s ease",
                                opacity: hoverStates[index].visible ? 1 : 0,
                              }}
                              className="pointer-events-none"
                            />
                          )}
                        </motion.div>
                      </div>
                    </div>

                    <div className="py-4">
                      <h3 className="text-4xl py-2">{PortHeading}</h3>
                      <h4 className="flex justify-between text-slate-300">
                        <span className="w-[90%]">{PortWork}</span>
                        <span className="w-[10%]  ml-4 md:ml-0">{PortDate}</span>
                      </h4>
                    </div>
                  </div>
                  {/* work card end */}
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
