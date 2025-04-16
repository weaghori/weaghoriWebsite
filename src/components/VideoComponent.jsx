import React, { useEffect } from "react";
import closeIcon from "../assets/images/icons8-close.svg";

function VideoComponent({ video }, setShowVideo) {
  useEffect(() => {
    const videoElement = document.getElementById("video-component");
    videoElement.innerHTML = `
      <div
        id="main-container"
        style="
          display:block;  
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,1);
          z-index: 99999;
        "
      >
        <div style="
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: flex-end;
          ">
          <img id="closebutton" class="closeIconVideo" src="${closeIcon}" style="filter: invert(1); cursor: pointer; margin: 20px 20px 20px 0 ;" alt="close-icon" />
          <iframe id="video-iframe" width="80%" style="height: 80vh; margin: auto" src="${video.videoUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <script>
      </script>
    `;

    const closeButton = document.getElementById("closebutton");
    const mainContainer = document.getElementById("main-container");
    const mainVideoIframe = document.getElementById("video-iframe");
    const handleClose = () => {
      mainVideoIframe.src = "";
      mainContainer.style.display = "none";
    };

    if (closeButton) {
      closeButton.addEventListener("click", handleClose);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (closeButton) {
        closeButton.removeEventListener("click", handleClose);
      }
    };
  }, [video, setShowVideo]);

  return <></>;
}

export default VideoComponent;
