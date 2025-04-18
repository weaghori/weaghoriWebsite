import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Aos from "aos";
import { motion } from "framer-motion";
import PortfolioData from "./Portfolio/PortfolioData";
import { slideIn, staggerContainer } from "../utilities/motion";
import "aos/dist/aos.css";
import cursorImage from "../assets/images/CursorArrowWhite.png";
import "./Portfolio/portfolioHover.css";

const Portfolio = () => {
  const navigate = useNavigate();

  const handleRedirect = (url, e) => {
    e.preventDefault();
    navigate(url);
  };

  // Initialize AOS
  useEffect(() => {
    Aos.init({
      duration: 1500,
      delay: 500,
      easing: "linear",
    });
  }, []);

  // Custom hook for cursor state (same as RecentWorks)
  const useCursorState = () => {
    const [visible, setVisible] = useState(false);
    const [cursorStyle, setCursorStyle] = useState({ left: 0, top: 0 });
    const cursorRef = useRef(null);

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const cursorSize = 60; // Fixed size to match your design

      setCursorStyle({
        left: `${e.clientX - rect.left - cursorSize / 2}px`,
        top: `${e.clientY - rect.top - cursorSize / 2}px`,
      });
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    return { cursorRef, cursorStyle, visible, handleMouseMove, handleMouseEnter, handleMouseLeave };
  };

  // Portfolio card component with custom cursor
  const PortfolioCard = ({ 
    id,
    PortTitle,
    PortWork,
    PortDate,
    PortImg,
    PortStyle,
    PortLink,
    PortHeading
  }) => {
    const { cursorRef, cursorStyle, visible, handleMouseMove, handleMouseEnter, handleMouseLeave } = useCursorState();

    return (
      <div
        key={id}
        className={`w-full block ${PortStyle} promo relative cursor-none`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Custom cursor */}
        <img
          ref={cursorRef}
          src={cursorImage}
          alt="Custom Cursor"
          style={{
            position: 'absolute',
            left: cursorStyle.left,
            top: cursorStyle.top,
            width: '60px',
            height: '60px',
            zIndex: 50,
            pointerEvents: 'none',
          }}
          className={`transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
        />

        <a href={PortLink || `/portfolio/${PortTitle}`}>
          <div className="w-full md:max-w-[100%] mx-auto">
            <div className="relative group w-full ml-0 mr-auto overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "-140px", once: true }}
                className="relative group image-wrapper"
              >
                <img
                  src={PortImg}
                  alt={PortHeading}
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                />
              </motion.div>
            </div>

            <div className="py-4">
              <h3 className="text-4xl py-2">{PortHeading}</h3>
              <h4 className="flex justify-between text-slate-300">
                <span className="w-[90%]">{PortWork}</span>
                <span className="w-[10%] ml-4 md:ml-0">{PortDate}</span>
              </h4>
            </div>
          </div>
        </a>
      </div>
    );
  };

  return (
    <div className="max-w-[960px] text-white mx-auto px-6 py-20">
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
      <div className="grid md:grid-cols-4 grid-cols-1 text-white gap-x-16 gap-y-10 auto-rows-auto">
        {PortfolioData.map((item) => (
          <PortfolioCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;