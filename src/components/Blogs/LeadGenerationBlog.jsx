import React from 'react'
import styles from '../style'
import { Link } from 'react-router-dom'
import BlogItem from '../../assets/images/blog-item-dummy.webp'
import leadImg from "../../assets/images/blog/LEAD-GENRATION-FACEBOOK-TWITTER.jpg"
import leadgenImg from "../../assets/images/blog/LEAD GENERATION.svg"
import leadonFacebook from "../../assets/images/blog/LEAD-GENERATION-ON-FACEBOOK.svg"
import digimktImg from "../../assets/images/blog/FACEBOOK-BLOG-DIGITAL-MARKETING.png";

const LeadGenerationBlog = () => {
    return (
        <>
            <div className={`${styles.maxWidth} ${styles.paddingX} mx-auto text-white`}>
                {/* Post Heading start*/}
                <div className="h-[200px] md:h-[400px] flex justify-start items-center">
                    <h1 className="text-4xl md:text-8xl">Lead Generation</h1>
                </div>
                {/* Post Heading End */}

                {/* Post Content start */}
                <div className="grid md:flex gap-16">
                    {/* Post Data Start */}
                    <div className="w-full md:w-[70%]">
                        <div>
                            <img src={leadImg} alt="post-images" className="pb-6 w-full" />
                            <p>
                                In today’s world, it’s difficult to find customers or convert one, unless you have access to digital marketing tactics. Digital marketing emphasizes on a concept that allows your brand to reach the desired audience seamlessly and effectively. This concept is the Lead Generation. Lead Generation is an excellent technique to reach your potential customer if handled perfectly.

                            </p>


                            <img src={leadgenImg} alt="post-images" className="py-8 w-full" />

                            <p>
                                Lead Generation means initiating the consumer interest, in other words making people enquire about your products or services, later converting them into potential customers. Lead Generation allows more means to connect with your potential customers. Lead Generation is the most crucial factor in Sales Funnel. It can be a boom for your business if done accurately and on perfect platforms.
                                <br /><br />
                                Facebook is a Social Networking site. It has millions of users which in turn leads to humongous data. That means there are numerous potential customers out there and you can convert them into your existing customers through Facebook. Facebook has users from almost all the major age groups, which makes it a perfect platform for lead generation. Facebook gives a good amount of Lead Generation results along with many other social networking sites
                            </p>

                            <img src={leadonFacebook} alt="post-images" className="py-8 w-full" />
                            <p>
                                Facebook provides a seamless Lead Generation experience. When you are ready with your ad assets and your target audience, feed it to Facebook and it will showcase the same to those target audiences. When your ad grabs attention and clicks, Facebook will automatically fill in all the details of that user. The user has to just tap on submit making sure that he/she is interested in your brand and bang! you have generated your Lead.
                            </p>

                            <img src={digimktImg} alt="post-images" className="py-8 w-full" />
                            <p>
                                After receiving the details you can start your marketing to your potential customer. If a person filled the lead means there are high chances that he/she can become your customer. Lead Generation depends on how engaging and convincing your post is, good post, and a perfect set of the target audience has the capacity to generate many Leads.
                            </p>
                        </div>
                    </div>
                    {/* Post Data End*/}

                    {/* Post sidebar Start */}
                    <div className=" hidden md:block w-full md:w-[30%] ">
                        {/* Blogs List section start*/}
                        <div className={`${styles.maxContainerWidth} mx-auto text-white`}>
                            {/* blog item start */}
                            <Link to="/single-post">
                                <div className="mb-16">
                                    <img src={BlogItem} alt="blog-items" />
                                    <div className="p-4 bg-[#1d1b1b]">
                                        <h2 className="text-[18px] md:text-xl pb-3">Benefits of Content Writing</h2>
                                    </div>
                                </div>
                            </Link>
                            {/* blog item end */}

                            {/* blog item start */}
                            <Link to="/single-post">
                                <div className="mb-16">
                                    <img src={BlogItem} alt="blog-items" />
                                    <div className="p-4 bg-[#1d1b1b]">
                                        <h2 className="text-[18px] md:text-xl pb-3">Benefits of Content Writing</h2>
                                    </div>
                                </div>
                            </Link>
                            {/* blog item end */}

                            {/* blog item start */}
                            <Link to="/single-post">
                                <div className="mb-16">
                                    <img src={BlogItem} alt="blog-items" />
                                    <div className="p-4 bg-[#1d1b1b]">
                                        <h2 className="text-[18px] md:text-xl pb-3">Benefits of Content Writing</h2>
                                    </div>
                                </div>
                            </Link>
                            {/* blog item end */}

                            {/* blog item start */}
                            <Link to="/single-post">
                                <div className="mb-16">
                                    <img src={BlogItem} alt="blog-items" />
                                    <div className="p-4 bg-[#1d1b1b]">
                                        <h2 className="text-[18px] md:text-xl pb-3">Benefits of Content Writing</h2>
                                    </div>
                                </div>
                            </Link>
                            {/* blog item end */}

                            {/* blog item start */}
                            <Link to="/single-post">
                                <div className="mb-16">
                                    <img src={BlogItem} alt="blog-items" />
                                    <div className="p-4 bg-[#1d1b1b]">
                                        <h2 className="text-[18px] md:text-xl pb-3">Benefits of Content Writing</h2>
                                    </div>
                                </div>
                            </Link>
                            {/* blog item end */}

                            {/* blog item start */}
                            <Link to="/single-post">
                                <div className="mb-16">
                                    <img src={BlogItem} alt="blog-items" />
                                    <div className="p-4 bg-[#1d1b1b]">
                                        <h2 className="text-[18px] md:text-xl pb-3">Benefits of Content Writing</h2>
                                    </div>
                                </div>
                            </Link>
                            {/* blog item end */}

                        </div>
                        {/* Blogs List section end*/}
                    </div>
                    {/* Post sidebar End*/}

                </div>
                {/* Post Content end */}

            </div>
        </>
    )
}

export default LeadGenerationBlog
