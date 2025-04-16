import React from 'react'
import Marquee from 'react-fast-marquee'
import styles from '../style'
import ImgServicesData from './ImgServicesData'
import { motion } from 'framer-motion'
import { slideIn, staggerContainer } from '../../utilities/motion';

const OurServices = () => {
    return (
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
      >
        <div className="w-full  md:h-[70vh] flex flex-col justify-center  text-white relative">
          {/* service list  start*/}
          <div className="text-white z-10 w-full md:py-20 py-[30px]">
            <div className={`${styles.maxContainerWidth} mx-auto md:px-0 trans`}>
              <h1 className="text-[1rem] lg:pl-0 pl-[15px]">Our Expertis:</h1>
              <ul
                className="font-semibold font-mono lg:pl-0 pl-[15px] leading-[2] lg:leading-[1.4]"
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <li className="text-[1.5rem] md:text-[35px] lg:text-[4rem] uppercase">
                  Graphic Design
                </li>
                <li className="text-[1.5rem] md:text-[35px] lg:text-[4rem] uppercase">
                  Branding
                </li>
                {/* <li className="text-[24px] lg:text-[40px] 2xl:text-7xl">
                  <span className="font-extralight">Content</span> creation
                </li>
  
                <li className="text-[24px] lg:text-[40px] 2xl:text-7xl">
                  <span className="font-extralight">Social</span> Media Marketing
                </li> */}
                <li className="text-[1.5rem] md:text-[35px] lg:text-[4rem] uppercase">
                  Digital Media Marketing
                </li>
                <li className="text-[1.5rem] md:text-[35px] lg:text-[4rem] uppercase">
                  Web Development
                </li>
              </ul>
            </div>
          </div>
          {/* service list  end*/}
  
          {/* Image slider start*/}
          <motion.div
            variants={slideIn("down", "ease", 0, 0.5)}
            className="w-full absolute z-1"
            viewport={{ once: false }}
            style={{
              perspective: "1000px",
            }}
          >
            <Marquee
              direction="left"
              speed={60}
              className="custom_marque"
              style={{
                transform: "rotateY(14deg)",
                width: "120%",
                opacity: 0.5,
              }}
            >
              {ImgServicesData.map((imgs) => (
                <div key={imgs.id} className="mx-1">
                  <img
                    src={imgs.imgSrc}
                    alt="img"
                    className="w-[380px] md:w-[400px] lg:w-[446.659px]"
                  />
                </div>
              ))}
            </Marquee>
          </motion.div>
          {/* Image slider End*/}
        </div>
      </motion.div>
    );
  };
  
  export default OurServices;
