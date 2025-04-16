import React from 'react'
import styles from '../../style'
import { Link } from 'react-router-dom'
import PostImg from '../../../assets/images/blog/CONTENT-WRITING.png'
import PostImg2 from '../../../assets/images/blog/BENEFITS-OF-CONTENT-WRITING.svg'
import PostImg3 from '../../../assets/images/blog/COPY-WRITING-Blog-&-Article-Writing-Corporate-Profiles-&-Brochures.jpg'
import BlogItem from '../../../assets/images/blog-item-dummy.webp'

const SinglePost = () => {
  return (
    <>
            <div className={`${styles.maxWidth} ${styles.paddingX} mx-auto text-white`}>
                {/* Post Heading start*/}
                <div className="h-[200px] md:h-[400px] flex justify-start items-center">
                    <h1 className="text-4xl md:text-8xl">Benefits of Content Writing</h1>
                </div>
                {/* Post Heading End */}

                {/* Post Content start */}
                <div className="grid md:flex gap-16">
                    {/* Post Data Start */}
                    <div className="w-full md:w-[70%]">
                        <div>
                            <img src={PostImg} alt="post-images" className="pb-6 w-full" />
                            <p>
                                You are not alien in this world if you are looking for the best Content Writing Services that can enhance and increase the value of your content on your social media, website, profile along with increasing website traffic and driving sales. Content writing plays a crucial role in presenting any brand, business, or may it be anything. People always like to read the creative content which they find in their own likings. Sometimes some catchy words and phrases may be stuck in your mind and you keep saying that repeatedly throughout the day. This is a marketing strategy to write creatively in order to attract your customers and simultaneously promote your brand.
                                <br /> <br />
                                Content writing helps to bring loyalty to customers with your brand. Because the customers trust what your brand says and that’s where the content writing stands apart. Content Marketing Institute reported that 65 percent of content marketers say their biggest challenge is producing enough content to satisfy market demand. Fresh, high-quality content results in more leads and conversions, and improved search engine rankings. But it’s not easy to create an arsenal of timely, well-written content to satisfy your audiences’ interest and position your company as a thought leader.
                            </p>


                            <img src={PostImg2} alt="post-images" className="py-8 w-full" />

                            <h2 className={`${styles.customH2} `}>Here are some listed and proven benefits of content writing services:</h2>
                            <h3 className="text-xl py-4">Creates a Voice for Your Company.</h3>
                            <p>
                                When a client/customer visits your website, they’re interested in learning and gathering more knowledge about what it would be like to work with your company. Strong website content establishes and enhances your brand voice and maintains a consistent persona across all media channels.
                            </p>

                            <h3 className="text-xl py-4">Increases Search Engine Rankings.</h3>
                            <p>
                                Along with creating a large quantity of content, it’s important to publish high-quality content. Google unleashes web crawlers that analyze web pages and backlinks and ranks your site accordingly. Headlines and Meta descriptions are vital in raising your search engine rankings.
                            </p>

                            <h3 className="text-xl py-4">Gives Old Content New Life.</h3>
                            <p>
                                The edge to edge time commitment it takes to write completely new content frightens companies. Before creating entirely new content, evaluate the information already on your website. Many times, this content can be refreshed and repurposed to create new, more relevant content that appeals to your audience and drives action. This information can also be used to create other types of content, including webinars, podcasts, and infographics that can reach a wider audience and increase your web presence.
                            </p>

                            <h3 className="text-xl py-4">Boosts Conversions.</h3>
                            <p>
                                A healthy and resolute action on your web page increases conversions. The call to action prompts your customer, visitor, or lead to take action. This action might be to download a case study, sign-up for the newsletter, attend an event, or contact your firm. It must be eye-catching, creative, short, simple, and informative. It also needs to be displayed effectively on your website so that visitors can easily access it and you can increase web traffic.
                            </p>

                            <img src={PostImg3} alt="post-images" className="py-8 w-full" />

                            <h3 className="text-xl py-4">There are several options to choose from for people who aspire to have fulfilling services like:</h3>

                            <ul className="list-disc list-inside grid gap-2 py-4">
                                <li> Academic Writing </li>
                                <li> Article Writing</li>
                                <li> Profile Writing </li>
                                <li> Business Writing </li>
                                <li> Freelance Writing </li>
                                <li> SEO Content Writing</li>
                                <li> Website Content Writing </li>
                                <li> Technical Writing </li>
                            </ul>

                            <p>
                                As we provide content writing services we make assure to care for your all content writing requirements. High-quality content writing plays an important role in marketing success and lead generation.
                                <br /><br />
                                We understand this and are here to provide you with the best fresh result-driven content to satisfy your needs.
                                <br /><br />
                                We totally understand to stand out from the rest and to do so, our versatile content writers do the following things before presenting you with your aspiring content writing results:
                                <br /><br />
                                These qualities give you a result-driven success:
                            </p>

                            <ul className="list-disc list-inside grid gap-2 py-4">
                                <li>Generating effective and eye-catching headlines.</li>
                                <li>Create user attention on reading the first starting sentence.</li>
                                <li>Doing in detail and profound research on the content topics.</li>
                                <li>Focus on Purpose</li>
                                <li>Optimize digital content.</li>
                            </ul>

                            <p>
                                Hence we do believe that you need the best content services and here we are to level-up-to your aspiring standards and progress towards a journey called success with 360-degree advertising solutions around to see and explore!
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
    );
};

export default SinglePost
