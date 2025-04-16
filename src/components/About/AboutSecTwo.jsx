import React from 'react'
import Marquee from 'react-fast-marquee'
import CenterImg from "../../assets/images/WE_AGHORI_01.png";

const AboutSecTwo = () => {
  return (
    <>
      <div className="w-full md:max-h-[420px] md:min-h-[420px] max-h-[300px] min-h-[300px] h-full flex flex-col justify-center items-center text-white ">
        <Marquee
          direction="left"
          speed={75}
          className="custom_marque overflow-hidden	"
        >
          <h2 className=" text-3xl md:text-6xl ">
            {" "}
            Let’s talk — Contact us — Let’s talk — Contact us — Let’s talk —
            Contact us — Let’s talk — Contact us — Let’s talk — Contact us —
            Let’s talk — Contact us — Let’s talk — Contact us —{" "}
          </h2>
        </Marquee>
        <div className="absolute z-10 flex justify-center max-w-[450px] w-full">
          <img src={CenterImg} alt="" className="w-[50%]  rounded-full" />
        </div>
      </div>
    </>
  );
};

export default AboutSecTwo
