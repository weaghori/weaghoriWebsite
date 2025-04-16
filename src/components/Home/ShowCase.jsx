import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import videoShowCase from '../../assets/videos/We_Aghori_Web_design_development_Branding_Logo_Design.mp4';
import styles from '../../../src/components/style';
// framer
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { videoHome, staggerContainer } from '../../utilities/motion';

gsap.registerPlugin(ScrollTrigger);

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const ShowCase = () => {
    //   const marqueeRef = useRef();
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    useLayoutEffect(() => {
        gsap.to(".marqueeRef", {
            ScrollTrigger: {
                trigger: ".marqueeRef",
                scroller: "body",
                markers: true,
                start: "top 80%",
                end: "bottom 20%",
                scrub: true,
            },
            rotate: 360,
            duration: 2,
        });
    }, []);

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className="video-container"
        >
            <div className="lg:py-40 md:h-screen relative z-[-2] flex flex-col justify-center items-center text-white home-video-reflect">
                <motion.video
                    variants={videoHome("ease", 0, 1.5)}
                    viewport={{ once: false }}
                    src={videoShowCase}
                    autoPlay
                    loop
                    muted
                    className={`${styles.maxContainerWidth} absolute z-10`}
                />
                <Marquee
                    pauseOnHover
                    direction="left"
                    speed={75}
                    className="custom_marque overflow-hidden marqueeRef z-0"
                >
                    <h2 className=" text-3xl md:text-6xl py-16	">
                        Graphic Design - Branding - Content Writing - Graphic Design-
                        Branding - Content Writing - Graphic Design - Branding - Content
                        Writing - Graphic Design - Branding - Content Writing -{" "}
                    </h2>
                </Marquee>
                <div className="absolute h-[500px] top-[652px] backdrop-blur-[40px] reflection"></div>
            </div>
        </motion.div>
    );
};

export default ShowCase;