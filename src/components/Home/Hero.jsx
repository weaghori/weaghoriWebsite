import React from 'react'
import baba from '../../assets/images/Aghori_Mahadev-har_Shiva_Digital_media_Marketing.png'
import { motion } from "framer-motion";
import HeroAnimatedText from './HeroAnimatedText';
import styles from '../style';

const Hero = () => {

    // Placeholder text data, as if from API
    const placeholderText = [
        // { type: "h1", text: "Aghori Media House ®" },
        // { type: "h1", text: "Aghori Media House ®"},
        // { type: "h1", text: "Emboldening and Empowering 'Brands'"}
        // { type: "span1", text: "Aghori Media Team ®" },
        // { type: "span2", text: "Digital Design" },
        // { type: "span3", text: "Boutique with Focus" },
        // { type: "span4", text: "on Aesthetics" },

        { type: "h1", text: "Emboldening and Empowering 'Brands'" },
    ];

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.055,
            },
        },
    };

    const paragraphText = {
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                ease: "easeOut",
                duration: 2,
            },
        },
        hidden: {
            y: -200,
            opacity: 0,
        },
    };

    const variantsBaba = {
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                ease: "easeOut",
                duration: 2,
                delay: 0.5,
            },
        },
        hidden: {
            y: 200,
            opacity: 0,
        },
    };

    return (
        <>
            <div className="max-w-[90%] mx-auto lg:px-4 text-white md:flex h-full pt-[120px] lg:pt-[80px] lg:pl-0">
                <div className="w-full mt-[2%] md:w-[50%] md:h-[75vh] h-[80vh] flex flex-col justify-between gap-[10px]">
                    <motion.div
                        initial="hidden"
                        // animate="visible"
                        // animate={replay ? "visible" : "hidden"}
                        animate="visible"
                        variants={container}
                        className="lg:mt-[0px] md:mt-[-30px] mt-0"
                    >
                        <div
                            className="home-banner-content max-w-full text-left md:mt-0 w-[300px] md:w-[700px] lg:w-[650px]"
                            style={{ textTransform: "uppercase" }}
                        >
                        {/* <div className={`container uppercase ${styles.maxContainerWidth}`}> */}
                        <p className="leading-[1] lg:leading-[0.2]">
                            {placeholderText.map((item, index) => {
                                return <HeroAnimatedText {...item} key={index} />;
                            })}
                        </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={paragraphText}
                        initial="hidden"
                        animate="visible"
                        className="ml-auto mr-0 "
                    >
                        <p className="lg:pl-[30%] text-[16px] lg:text-[18px] ">
                            We at Aghori Media House are a tight-knit group of open-minded
                            individuals who are determined to bring the best to the table. Our
                            goal is to present the best services that a brand would require.
                            From graphic design to website development, from branding to
                            content writing and we have so much more to offer.
                        </p>
                    </motion.div>
                </div>
                <div className="absolute top-44 z-[-1] lg:invisible md:invisible sm:visible w-[45%] ml-[22%]">
                    <img src={baba} alt="baba" className="" />
                </div>
                <motion.div
                    variants={variantsBaba}
                    initial="hidden"
                    animate="visible"
                    className="w-full md:w-[50%] flex justify-center items-center md:relative absolute md:top-[20%] md:visible invisible sm:top-0s left-0 z-[-1]"
                >
                    <img
                        src={baba}
                        alt="baba"
                        className="max-w-screen-md:w-[50%] md:w-[100%] lg:w-[50%]"
                    />
                </motion.div>
            </div>
        </>
    );
};

export default Hero
