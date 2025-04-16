import React from 'react'
import { Link } from "react-router-dom";
import ReadMoreBtn from '../ReadMoreBtn';

const AboutSecThree = () => {
    const handleRedirect = (e) => {
        e.preventDefault();
        window.location.href = "/expertis"; // Replace with your desired URL
    };
    return (
        <>
            <div className="w-full text-white px-6 md:py-10 py-[20px]">
                <div className="max-w-[850px] f0full mx-auto flex flex-col justify-center gap-[100px] ">
                    <p className="text-2xl md:text-4xl">
                        Recently we have been tinkering with providing IT Solutions as well
                        so we have everything covered for you. Along with being tech-savvy,
                        we are also extremely intuitive at heart, and our creative minds
                        that have forever resembled a free-bird ensure that same is also
                        reflected in the services we offer.
                    </p>
                    <div className="w-full flex md:flex-row-reverse flex-col gap-[30px] mt-[30px]">
                        <div className="md:w-[48%]">
                            <p className="pb-[30px]">
                                Our work also certifies that we build a brand that is customized
                                according to your requirements. Be it branding or logo design or
                                website development we assure that everything is first approved
                                by you and then finalized by us. Our social media experts work
                                incredibly hard so that your brand is promoted to the best of
                                our abilities. With our team of professional individuals, we
                                make sure that we are not only creating your brand but that we
                                are inculcating it.
                            </p>
                            <hr />
                        </div>
                        <div className="md:w-[48%] flex items-end">
                            <Link to="#" onClick={handleRedirect}>
                                <ReadMoreBtn />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutSecThree
