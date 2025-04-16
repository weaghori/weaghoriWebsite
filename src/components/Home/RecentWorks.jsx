import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ReadMoreBtn from "../ReadMoreBtn";
import Aos from "aos";
import "aos/dist/aos.css";
import rupiya from "../../assets/images/portfolio/thumbnails/Rupiya_Aghori_Main.jpg";
import mitticool from "../../assets/images/portfolio/thumbnails/Mitticool_Aghori_Digital_Social_Design_Brand_1.jpg";
import siddha from "../../assets/images/portfolio/thumbnails/Siddha_thumbnail_image.jpg";
import randhwa from "../../assets/images/portfolio/thumbnails/Guru_Randhwa_Music_Rohit_Gida_Punjabi_Song_Aghori_Shiva_Mahadev.jpg";
import cursorImage from "../../assets/images/CursorArrowWhite.png"

const RecentWorks = () => {
    const handleRedirect = (e) => {
        e.preventDefault();
        window.location.href = "/portfolio"; // Replace with your desired URL
    };

    // Initialize AOS
    useEffect(() => {
        Aos.init({
            duration: 1500,
            delay: 500,
            easing: "linear",
        });
    }, []);

    // Individual image cursor state handling
    const useCursorState = () => {
        const [visible, setVisible] = useState(false);
        const [cursorStyle, setCursorStyle] = useState({ left: 0, top: 0 });
        const cursorRef = useRef(null);

        const handleMouseMove = (e) => {
            const rect = e.currentTarget.getBoundingClientRect();

            const cursorImageElement = cursorRef.current;
            const cursorWidth = cursorImageElement ? cursorImageElement.offsetWidth : 0;
            const cursorHeight = cursorImageElement ? cursorImageElement.offsetHeight : 0;

            setCursorStyle({
                left: `${e.clientX - rect.left - cursorWidth / 2}px`,
                top: `${e.clientY - rect.top - cursorHeight / 2}px`,
            });
        };

        const handleMouseEnter = () => setVisible(true);
        const handleMouseLeave = () => setVisible(false);

        return { cursorRef, cursorStyle, visible, handleMouseMove, handleMouseEnter, handleMouseLeave };
    };

    // Example image component with custom cursor
    const ImageWithCursor = ({ src, alt, title, description, year, link }) => {
        const { cursorRef, cursorStyle, visible, handleMouseMove, handleMouseEnter, handleMouseLeave } = useCursorState();

        return (
            <a href={link}>
                <div className="max-w-[500px] mx-auto w-full">
                    <div
                        className="relative group w-full mx-auto cursor-none overflow-hidden"
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={src} alt={alt} className="w-full h-full group-hover:animate-zoom" />
                        <img
                            ref={cursorRef}
                            src={cursorImage}
                            alt="Custom Cursor"
                            style={{ position: 'absolute', left: cursorStyle.left, top: cursorStyle.top }}
                            className={`pointer-events-none transition-opacity duration-300 ease-in-out overflow-x-hidden ${visible ? 'opacity-100' : 'opacity-0'}`}
                        />
                    </div>
                    <div className="py-4">
                        <h3 className="text-4xl py-2">{title}</h3>
                        <h4 className="flex justify-between text-slate-300">
                            <span className="w-[90%]">{description}</span>
                            <span className="w-[10%] ml-4 md:ml-0">{year}</span>
                        </h4>
                    </div>
                </div>
            </a>
        );
    };

    return (
        <div className="max-w-screen-lg mx-auto py-[30px] md:py-20 px-6 md:px-16 z-[100]">
            <h2 className="text-4xl lg:text-8xl text-white md:text-center font-semibold md:mt-[80px] md:my-20 my-[10px]">
                Recent Works
            </h2>

            {/* grid section start */}
            <div className="grid md:grid-cols-4 grid-cols-1 text-white gap-7 auto-rows-auto">
                {/* Use the ImageWithCursor component for each image */}
                <div className="block md:row-start-[1] md:row-end-[6] md:col-start-2 col-span-2">
                    <ImageWithCursor
                        src={rupiya}
                        alt="Rupiya"
                        title="Rupiya"
                        description="Rebranding / Product Design / Digital Media / UI/UX Design / Website"
                        year="2022"
                        link="/portfolio/rupiya"
                    />
                </div>

                <div className="block md:row-start-[10] md:row-end-[16] md:col-start-1 col-span-2">
                    <ImageWithCursor
                        src={mitticool}
                        alt="Mitticool"
                        title="Mitticool"
                        description="Branding / Packaging / Social Media / Website"
                        year="2018"
                        link="/portfolio/mitticool"
                    />
                </div>

                <div className="block md:row-start-[14] md:row-end-[20] md:col-start-3 col-span-2">
                    <ImageWithCursor
                        src={siddha}
                        alt="Siddha"
                        title="Siddha"
                        description="Branding / Campaigns / Digital / Lead Generation"
                        year="2019"
                        link="/portfolio/siddha"
                    />
                </div>

                <div className="block md:row-start-[18] md:row-end-[24] md:col-start-1 col-span-2">
                    <ImageWithCursor
                        src={randhwa}
                        alt="Guru Randhawa"
                        title="Guru Randhawa"
                        description="Branding / Social Media / Event Design / Packaging / Print Production / Concept"
                        year="2017"
                        link="/portfolio/guru-randhawa"
                    />
                </div>

                {/* Read More Button */}
                <div className="block md:row-start-[20] md:row-end-[26] md:col-start-3 col-span-2">
                    <div className="max-w-[500px] h-full w-full flex md:justify-center justify-center" style={{ alignItems: "center" }}>
                        <Link to="#" onClick={handleRedirect}>
                            <ReadMoreBtn />
                        </Link>
                    </div>
                </div>
            </div>
            {/* grid section end */}
        </div>
    );
};

export default RecentWorks;
