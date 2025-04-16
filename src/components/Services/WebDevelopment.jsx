import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import { informationBaseData, eCommerceData } from "./ServicesContents";
import ServiceNavigation from "../ServiceNavigation";
import webDev from "../../assets/images/services/Web-development.svg"
import webdevDesign from "../../assets/images/services/Web_Development_Design_UI_XI.png"

const WebDevelopment = () => {
    return (
        <>
            <div
                className={`${styles.maxWidth} ${styles.paddingX} mx-auto text-white pt-[110px]`}
            >
                <div className="bg-[#1cb04e]">
                    <img
                        className="max-w-[80%] mx-auto"
                        src={webDev}
                        alt="Web-Devlopment"
                    />
                </div>

                <div className="md:py-20 py-8">
                    <h1 className="text-3xl mb-8">Web development</h1>
                    <div className="text-justify gap-2 grid grid-cols-1">
                        <p>
                            We specialize in creating visually stunning websites that embody
                            your unique brand identity and captivate your audience.
                        </p>
                        <p>
                            Our team of talented web developers and designers understands the
                            importance of creating a website that stands out in today's
                            digital landscape. We go beyond cookie-cutter templates and
                            instead focus on crafting bespoke designs that reflect your
                            brand's personality and values.
                        </p>
                        <p>
                            With a keen eye for aesthetics and attention to detail, we create
                            visually captivating websites that leave a lasting impression.
                            From sleek and modern layouts to artistic and unconventional
                            designs, we tailor every element to showcase your brand in a chic
                            and authentic way.
                        </p>
                        <p>
                            But it's not just about looks – functionality is key. Our websites
                            are built with the latest web technologies and optimized for
                            seamless user experience. We prioritize responsive design,
                            ensuring that your website looks and functions flawlessly across
                            all devices, from desktop to mobile.
                        </p>
                        <p>
                            In addition to stunning visuals and smooth functionality, we
                            understand the importance of conveying your brand's story and
                            message effectively. Our team collaborates with you to develop
                            compelling content that engages your visitors and communicates
                            your unique value proposition.
                        </p>
                        <p>
                            At Aghori Media House, we believe that your website should be a
                            true reflection of your brand's identity. Our commitment to
                            authenticity means that we work closely with you to understand
                            your vision and bring it to life through every aspect of the
                            website development process.
                        </p>
                        <p>
                            Are you ready to elevate your online presence with a chic and
                            authentic website? Contact us today to discuss your project and
                            let us create a digital masterpiece that truly represents your
                            brand.
                        </p>
                    </div>

                    <img
                        className="max-w-[80%] mx-auto py-16"
                        src={webdevDesign}
                        alt="Web-Devlopment"
                    />
                </div>

                {/* Information Based start */}
                <hr />
                <div className="md:py-20 py-10 gap-4 grid grid-cols-1 md:grid-cols-6 text-justify">
                    {/* Heading*/}
                    <div className="col-span-2">
                        <h3 className="text-3xl md:text-5xl leading-normal mb-10">
                            <span className="font-extralight ">Information</span>
                            <br /> Based
                        </h3>
                        <p>
                            Approach the market with a website that looks like a replica of
                            your business ethics. We develop informational websites
                            incorporating our market insight and years of experience to make
                            your presence felt.
                        </p>
                    </div>

                    {/* Images  */}
                    <div className="col-span-4 md:pl-10">
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 mb-8">
                            {informationBaseData.map((infoBase) => (
                                <>
                                    {/* Icon-box */}
                                    <div>
                                        <a href={infoBase.imageLink} target_blank>
                                            <img
                                                src={infoBase.webImg}
                                                alt={infoBase.imageTitle}
                                                className="w-[75%] mx-auto"
                                            />
                                        </a>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Information Based End */}

                {/* E-commerce start */}
                <hr />
                <div className="md:py-20 py-10 gap-4 grid grid-cols-1 md:grid-cols-6 text-justify">
                    {/* Heading*/}
                    <div className="col-span-2">
                        <h3 className="text-3xl md:text-5xl leading-normal mb-10">
                            <span className="font-extralight ">E</span> - Commerce
                        </h3>
                        <p>
                            Designing of an E-commerce website is the core to the success of
                            the business. The more attractive you make it, the more business
                            you make out of it. We make your E-commerce platform look like a
                            professional store with easy to use interface engaging more
                            customers and realized.
                        </p>
                    </div>

                    {/* Images  */}
                    <div className="col-span-4 md:pl-10">
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 mb-8">
                            {eCommerceData.map((eCommerce) => (
                                <>
                                    {/* Icon-box */}
                                    <div>
                                        <a href={eCommerce.imageLink} target_blank>
                                            <img
                                                src={eCommerce.webImg}
                                                alt={eCommerce.imageTitle}
                                                className="w-[75%] mx-auto"
                                            />
                                        </a>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
                <hr />
                {/* Information Based End */}

                {/* Navigation start */}
                {/* <div className="w-full flex justify-between py-8 md:py-12">
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
        </div> */}

                <ServiceNavigation expertiseName={"web-development"} />
                {/* Navigation start */}
            </div>
        </>
    );
};

export default WebDevelopment
