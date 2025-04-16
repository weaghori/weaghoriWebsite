import React from 'react'
import headerImg from "../../assets/images/header-dummy-image.webp";
import BlogItem from "../../assets/images/blog-item-dummy.webp";
import contentImg from "../../assets/images/blog/CONTENT-WRITING.png";
import leadImg from "../../assets/images/blog/LEAD-GENRATION-FACEBOOK-TWITTER.jpg";
import styles from '../style';
import SendBtn from '../pagesection/SendBtn';
import { Link } from 'react-router-dom';

const BlogsCol = () => {
    return (
        <>
            <div className="w-full px-6 pt-[90px]">
                {/* header section */}
                <div className="max-w-[90%] mx-auto text-white">
                    {/* header Image */}
                    {/* <div>
                        <img src={headerImg} alt="Header" />
                    </div> */}
                    {/* header heading */}
                    <div className="text-center py-1">
                        <h3>WE’RE HERE TO HELP YOU</h3>
                        <h1 className="sm:text-[108px] text-4xl leading-10 sm:leading-[100px]  font-bold py-4 ">
                            Our Blogs
                        </h1>
                    </div>
                </div>

                {/* Blogs List section start*/}
                <div className={`${styles.maxContainerWidth} mx-auto text-white`}>
                    {/* blog item start */}
                    <Link to="/blogs/benefits-of-content-writing">
                        <div className="my-8 recent_cursor">
                            <img
                                src={contentImg}
                                alt="blog-items"
                            />
                            <div className="p-8 bg-[#1d1b1b]">
                                <h2 className="text-2xl md:text-4xl pb-3">
                                    Benefits of Content Writing
                                </h2>
                                <p>
                                    You are not alien in this world if you are looking for the
                                    best Content Writing Services that can enhance and increase
                                    the value of your content on your social media, website,
                                    profile along with increasing website traffic and driving
                                    sales.
                                </p>
                                <div className="grid md:flex justify-between items-center py-4">
                                    <h4 className="text-xl  text-gray-400 py-3">
                                        November 22, 2020
                                    </h4>
                                    <SendBtn title="Read More" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    {/* blog item end */}

                    {/* blog item start */}
                    <Link to="/blogs/Lead-Generation">
                        <div className="my-16 recent_cursor">
                            <img
                                src={leadImg}
                                alt="blog-items"
                            />
                            <div className="p-8 bg-[#1d1b1b]">
                                <h2 className="text-2xl md:text-4xl pb-3">Lead Generation</h2>
                                <p>
                                    In today’s world, it’s difficult to find customers or convert
                                    one, unless you have access to digital marketing tactics.
                                    Digital marketing emphasizes on a concept that allows your
                                    brand to reach the desired audience seamlessly and
                                    effectively.
                                </p>
                                <div className="grid md:flex justify-between items-center py-4">
                                    <h4 className="text-xl  text-gray-400 py-3">
                                        November 22, 2020
                                    </h4>
                                    <SendBtn title="Read More" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    {/* blog item end */}

                    {/* blog item start */}
                    <div className="my-16 recent_cursor">
                        <img src={BlogItem} alt="blog-items" />
                        <div className="p-8 bg-[#1d1b1b]">
                            <h2 className="text-2xl md:text-4xl pb-3">
                                Benefits of Content Writing
                            </h2>
                            <p>
                                You are not alien in this world if you are looking for the best
                                Content Writing Services that can enhance and increase the value
                                of your content on your social media, website, profile along
                                with increasing website traffic and driving sales.
                            </p>
                            <div className="grid md:flex justify-between items-center py-4">
                                <h4 className="text-xl  text-gray-400 py-3">
                                    November 22, 2020
                                </h4>
                                <SendBtn title="Read More" />
                            </div>
                        </div>
                    </div>
                    {/* blog item end */}

                    {/* blog item start */}
                    <div className="my-16 recent_cursor">
                        <img src={BlogItem} alt="blog-items" />
                        <div className="p-8 bg-[#1d1b1b]">
                            <h2 className="text-2xl md:text-4xl pb-3">
                                Benefits of Content Writing
                            </h2>
                            <p>
                                You are not alien in this world if you are looking for the best
                                Content Writing Services that can enhance and increase the value
                                of your content on your social media, website, profile along
                                with increasing website traffic and driving sales.
                            </p>
                            <div className="grid md:flex justify-between items-center py-4">
                                <h4 className="text-xl  text-gray-400 py-3">
                                    November 22, 2020
                                </h4>
                                <SendBtn title="Read More" />
                            </div>
                        </div>
                    </div>
                    {/* blog item end */}
                </div>
                {/* Blogs List section end*/}
            </div>
        </>
    );
};

export default BlogsCol
