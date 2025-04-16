import React from 'react'
import ReadMoreBtn from '../ReadMoreBtn';
import { Link } from "react-router-dom";
import styles from '../style';

const AboutContent = () => {
    const handleRedirect = (e) => {
        e.preventDefault();
        window.location.href = "/identity"; // Replace with your desired URL
      };
      return (
        <>
          <div className="flex lg:mt-24 h-full py-10 px-6 text-white  z-[100]">
            <div
              className={`${styles.maxContainerWidth}  mx-auto flex flex-col md:h-[80vh] justify-between`}
            >
              <p className="text-[24px] lg:text-[45px] md:text-[30px] lg:leading-[55px] md:leading-[40px] leading-[34px] z-6">
                Aghori Media House: Where innovation and artistic prowess converge,
                redefining the realm of branding with unparalleled creativity and
                impact.
              </p>
              <div className=" flex sm:flex-row md:flex-col lg:flex-row  py-10 lg:gap-20 gap-[40px]  items-center">
                <Link
                  to="#"
                  onClick={handleRedirect}
                  className="md:w-full w-fit flex md:justify-center pb-5"
                >
                  <ReadMoreBtn />
                </Link>
                <div className="text-white-custom w-full lg:pl-[50px] ">
                  <p>
                    we are pioneers of unconventional storytelling, pushing the
                    boundaries of imagination to create captivating brand narratives
                    that resonate deeply with audiences.
                  </p>
                  <hr className="mt-6"></hr>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    };
    
    export default AboutContent;
