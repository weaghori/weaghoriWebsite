import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import { contentWritingData } from "./ServicesContents";
import contentWriting from '../../assets/images/services/content-writing.svg'

const ContentWriting = () => {
  return (
    <>
            <div className={`${styles.maxWidth} ${styles.paddingX} mx-auto text-white pt-[110px]`}>
                <div className="bg-[#ff443b]">
                    <img className="max-w-[80%] mx-auto" src={contentWriting} alt="services" />
                </div>

                <div className="md:py-20 py-8 ">
                    <h1 className="text-3xl mb-8">Generate Potential Customers with our Efficient Content Writing Services</h1>
                    <div className="text-justify gap-2 grid grid-cols-1">
                        <p>
                        Content Writing is an integral part in the world of digital marketing. To attract customers today, a business would require a series of outstanding words that stand out from the rest to blow the minds of their target audiences. With the delivery of unique content, businesses can push down the marketing process further to the sales funnel.
                        </p>
                        <p>
                        With the best content writing strategies, a brand can uplift its marketing campaigns easily and can make an even greater impact on the target audience. The best marketing communication agencies say that creatively written content can break or make the brand, thus, investing more effort into this form of marketing will help the brand gain more reach and success in the long term.
                        </p>
                        <p>
                        From creating blogs to generating content for websites and on social media, Aghori Media House avails the best and the most innovative content writing services that epitomize your brand’s identity. Through effective communication on the digital platforms, Aghori’s content strategies are sure to get the best results for your brand.
                        </p>
                    </div>


                </div>


                {contentWritingData.map(({ id, Img, thinTitle, Des, boldTitle }) => (
                    <>
                        {/*start */}
                        <hr />
                        <div key={id} className="md:py-20 py-10 gap-4 grid grid-cols-1 md:grid-cols-6 text-justify">

                            {/* icon */}
                            <div className="col-span-2" >
                                <img src={Img} alt={thinTitle} className="invert  w-[60%] my-auto" />
                            </div>

                            {/* Content & Heading */}
                            <div className="col-span-4 md:pl-10">
                                <h3 className="text-3xl md:text-5xl leading-normal md:mb-10 my-5"><span className="font-extralight ">{thinTitle}</span><br />{boldTitle}</h3>
                                <p>
                                    {Des}
                                </p>
                            </div>
                        </div>
                        {/* End */}
                    </>
                ))}

                <hr />
                {/* Navigation start */}
                <div className="w-full flex justify-between py-8 md:py-12">
                    <Link to="#" className="text-sm md:text-2xl underline underline-offset-1">Previous Service</Link>
                    <Link to="#" className="text-sm md:text-2xl underline underline-offset-1">See all Services</Link>
                    <Link to="#" className="text-sm md:text-2xl underline underline-offset-1">Next Service</Link>
                </div>
                {/* Navigation start */}

            </div>

        </>
    );
};

export default ContentWriting
