import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import { brandingData } from "./ServicesContents";
import ServiceNavigation from "../ServiceNavigation";
import brandig from "../../assets/images/services/Branding.svg"

const Branding = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        console.log("brandd");
        window.scrollTo(0, 0);
    });
    return (
        <>
            <div
                className={`${styles.maxWidth} ${styles.paddingX} mx-auto text-white pt-[110px]`}
            >
                <div className="bg-[#1f1f1f] rounded-lg">
                    <img
                        className="max-w-[80%] mx-auto"
                        src={brandig}
                        alt="services"
                    />
                </div>

                <div className="md:py-20 py-8 ">
                    <h1 className="text-3xl mb-8">Branding</h1>
                    <div className="text-justify gap-2 grid grid-cols-1">
                        <p>
                            Branding is essential for businesses to create a unique identity
                            and connect with their target audience. At Aghori Media House, we
                            specialize in delivering exceptional branding solutions that make
                            your business stand out.
                        </p>
                        <p>
                            Our experienced team understands the power of a strong brand. We
                            work closely with you to develop a comprehensive branding strategy
                            that resonates with your audience. From crafting a compelling
                            brand story to designing captivating logos, we ensure every
                            element reflects your unique identity.
                        </p>
                        <p>
                            Through strategic market research and competitor analysis, we
                            position your brand to highlight its unique value proposition. We
                            go beyond aesthetics and create an emotional connection with your
                            audience, building trust and loyalty.
                        </p>
                        <p>
                            At Aghori Media House, we combine creativity, strategy, and
                            industry expertise to help businesses build a strong and memorable
                            brand. Our branding solutions are designed to make a lasting
                            impact in the marketplace.
                        </p>
                        <p>
                            Elevate your brand and connect with your audience on a deeper
                            level. Contact us today to discuss how our branding services can
                            help your business thrive.
                        </p>
                    </div>

                    <h2 className="text-2xl my-8">
                        Some Objectives We Have Set By Ourselves To Provide Result Oriented
                        Branding Services To Our Clients.
                    </h2>
                </div>

                {brandingData.map(({ id, Img, thinTitle, Des, boldTitle }) => (
                    <>
                        {/*start */}
                        <hr />
                        <div
                            key={id}
                            className="md:py-20 py-10 gap-4 grid grid-cols-1 md:grid-cols-6 text-justify"
                        >
                            {/* icon */}
                            <div className="col-span-2">
                                <img
                                    src={Img}
                                    alt={thinTitle}
                                    className="w-[60%] my-auto"
                                    // className="invert w-[60%] my-auto"
                                />
                            </div>

                            {/* Content & Heading */}
                            <div className="col-span-4 md:pl-10">
                                <h3 className="text-3xl md:text-5xl leading-normal md:mb-10 my-5">
                                    <span className="font-extralight ">{thinTitle}</span>
                                    <br />
                                    {boldTitle}
                                </h3>
                                <p>{Des}</p>
                            </div>
                        </div>
                        {/* End */}
                    </>
                ))}

                <hr />
                {/* Navigation start */}
                <ServiceNavigation expertiseName={"branding"} />
                {/* Navigation start */}
            </div>
        </>
    );
};

export default Branding
