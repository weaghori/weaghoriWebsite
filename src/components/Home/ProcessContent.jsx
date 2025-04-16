import React from "react";
import styles from '../style';
import ReadMoreBtn from "../ReadMoreBtn";
import { Link } from "react-router-dom";

const ProcessContent = () => {
    const handleRedirect = (e) => {
        e.preventDefault();
        window.location.href = "/expertis"; // Replace with your desired URL
    };
    return (
        <>
            <div className="flex h-full md:py-10 py-[30px] px-6  text-white z-[100] ">
                <div
                    className={`${styles.maxContainerWidth}  mx-auto flex flex-col lg:h-[70vh] justify-between`}
                >
                    <p className="text-2xl md:text-[24px] lg:text-4xl mb-[35px]">
                        Our relentless pursuit of excellence and our unwavering commitment
                        to artistic integrity set us apart in the industry. With a seamless
                        fusion of cutting-edge technology and a deep understanding of human
                        emotions, we craft immersive brand experiences that leave a lasting
                        impression.
                    </p>
                    <div className="flex sm:flex-row md:flex-col lg:flex-row md:py-10 py-[10px] lg:gap-20 gap-[40px]  items-center">
                        <Link
                            to="#"
                            onClick={handleRedirect}
                            className="md:w-full w-fit flex md:justify-center pb-5"
                        >
                            <ReadMoreBtn />
                        </Link>
                        <div className="text-white-custom w-full lg:pl-[50px]">
                            <p>
                                Our team of visionary artisans, strategists, and storytellers
                                possesses an uncanny ability to unravel the essence of a brand,
                                infusing it with an electric energy that sparks curiosity and
                                captivates hearts.
                            </p>
                            <hr className="mt-6"></hr>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProcessContent;