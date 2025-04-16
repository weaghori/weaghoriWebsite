import React, { useEffect } from "react";

function Blank() {
  useEffect(() => {
    const nav = document.getElementById("navbar");
    const foot = document.getElementById("footer");

    nav.style = "display:none";
    foot.style = "display:none";
  }, []);
  return <div style={{ height: "100vh" }}></div>;
}

export default Blank;
