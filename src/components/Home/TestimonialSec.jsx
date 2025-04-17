import React, { useState } from "react";
import { AiTwotonePlayCircle } from "react-icons/ai";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { FaRegWindowClose } from "react-icons/fa";
import ReactPlayer from "react-player";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Mousewheel, Pagination, Navigation } from "swiper/modules";
import testimonialData from "./TestimonialData";
import VideoComponent from "../VideoComponent";
import videoPlayIcon from "../../assets/images/Play_Aghori_Testimonials_Client_Customer.svg"; // ✅ Custom cursor SVG

const TestimonialSec = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoData, setVideoData] = useState({});

  return (
    <>
      {showVideo ? (
        <VideoComponent video={videoData} setShowVideo={setShowVideo} />
      ) : (
        ""
      )}

      <div className="text-white lg:pt-20 pt-[30px]">
        <h2 className="text-4xl lg:text-8xl md:text-center md:mt-[80px] video-container">
          Clients Testimonials
        </h2>
      </div>

      {/* Team slider start */}
      <div
  className="relative group w-full py-10 md:py-16 px-6 recent_cursor overflow-hidden"
  style={{
    cursor: 'url("/cursor/Aerrow_Aghori_Testimonials_Client.png") 32 32, auto',
  }}
>
        <Swiper
          direction={"horizontal"}
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={true}
          navigation={true}
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
                      <div className="iconPlay absolute bottom-[5%] right-[5%] w-[60px] h-[60px] flex justify-center items-center rounded-full">
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
                    <h3 className="text-2xl py-2">{tname}</h3>
                    <p>{designation}</p>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
      {/* Team slider end */}
    </>
  );
};

export default TestimonialSec;
