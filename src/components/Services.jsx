import React, { useEffect, useState } from "react";
import styles from "./style";
import servicesData from "./Services/ServicesData";
import { motion } from "framer-motion";
import AnimatedCharacters from "./Services/AnimatedCharacters";
import aos from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import cursorImage from "../assets/images/CursorArrowWhite.png"; // Update path to your cursor image

const Services = () => {
  const [basePath, setBasePath] = useState(window.location.host);
  const [hoverStates, setHoverStates] = useState(
    servicesData.map(() => ({
      visible: false,
      cursorStyle: { left: 0, top: 0 },
    }))
  );
  const navigate = useNavigate();

  // Initialize AOS animations
  useEffect(() => {
    aos.init({
      duration: 2000,
    });
  }, []);

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cursorWidth = 30;
    const cursorHeight = 30;

    const newHoverStates = [...hoverStates];
    newHoverStates[index].cursorStyle = {
      left: `${e.clientX - rect.left - cursorWidth / 2}px`,
      top: `${e.clientY - rect.top - cursorHeight / 2}px`,
    };
    setHoverStates(newHoverStates);
  };

  const handleMouseEnter = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index].visible = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseLeave = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index].visible = false;
    setHoverStates(newHoverStates);
  };

  const redirectTo = (url) => {
    if (basePath.includes("localhost")) {
      window.location.href = `http://${basePath}${url}`;
    } else {
      window.location.href = `https://${basePath}${url}`;
    }
  };

  return (
    <>
      <div
        data-aos="fade-up"
        className={`${styles.maxWidth} mx-auto px-6 md:py-20 py-10 !pt-[120px]`}
      >
        {/* text header start */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.025,
              },
            },
          }}
        >
          <div className={`container ${styles.maxContainerWidth}`}>
            <p className="leading-[1] lg:leading-[0.2]">
              <AnimatedCharacters
                type="heading2"
                text="Creative and strategic approach for your business goals and tasks"
              />
            </p>

            <p className="max-w-md text-white my-16">
              Our relentless pursuit of excellence and our unwavering commitment
              to artistic integrity set us apart in the industry. With a
              seamless fusion of cutting-edge technology and a deep
              understanding of human emotions, we craft immersive brand
              experiences that leave a lasting impression.
            </p>
          </div>
        </motion.div>
        {/* text header end */}
      </div>

      <div className={`${styles.maxWidth} mx-auto px-6 md:py-20 py-15`}>
        {/* grid start */}
        <div className="grid md:grid-cols-4 grid-cols-1 text-white gap-10 auto-rows-auto ">
          {servicesData.map(
            ({ id, serTitle, serDescription, serImg, serLink, serStyle }, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "-140px", once: true }}
                onClick={() => redirectTo(serLink)}
                key={id}
                className={`relative group col-span-4 md:col-span-3 mb-6 rounded-lg recent_cursor overflow-hidden ${serStyle}`}
              >
                <div
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  className={`relative group flex md:flex-row flex-col-reverse overflow-hidden`}
                >
                  {/* Content */}
                  <div className="w-full md:w-[40%] md:p-16 p-4 justify-center flex flex-col">
                    <h2 className="mb-4 text-3xl">{serTitle}</h2>
                    <p className="text-[14px]">{serDescription}</p>
                  </div>
                  {/* Image */}
                  <div className="w-full p-4 md:w-[60%]">
                    <img
                      src={serImg}
                      alt={serTitle}
                      className="w-full overflow-hidden object-cover"
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
                          transition: "opacity 3s ease",
                          opacity: hoverStates[index].visible ? 1 : 0,
                        }}
                        className="pointer-events-none"
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
        {/* grid end */}
      </div>
    </>
  );
};

export default Services;
