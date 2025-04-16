import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import { socialMediaData } from "./ServicesContents";
import socialMedia from "../../assets/images/services/Social-media-marketing.svg"

const SocialMedia = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div
                className={`${styles.maxWidth} ${styles.paddingX} mx-auto text-white pt-[110px]`}
            >
                <div className="bg-[#fec200]">
                    <img
                        className="max-w-[80%] mx-auto"
                        src={socialMedia}
                        alt="services"
                    />
                </div>

                <div className="md:py-20 py-8 ">
                    <h1 className="text-3xl mb-8">Social media</h1>
                    <div className="text-justify gap-2 grid grid-cols-1">
                        <p>
                            Unleash your brand's potential with our expert social media
                            marketing services. Our skilled team helps you connect with your
                            target audience, build brand awareness, and drive growth on social
                            media.
                        </p>
                        <p>
                            Through data-driven insights, we develop tailored strategies that
                            resonate with your audience. We create engaging content, select
                            relevant channels, and spark conversations.
                        </p>
                        <p>
                            Compelling visuals, captivating copy, and strategic posting
                            schedules ensure your brand stays top-of-mind. We establish a
                            consistent brand voice, building loyalty and an online community.
                        </p>
                        <p>
                            Our team actively engages with your audience, manages your
                            reputation, and provides exceptional customer service. We foster
                            authentic connections and build trust.
                        </p>
                        <p>
                            We measure success through key metrics, providing detailed reports
                            on demographics, engagement, reach, and conversions. These
                            insights optimize our strategies for continuous growth.
                        </p>
                        <p>
                            Partner with us to unlock the power of social media. Let us craft
                            a compelling strategy that enhances your visibility, engages your
                            audience, and generates real results. Contact us now.
                        </p>
                    </div>
                </div>

                {socialMediaData.map(({ id, Img, thinTitle, Des, boldTitle }) => (
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
                                    className="invert  w-[60%] my-auto"
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
                <div className="w-full flex justify-between py-8 md:py-12">
                    <Link
                        to="#"
                        className="text-sm md:text-2xl underline underline-offset-1"
                    >
                        Previous Service
                    </Link>
                    <Link
                        to="#"
                        className="text-sm md:text-2xl underline underline-offset-1"
                    >
                        See all Services
                    </Link>
                    <Link
                        to="#"
                        className="text-sm md:text-2xl underline underline-offset-1"
                    >
                        Next Service
                    </Link>
                </div>
                {/* Navigation start */}
            </div>
        </>
    );
};

export default SocialMedia
