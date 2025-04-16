import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import TeamDataTwo from './TeamDataTwo'
import SendBtn from '../pagesection/SendBtn'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Mousewheel, Pagination, Navigation } from 'swiper/modules'
import TestimonialData from '../Home/TestimonialData'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { FaRegWindowClose } from 'react-icons/fa'
import ReactPlayer from 'react-player'


const AboutTeamTwo = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateCursorPosition);

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

  return (
    <>
      {/* Team text start */}
      <div
        className="text-white lg:pt-20 pt-[30px]"
        style={{ cursor: "pointer !imprtant" }}
      >
        <Marquee
          direction="left"
          speed={75}
          className="custom_marque overflow-hidden	"
        >
          <h2 className=" text-3xl md:text-6xl ">
            {" "}
            - Members — Team - Members — Team - Members — Team - Members — Team
            - Members — Team - Members — Team - Members — Team &nbsp;{" "}
          </h2>
        </Marquee>
      </div>
      {/* Team text end */}

      {/* Team Section grid start */}
      {/* <div className="w-full h-full py-8 sm:py-20 px-6">
        <div className="max-w-screen-lg mx-auto w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-left  py-8 md:px-4 sm:px-0">
          {teamDataTwo.map(({ id, tname, designation, imgSrc, style }) => (
            <div key={id}>
              <div className="h-full text-white ">
                <div className={`${style}`}>
                  <img src={imgSrc} alt="team Members" />
                  <h3 className="text-2xl py-2">{tname}</h3>
                  <p>{designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div> */}

      <div className="relative group w-full py-10 md:py-16 px-6 recent_cursor overflow-hidden">
        <Swiper
          direction={"horizontal"}
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={true}
          navigation={true}
          // mousewheel={true}
          // pagination={{
          //     clickable: true,
          // }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1400: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Mousewheel, Pagination, Navigation]}
          className="mySwiper relative group cursor-default group-hover:cursor-custom overflow-hidden"
        >
          {TeamDataTwo.map(({ id, tname, designation, imgSrc }) => (
            <SwiperSlide key={id}>
              <div className="h-full text-white">
                  {/*cursor-col-resize*/}
                <div className="w-full">
                  <div className="realtive group testimonialCard relative w-full flex flex-col justify-center items-center">

                    <img
                      src={imgSrc}
                      alt="team Members"
                      className="float-left"
                    />
                  </div>

                  <h3 className="text-2xl py-2">{tname}</h3>
                  <p>{designation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
          <div
            className="text-white w-full mx-auto text-center pt-12 text-4xl"
            style={{ marginTop: "50px" }}
          >
            <h2>Do you want to join our squad?</h2>
            <svg
              className="team-offer__ico text-center w-[inherit] text-4xl mt-8"
              width="30"
              height="40"
              viewBox="0 0 30 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 -6.11959e-07C15 -6.11959e-07 15 21.0317 15 40M15 40C15 26.2974 29 23.7681 29 23.7681M15 40C15 26.2974 1 23.7681 1 23.7681"
                stroke="white"
                strokeWidth="2"
              ></path>
            </svg>
          </div>

          <div className="text-center">
            <button
              className="mt-[30px]"
              onClick={(event) => (window.location.href = "/joinTeamForm")}
            >
              <SendBtn title="Click this button" className="md:mt-0 mt-7" />
            </button>
          </div>
          {/* <div className="flex gap-5">
                        <div className="swiper-button-next w-[50px] h-[50px] bg-white" />
                        <div className="swiper-button-next w-[50px] h-[50px] bg-white" />
                    </div> */}
      </div>
    </>
  );
};

export default AboutTeamTwo
