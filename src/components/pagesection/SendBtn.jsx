import React from "react";
// scss
import "./sendBtn.css";

const SendBtn = ({ title, className }) => {
  return (
    <div className="">
      {/* <button className="btn btn-1 hover-filled-slide-up">
                <span className="rounded-full">hover me</span>
            </button> */}

      <div className="buttons">
        <button type="submit" className="blob-btn font-mono">
          {title}
          <span className="blob-btn__inner">
            <span className="blob-btn__blobs">
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
            </span>
          </span>
        </button>
        <br />

        {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                result="blur"
                stdDeviation="10"
              ></feGaussianBlur>
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                result="goo"
              ></feColorMatrix>
              <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
            </filter>
          </defs>
        </svg> */}
      </div>

      {/* <button className={"SendBtn hoverSlideUp" + " " + className}>
        <span>{title}</span>
      </button> */}
    </div>
  );
};

export default SendBtn;
