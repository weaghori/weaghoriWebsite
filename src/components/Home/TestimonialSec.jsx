import React, { useState } from "react";
import { AiTwotonePlayCircle } from "react-icons/ai";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { FaRegWindowClose } from "react-icons/fa";
import ReactPlayer from "react-player";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import videoShowCase from '../../assets/videos/showcase.mp4'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Mousewheel, Pagination, Navigation } from "swiper/modules";
import testimonialData from "./TestimonialData";
import VideoComponent from "../VideoComponent";
import videoPlayIcon from '../../assets/images/Play_Aghori_Testimonials_Client_Customer.svg'

const TestimonialSec = () => {

  const [showVideo, setShowVideo] = useState(false);
  const [videoData, setVideoData] = useState({});
  // const Vtitle = testimonialData.map((title) => {
  //     return title.tname;
  // })

  return (
    <>
      {showVideo ? (
        <VideoComponent video={videoData} setShowVideo={setShowVideo} />
      ) : (
        ""
      )}
      <div className="text-white lg:pt-20 pt-[30px]">
        {/* <Marquee direction="left" speed={75} className='custom_marque overflow-hidden	'>
                    <h2 className=" text-3xl md:text-7xl ">  - Members —  Team - Members — Team - Members — Team - Members — Team - Members — Team - Members — Team - Members — Team  &nbsp;   </h2>
                </Marquee> */}
        <h2 className="text-4xl lg:text-8xl md:text-center md:mt-[80px]	video-container">
          Clients Testimonials
        </h2>
      </div>
      {/* Team slider start*/}
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
          className="mySwiper"
        >
          {testimonialData.map(
            ({ id, tname, designation, imgSrc, videoUrl }) => (
              <SwiperSlide key={id}>
                <div className="h-full text-white">
                  <div className="w-full">
                    <div className="testimonialCard relative group w-full flex flex-col justify-center items-center h-full overflow-hidden">
                      <div className=" iconPlay absolute bottom-[5%] right-[5%] w-[60px] h-[60px] flex justify-center items-center rounded-full">
                        <AiTwotonePlayCircle
                          size={40}
                          className="playBtn z-[3] cursor-pointer"
                          onClick={() => {
                            setShowVideo(true);
                            setVideoData({
                              id,
                              tname,
                              designation,
                              imgSrc,
                              videoUrl,
                            });
                          }}
                        />
                      </div>

                      <img
                        src={imgSrc}
                        alt="team Members"
                        className="float-left object-cover"
                      />
                      
                    </div>
                    {/* <img src={imgSrc} alt="team Members" /> */}
                    <h3 className="text-2xl py-2">{tname}</h3>
                    <p>{designation}</p>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}

          {/* <div className="flex gap-5">
                        <div className="swiper-button-next w-[50px] h-[50px] bg-white" />
                        <div className="swiper-button-next w-[50px] h-[50px] bg-white" />
                    </div> */}
        </Swiper>
      </div>

      {/* <div>
        {showVideo ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 mt-[1200%] rounded-lg shadow-lg relative flex flex-col w-full bg-[#141618] outline-none focus:outline-none">
                  <div className="relative flex-auto">
                    <div className="md:w-[640px] md:h-[360px]">
                      <ReactPlayer
                        url={videoData.videoUrl}
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-1 border-t border-solid border-slate-200 rounded-b">
                    <h3 className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none">
                      {videoData.tname}
                    </h3>
                    <button
                      className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowVideo(false)}
                    >
                      <FaRegWindowClose size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="opacity-75 fixed inset-0 z-40 bg-black"
              onClick={() => setShowVideo(false)}
            />
          </>
        ) : null}
      </div> */}

      {/* Team slider end*/}
    </>
  );
};

export default TestimonialSec;
