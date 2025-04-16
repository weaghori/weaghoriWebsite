import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PortfolioData from "./Portfolio/PortfolioData";

function ServiceNavigation({ expertiseName }) {
    const services = [
        "graphic-designing",
        "branding",
        "web-development",
        "digital-media",
    ];
    const [prevPath, setPrevPath] = useState("");
    const [nextPath, setNextPath] = useState("");
    const [currentPath, setCurrentPath] = useState("");
    const [basePath, setBasePath] = useState(window.location.host);

    const getNextPathUrl = () => {
        if (basePath.includes("localhost")) {
            window.location.href = `http://${basePath}/expertis/${nextPath}`;
        } else {
            window.location.href = `https://${basePath}/expertis/${nextPath}`;
        }
    };

    const getPrevPathUrl = () => {
        if (basePath.includes("localhost")) {
            window.location.href = `http://${basePath}/expertis/${prevPath}`;
        } else {
            window.location.href = `https://${basePath}/expertis/${prevPath}`;
        }
    };

    const getHome = () => {
        const basePath = currentPath.split("/").slice(0, -2).join("/");
        return `${basePath}/expertis`;
    };

    useEffect(() => {
        const currentIndex = services.findIndex((pf) => pf === expertiseName);

        if (currentIndex !== -1) {
            if (currentIndex > 0) {
                // console.log("setPrevPath:", sequence[currentIndex - 1]);
                setPrevPath(services[currentIndex - 1]);
            } else {
                setPrevPath(""); // No previous path if it's the first item
            }

            if (currentIndex < services.length - 1) {
                // console.log("setNextPath:", sequence[currentIndex + 1]);
                setNextPath(services[currentIndex + 1]);
            } else {
                setNextPath(""); // No next path if it's the last item
            }
        }
    }, [expertiseName]);

    return (
        <div className="w-full flex justify-between py-20">
            <button
                className="text-[14px] lg:text-2xl underline-offset-1"
                onClick={() => getPrevPathUrl()}
            >
                {"<- Previous Service"}
            </button>
            <Link
                to={getHome()}
                className="text-[14px] lg:text-2xl underline-offset-1"
            >
                See all Services
            </Link>
            <button
                className="text-[14px] lg:text-2xl  underline-offset-1"
                onClick={() => getNextPathUrl()}
            >
                {"Next Service ->"}
            </button>
        </div>
    );
}

export default ServiceNavigation;