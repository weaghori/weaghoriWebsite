import React, { useEffect, useState } from "react";
import navClose from '../assets/images/navClose.svg';

function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    // useEffect(() => {
    //   const handleScroll = () => {
    //     if (window.scrollY > 50) {
    //       setIsScrolled(true);
    //     } else {
    //       setIsScrolled(false);
    //     }
    //   };

    //   window.addEventListener("scroll", handleScroll);
    //   return () => {
    //     window.removeEventListener("scroll", handleScroll);
    //   };
    // }, []);

    return (
        <header
            className="header text-white top-0 left-0 w-full z-50"
            id="navbar"
            style={{
                position: "sticky !important",
                backgroundColor: "rgba(0,0,0,0)", // Slightly opaque background for better readability
            }}
        >
            <div className="header__nav">
                <div className="max-w-lg:none w-full h-[90px] text-white z-[999] activeHeader top-0 transition ease-in-out delay-150">
                    <div className="px-6 md:px-0 flex items-center justify-between w-full md:max-w-[90%] mx-auto h-full">
                        <div className="flex items-center logo" id="home-page">
                            <a href="/" className="relative block overflow-hidden header-logo">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlSpace="preserve"
                                        width="178.284"
                                        height="16.941"
                                        viewBox="0 0 524.99 49.89"
                                        style={{
                                            shapeRendering: "geometricprecision",
                                            textRendering: "geometricprecision",
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                        }}
                                    >
                                        <defs>
                                            <style>
                                                {`.fil0 {
                                                    fill: #fff;
                                                    fill-rule: nonzero;
                                                }`}
                                            </style>
                                        </defs>
                                        <g id="Layer_x0020_1">
                                            <g id="_1678147461648">
                                                <path
                                                    className="fil0"
                                                    d="M0 49.19h7.07l1.39-9.49h8.66v-.14l1.39 9.63h7.62L18.23.69H7.91l-7.9 48.5zm9.35-16.07 3.33-23.97h.14l3.39 23.97H9.35zm34.74 16.77c7.48 0 11.36-4.44 11.36-12.19V21.83H44.43v6.93h3.81v9.49c0 3.46-1.52 4.71-3.95 4.71s-3.95-1.25-3.95-4.71V11.71c0-3.46 1.52-4.78 3.95-4.78 2.42 0 3.95 1.32 3.95 4.78v4.64h7.21v-4.16C55.45 4.43 51.57 0 44.09 0c-7.48 0-11.36 4.44-11.36 12.19v25.5c0 7.76 3.88 12.19 11.36 12.19zM64 49.2h7.62V27.38h8.18V49.2h7.62V.7H79.8v19.75h-8.18V.7H64v48.5zm43.75.69c7.48 0 11.57-4.44 11.57-12.19V12.2c0-7.76-4.09-12.19-11.57-12.19S96.18 4.45 96.18 12.2v25.5c0 7.76 4.09 12.19 11.57 12.19zm0-6.93c-2.43 0-3.95-1.32-3.95-4.78V11.71c0-3.46 1.52-4.78 3.95-4.78 2.42 0 3.95 1.32 3.95 4.78v26.47c0 3.46-1.52 4.78-3.95 4.78zm20.33 6.24h7.62V28.41h2.63c3.46 0 4.78 1.45 4.78 5.96v8.87c0 3.95.28 4.71.69 5.96h7.76c-.76-1.8-.83-3.53-.83-5.89v-8.52c0-5.47-1.25-9.08-5.06-10.25v-.14c3.39-1.39 4.99-4.57 4.99-9.56v-2.98c0-7.48-3.4-11.15-11.29-11.15h-11.29v48.5zm7.62-27.71V7.63h3.46c2.7 0 3.88 1.52 3.88 4.99v3.74c0 3.88-1.73 5.13-4.57 5.13h-2.77zm23.93 27.71h7.62V.7h-7.62v48.5zm28.02 0h6.65V12.48h.14l5.54 36.72h6.37l5.54-36.72h.14V49.2h7.21V.7h-10.88l-4.85 34.71h-.14L198.52.7h-10.88v48.5zm40.9 0h20.79v-6.93h-13.16v-14.9h10.46v-6.93h-10.46V7.62h13.16V.69h-20.79v48.5zm28.78 0h11.64c7.62 0 11.36-4.23 11.36-11.99V12.68c0-7.76-3.74-11.99-11.36-11.99h-11.64v48.5zm7.62-6.93V7.63h3.88c2.43 0 3.88 1.25 3.88 4.71v25.22c0 3.46-1.46 4.71-3.88 4.71h-3.88zm24.14 6.93h7.62V.7h-7.62v48.5zm14.92 0h7.07l1.39-9.49h8.66v-.14l1.39 9.63h7.62L322.24.7h-10.32l-7.9 48.5zm9.35-16.07 3.33-23.97h.14l3.39 23.97h-6.86zm35.15 16.07h7.62V27.38h8.18V49.2h7.62V.7h-7.62v19.75h-8.18V.7h-7.62v48.5zm43.75.69c7.48 0 11.57-4.44 11.57-12.19V12.2c0-7.76-4.09-12.19-11.57-12.19s-11.57 4.44-11.57 12.19v25.5c0 7.76 4.09 12.19 11.57 12.19zm0-6.93c-2.43 0-3.95-1.32-3.95-4.78V11.71c0-3.46 1.52-4.78 3.95-4.78 2.42 0 3.95 1.32 3.95 4.78v26.47c0 3.46-1.52 4.78-3.95 4.78zm31.41 6.93c7.48 0 11.36-4.44 11.36-12.19V.7h-7.34v37.55c0 3.46-1.46 4.71-3.88 4.71s-3.88-1.25-3.88-4.71V.7h-7.62v37c0 7.76 3.88 12.19 11.36 12.19zm30.3 0c7.48 0 11.5-4.44 11.5-12.33 0-6.03-2.01-9.91-8.38-15.52-4.99-4.36-6.58-6.93-6.58-10.46 0-3.33 1.39-4.64 3.81-4.64 2.43 0 3.81 1.32 3.81 4.78v2.49h7.21V12.2c0-7.76-3.67-12.19-11.08-12.19S442.9 4.45 442.9 12.07c0 5.54 2.08 9.49 8.45 15.1 4.99 4.36 6.51 6.93 6.51 10.95 0 3.6-1.52 4.85-3.95 4.85s-3.95-1.25-3.95-4.71v-3.33h-7.21v2.77c0 7.76 3.74 12.19 11.22 12.19zm19.49-.69h20.79v-6.93h-13.16v-14.9h10.46v-6.93h-10.46V7.62h13.16V.69h-20.79v48.5zM513.42 36.91c6.65 0 11.56-5.09 11.56-11.96 0-6.88-4.92-11.96-11.56-11.96-6.65 0-11.57 5.08-11.57 11.96 0 6.88 4.92 11.96 11.57 11.96zm0-2.33c-5.35 0-9.17-4.02-9.17-9.64 0-5.62 3.82-9.64 9.17-9.64s9.17 4.02 9.17 9.64c0 5.62-3.82 9.64-9.17 9.64zm-3.66-2.53h2.53V26.3h.86c1.16 0 1.7.53 1.7 2.06v1.7c0 1.33.07 1.56.23 1.99h2.59c-.27-.6-.3-1.2-.3-1.96v-1.7c0-1.7-.43-2.86-1.73-3.39v-.07c1.2-.53 1.73-1.56 1.73-3.09v-.3c0-2.49-1.16-3.72-3.76-3.72h-3.86v14.22zm2.53-8.08v-3.82h1.2c.96 0 1.36.53 1.36 1.7v.43c0 1.3-.6 1.7-1.53 1.7h-1.03z"
                                                ></path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className="absolute top-0 left-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlSpace="preserve"
                                        width="178.284"
                                        height="16.941"
                                        viewBox="0 0 524.99 49.89"
                                        style={{
                                            shapeRendering: "geometricprecision",
                                            textRendering: "geometricprecision",
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                        }}
                                    >
                                        <defs>
                                            <style>
                                                {`.fil0 {
                                                    fill: #fff;
                                                    fill-rule: nonzero;
                                                }`}
                                            </style>
                                        </defs>
                                        <g id="Layer_x0020_1">
                                            <g id="_1678147461648">
                                                <path
                                                    className="fil0"
                                                    d="M0 49.19h7.07l1.39-9.49h8.66v-.14l1.39 9.63h7.62L18.23.69H7.91l-7.9 48.5zm9.35-16.07 3.33-23.97h.14l3.39 23.97H9.35zm34.74 16.77c7.48 0 11.36-4.44 11.36-12.19V21.83H44.43v6.93h3.81v9.49c0 3.46-1.52 4.71-3.95 4.71s-3.95-1.25-3.95-4.71V11.71c0-3.46 1.52-4.78 3.95-4.78 2.42 0 3.95 1.32 3.95 4.78v4.64h7.21v-4.16C55.45 4.43 51.57 0 44.09 0c-7.48 0-11.36 4.44-11.36 12.19v25.5c0 7.76 3.88 12.19 11.36 12.19zM64 49.2h7.62V27.38h8.18V49.2h7.62V.7H79.8v19.75h-8.18V.7H64v48.5zm43.75.69c7.48 0 11.57-4.44 11.57-12.19V12.2c0-7.76-4.09-12.19-11.57-12.19S96.18 4.45 96.18 12.2v25.5c0 7.76 4.09 12.19 11.57 12.19zm0-6.93c-2.43 0-3.95-1.32-3.95-4.78V11.71c0-3.46 1.52-4.78 3.95-4.78 2.42 0 3.95 1.32 3.95 4.78v26.47c0 3.46-1.52 4.78-3.95 4.78zm20.33 6.24h7.62V28.41h2.63c3.46 0 4.78 1.45 4.78 5.96v8.87c0 3.95.28 4.71.69 5.96h7.76c-.76-1.8-.83-3.53-.83-5.89v-8.52c0-5.47-1.25-9.08-5.06-10.25v-.14c3.39-1.39 4.99-4.57 4.99-9.56v-2.98c0-7.48-3.4-11.15-11.29-11.15h-11.29v48.5zm7.62-27.71V7.63h3.46c2.7 0 3.88 1.52 3.88 4.99v3.74c0 3.88-1.73 5.13-4.57 5.13h-2.77zm23.93 27.71h7.62V.7h-7.62v48.5zm28.02 0h6.65V12.48h.14l5.54 36.72h6.37l5.54-36.72h.14V49.2h7.21V.7h-10.88l-4.85 34.71h-.14L198.52.7h-10.88v48.5zm40.9 0h20.79v-6.93h-13.16v-14.9h10.46v-6.93h-10.46V7.62h13.16V.69h-20.79v48.5zm28.78 0h11.64c7.62 0 11.36-4.23 11.36-11.99V12.68c0-7.76-3.74-11.99-11.36-11.99h-11.64v48.5zm7.62-6.93V7.63h3.88c2.43 0 3.88 1.25 3.88 4.71v25.22c0 3.46-1.46 4.71-3.88 4.71h-3.88zm24.14 6.93h7.62V.7h-7.62v48.5zm14.92 0h7.07l1.39-9.49h8.66v-.14l1.39 9.63h7.62L322.24.7h-10.32l-7.9 48.5zm9.35-16.07 3.33-23.97h.14l3.39 23.97h-6.86zm35.15 16.07h7.62V27.38h8.18V49.2h7.62V.7h-7.62v19.75h-8.18V.7h-7.62v48.5zm43.75.69c7.48 0 11.57-4.44 11.57-12.19V12.2c0-7.76-4.09-12.19-11.57-12.19s-11.57 4.44-11.57 12.19v25.5c0 7.76 4.09 12.19 11.57 12.19zm0-6.93c-2.43 0-3.95-1.32-3.95-4.78V11.71c0-3.46 1.52-4.78 3.95-4.78 2.42 0 3.95 1.32 3.95 4.78v26.47c0 3.46-1.52 4.78-3.95 4.78zm31.41 6.93c7.48 0 11.36-4.44 11.36-12.19V.7h-7.34v37.55c0 3.46-1.46 4.71-3.88 4.71s-3.88-1.25-3.88-4.71V.7h-7.62v37c0 7.76 3.88 12.19 11.36 12.19zm30.3 0c7.48 0 11.5-4.44 11.5-12.33 0-6.03-2.01-9.91-8.38-15.52-4.99-4.36-6.58-6.93-6.58-10.46 0-3.33 1.39-4.64 3.81-4.64 2.43 0 3.81 1.32 3.81 4.78v2.49h7.21V12.2c0-7.76-3.67-12.19-11.08-12.19S442.9 4.45 442.9 12.07c0 5.54 2.08 9.49 8.45 15.1 4.99 4.36 6.51 6.93 6.51 10.95 0 3.6-1.52 4.85-3.95 4.85s-3.95-1.25-3.95-4.71v-3.33h-7.21v2.77c0 7.76 3.74 12.19 11.22 12.19zm19.49-.69h20.79v-6.93h-13.16v-14.9h10.46v-6.93h-10.46V7.62h13.16V.69h-20.79v48.5zM513.42 36.91c6.65 0 11.56-5.09 11.56-11.96 0-6.88-4.92-11.96-11.56-11.96-6.65 0-11.57 5.08-11.57 11.96 0 6.88 4.92 11.96 11.57 11.96zm0-2.33c-5.35 0-9.17-4.02-9.17-9.64 0-5.62 3.82-9.64 9.17-9.64s9.17 4.02 9.17 9.64c0 5.62-3.82 9.64-9.17 9.64zm-3.66-2.53h2.53V26.3h.86c1.16 0 1.7.53 1.7 2.06v1.7c0 1.33.07 1.56.23 1.99h2.59c-.27-.6-.3-1.2-.3-1.96v-1.7c0-1.7-.43-2.86-1.73-3.39v-.07c1.2-.53 1.73-1.56 1.73-3.09v-.3c0-2.49-1.16-3.72-3.76-3.72h-3.86v14.22zm2.53-8.08v-3.82h1.2c.96 0 1.36.53 1.36 1.7v.43c0 1.3-.6 1.7-1.53 1.7h-1.03z"
                                                ></path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <div className="flex items-center gap-10" id="nav-page">                            
                            <nav className="hidden lg:flex" role="navigation">
                                <ul className="text-[18px] md:flex items-center space-x-10">
                                    <li className="capitalize z-20 p-4 text-base font-mono cursor-pointer hover:text-white text-gray-400 duration-200">
                                        <a duration="500" href="/identity" className="relative block overflow-hidden header-logo">                                            
                                            <div>
                                                Identity
                                            </div>                                            
                                            <div className="absolute top-0 left-0">
                                                Identity
                                            </div>
                                        </a>
                                    </li>
                                    <li className="capitalize z-20 p-4 text-base font-mono cursor-pointer hover:text-white text-gray-400 duration-200">
                                        <a duration="500" href="/portfolio" className="relative block overflow-hidden header-logo">                                            
                                            <div>
                                                portfolio
                                            </div>                                            
                                            <div className="absolute top-0 left-0">
                                                portfolio
                                            </div>
                                        </a>
                                    </li>
                                    <li className="capitalize z-20 p-4 text-base font-mono cursor-pointer hover:text-white text-gray-400 duration-200">
                                        <a duration="500" href="/expertis" className="relative block overflow-hidden header-logo">                                            
                                            <div>
                                                expertis
                                            </div>                                            
                                            <div className="absolute top-0 left-0">
                                                expertis
                                            </div>
                                        </a>
                                    </li>
                                    <li className="capitalize z-20 p-4 text-base font-mono cursor-pointer hover:text-white text-gray-400 duration-200">
                                        <a duration="500" href="/contact" className="relative block overflow-hidden header-logo">                                            
                                            <div>
                                                contact
                                            </div>                                            
                                            <div className="absolute top-0 left-0">
                                                contact
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header__menu-bar lg:hidden">
                            <button
                                className="menu-bar flex flex-col space-y-1"
                                onClick={toggleDrawer}
                            >
                                <span className="menu-bar__line bg-white h-0.5 w-6"></span>
                                <span className="menu-bar__line bg-white h-0.5 w-6"></span>
                                <span className="menu-bar__line bg-white h-0.5 w-6"></span>
                            </button>
                        </div>
                    </div>
                </div>
                {isDrawerOpen && (
                    <div className="none lg:block bg-black text-white fixed top-0 left-0 w-full h-full z-40">
                        <div className="p-6 flex flex-col space-y-4 gap-6">
                            {/* <button className="self-end text-2xl" onClick={toggleDrawer}> */}
                            <img
                                src={navClose}
                                className="self-end"
                                width={30}
                                height={30}
                                alt="X"
                                onClick={toggleDrawer}
                                style={{ paddingTop: "7px" }}
                            />
                            {/* </button> */}
                            <nav className="flex flex-col space-y-4 gap-6" role="navigation">
                                <a href="/identity" onClick={toggleDrawer}>
                                    Identity
                                </a>
                                <a href="/portfolio" onClick={toggleDrawer}>
                                    Portfolio
                                </a>
                                <a href="/expertis" onClick={toggleDrawer}>
                                    Expertis
                                </a>
                                <a href="/contact" onClick={toggleDrawer}>
                                    Contact
                                </a>
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;