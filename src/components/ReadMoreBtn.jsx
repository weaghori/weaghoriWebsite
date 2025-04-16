import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const ReadMoreBtn = () => {
  const btnRef = useRef(null);

  const handleMouseMove = (event, btnRef) => {
    const btn = btnRef.current;
    const moveBtn = event.currentTarget;

    if (btn && moveBtn) {
      const rect = moveBtn.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      btn.style.left = x / 3 + "px";
      btn.style.top = y / 3 + "px";
    }
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    if (btn) {
      btn.style.left = "";
      btn.style.top = "";
    }
  };

  return (
    <>
      {/* Read more button start */}
      <div
        onMouseMove={(event) => handleMouseMove(event, btnRef)}
        onMouseLeave={handleMouseLeave}
        style={{
          position: "absolute",
          zIndex: "999",
        }}
        className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] moveReadMoreBtn"
      ></div>
      <motion.div
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        whileHover={{ scale: 1.1 }}
        className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]  flex justify-center items-center rounded-full absolute z-10 readMoreBtn"
        ref={btnRef}
      >
        <svg
          width="30"
          height="40"
          viewBox="0 0 30 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="readMoreSvg"
            d="M15 40C15 40 15 18.9683 15 -9.53674e-07M15 -9.53674e-07C15 13.7026 1 16.2319 1 16.2319M15 -9.53674e-07C15 13.7026 29 16.2319 29 16.2319"
            stroke="white"
            strokeWidth="2"
          ></path>
        </svg>
      </motion.div>

      {/* Read more button end */}
    </>
  );
};

export default ReadMoreBtn;
