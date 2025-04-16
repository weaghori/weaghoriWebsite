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
    // Aos
    useEffect(() => {
        Aos.init({
            duration: 1500,
            delay: 500,
            easing: "linear",
        });
    }, []);

    const [visible, setVisible] = useState(false);
    const [cursorStyle, setCursorStyle] = useState({ left: 0, top: 0 });
    const cursorRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        // Get the custom cursor image dimensions
        const cursorImageElement = cursorRef.current;
        const cursorWidth = cursorImageElement ? cursorImageElement.offsetWidth : 0;
        const cursorHeight = cursorImageElement ? cursorImageElement.offsetHeight : 0;

        // Offset the cursor image to center it on the mouse
        setCursorStyle({
            left: `${e.clientX - rect.left - cursorWidth / 2}px`,
            top: `${e.clientY - rect.top - cursorHeight / 2}px`,
        });
    };

    const handleMouseEnter = () => {
        setVisible(true);
    };

    const handleMouseLeave = () => {
        setVisible(false);
    };

    return (
        <>
            <div className="max-w-screen-lg mx-auto py-[30px]  md:py-20 px-6 md:px-16 z-[100]">
                <h2 className="text-4xl lg:text-8xl  text-white md:text-center font-semibold md:mt-[80px] md:my-20 my-[10px]">
                    Recent Works
                </h2>

                {/* grid section start */}
                <div className="grid md:grid-cols-4 grid-cols-1 text-white gap-7 auto-rows-auto ">
                    {/* grid box start*/}
                    <div
                        className="block md:row-start-[1] md:row-end-[6] md:col-start-2 col-span-2"
                    // data-aos="fade-up"
                    >
                        {/* work card start */}
                        <a href="/portfolio/rupiya">
                            <div className="max-w-[500px] mx-auto w-full">
                                <div
                                    className="relative inline-block group w-full mx-auto overflow-hidden"
                                    onMouseMove={handleMouseMove}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <img
                                        src={rupiya}
                                        alt="work-1"
                                        className="w-full h-full group-hover:animate-zoom"
                                    />
                                    <img 
                                        ref={cursorRef} // Ref to access the cursor image dimensions
                                        src={cursorImage} alt="Custom Cursor"
                                        style={{ position: 'absolute', left: cursorStyle.left, top: cursorStyle.top }}
                                        className={`pointer-events-none transition-opacity duration-300 ease-in-out overflow-x-hidden ${visible ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    />
                                </div>
                                <div className="py-4">
                                    <h3 className="text-4xl py-2">Rupiya</h3>
                                    <h4 className="flex justify-between text-slate-300">
                                        <span className="w-[90%]">Rebranding / Product Design / Digital Media / UI/UX
                                            Design / Website</span>
                                        <span className="w-[10%]  ml-4 md:ml-0">
                                            2022
                                        </span>
                                    </h4>
                                </div>
                            </div>
                        </a>
                        {/* work card end */}
                    </div>
                    {/* grid box end*/}

                    {/* grid box start*/}
                    <div
                        className="block md:row-start-[10] md:row-end-[16] md:col-start-1 col-span-2"
                    // data-aos="fade-up"
                    >
                        {/* work card start */}
                        <a href="/portfolio/mitticool">
                            <div className="max-w-[500px] mx-auto w-full">
                                <div
                                    className="relative inline-block group w-full mx-auto overflow-hidden"
                                    onMouseMove={handleMouseMove}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <img
                                        src={mitticool}
                                        alt="work-1"
                                        className="w-full h-full group-hover:animate-zoom"
                                    />
                                    <img 
                                        ref={cursorRef} // Ref to access the cursor image dimensions
                                        src={cursorImage} alt="Custom Cursor"
                                        style={{ position: 'absolute', left: cursorStyle.left, top: cursorStyle.top }}
                                        className={`pointer-events-none transition-opacity duration-300 ease-in-out overflow-x-hidden ${visible ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    />

                                </div>
                                <div className="py-4">
                                    <h3 className="text-4xl py-2">Mitticool</h3>
                                    <h4 className="flex justify-between text-slate-300">
                                        <span className="w-[90%]">Branding / Packaging / Social Media / Website</span>
                                        <span className="w-[10%]  ml-4 md:ml-0">
                                            2018
                                        </span>
                                    </h4>
                                </div>
                            </div>
                        </a>
                        {/* work card end */}
                    </div>
                    {/* grid box end*/}

                    {/* grid box start*/}
                    <div
                        className="block md:row-start-[14] md:row-end-[20] md:col-start-3 col-span-2"
                    // data-aos="fade-up"
                    >
                        {/* work card start */}
                        <a href="/portfolio/siddha">
                            <div className="max-w-[500px] mx-auto w-full">
                                <div
                                    className="relative inline-block group w-full mx-auto overflow-hidden"
                                    onMouseMove={handleMouseMove}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <img
                                        src={siddha}
                                        alt="work-1"
                                        className="w-full h-full group-hover:animate-zoom"
                                    />
                                    <img 
                                        ref={cursorRef} // Ref to access the cursor image dimensions
                                        src={cursorImage} alt="Custom Cursor"
                                        style={{ position: 'absolute', left: cursorStyle.left, top: cursorStyle.top }}
                                        className={`pointer-events-none transition-opacity duration-300 ease-in-out overflow-x-hidden ${visible ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    />

                                </div>
                                <div className="py-4">
                                    <h3 className="text-4xl py-2">Siddha</h3>
                                    <h4 className="flex justify-between text-slate-300">
                                        <span className="w-[90%]">Branding / Campaigns / Digital / Lead Generation</span>
                                        <span className="w-[10%]  ml-4 md:ml-0">
                                            2019
                                        </span>
                                    </h4>
                                </div>
                            </div>
                        </a>
                        {/* work card end */}
                    </div>
                    {/* grid box end*/}

                    {/* grid box start*/}
                    <div
                        className="block md:row-start-[18] md:row-end-[24] md:col-start-1 col-span-2"
                    // data-aos="fade-up"
                    >
                        {/* work card start */}
                        <a href="/portfolio/guru-randhawa">
                            <div className="max-w-[500px] mx-auto w-full">
                                <div
                                    className="relative inline-block group w-full mx-auto overflow-hidden"
                                    onMouseMove={handleMouseMove}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <img
                                        src={randhwa}
                                        alt="work-1"
                                        className="w-full h-full group-hover:animate-zoom"
                                    />
                                    <img 
                                        ref={cursorRef} // Ref to access the cursor image dimensions
                                        src={cursorImage} alt="Custom Cursor"
                                        style={{ position: 'absolute', left: cursorStyle.left, top: cursorStyle.top }}
                                        className={`pointer-events-none transition-opacity duration-300 ease-in-out overflow-x-hidden ${visible ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    />

                                </div>
                                <div className="py-4">
                                    <h3 className="text-4xl py-2">Guru Randhawa</h3>
                                    <h4 className="flex justify-between text-slate-300">
                                        <span className="w-[90%]">Branding / Social Media / Event Design / Packaging /
                                            Print Production / Concept</span>
                                        <span className="w-[10%]  ml-4 md:ml-0">
                                            2017
                                        </span>
                                    </h4>
                                </div>
                            </div>
                        </a>
                        {/* work card end */}
                    </div>
                    {/* grid box end*/}

                    {/* grid box start*/}
                    <div className="block md:row-start-[20] md:row-end-[26] md:col-start-3 col-span-2">
                        {/* work card start */}
                        <div
                            className="max-w-[500px] h-full w-full flex md:justify-center justify-center"
                            style={{ alignItems: "center" }}
                        >
                            <Link to="#" onClick={handleRedirect}>
                                <ReadMoreBtn />
                            </Link>
                        </div>
                        {/* work card end */}
                    </div>
                    {/* grid box end*/}
                </div>
                {/* grid section end */}
            </div>
        </>
    );
};

export default RecentWorks;