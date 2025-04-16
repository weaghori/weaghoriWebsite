import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PortfolioData from "./Portfolio/PortfolioData";

function Navigation({ clientName }) {
    const sequence = [
        "rupiya",
        "mitticool",
        "siddha",
        "roha-group",
        "eagle-express",
        "om-mouldings",
        "guru-randhawa",
        "batwa",
        "amrut-masala",
        "nirvana-group",
        "mmpl",
        "namah",
        "nilam",
        "samarpan",
        "the-wine-leaf",
        "hearmo",
        "dunamis",
        "white-nirvana",
    ];

    const [prevPath, setPrevPath] = useState("");
    const [nextPath, setNextPath] = useState("");
    const [currentPath, setCurrentPath] = useState("");
    const [basePath, setBasePath] = useState(window.location.host);

    const getNextPathUrl = () => {
        if (basePath.includes("localhost")) {
            window.location.href = `http://${basePath}/portfolio/${nextPath}`;
        } else {
            window.location.href = `https://${basePath}/portfolio/${nextPath}`;
        }
    };

    const getPrevPathUrl = () => {
        if (basePath.includes("localhost")) {
            window.location.href = `http://${basePath}/portfolio/${prevPath}`;
        } else {
            window.location.href = `https://${basePath}/portfolio/${prevPath}`;
        }
    };

    const getHome = () => {
        const basePath = currentPath.split("/").slice(0, -2).join("/");
        return `${basePath}/portfolio`;
    };

    useEffect(() => {
        const currentIndex = sequence.findIndex((pf) => pf === clientName);

        if (currentIndex !== -1) {
            if (currentIndex > 0) {
                // console.log("setPrevPath:", sequence[currentIndex - 1]);
                setPrevPath(sequence[currentIndex - 1]);
            } else {
                setPrevPath(""); // No previous path if it's the first item
            }

            if (currentIndex < sequence.length - 1) {
                // console.log("setNextPath:", sequence[currentIndex + 1]);
                setNextPath(sequence[currentIndex + 1]);
            } else {
                setNextPath(""); // No next path if it's the last item
            }
        }
    }, [clientName]);

    return (
        <div className="w-full flex justify-between py-20">
            <button
                className="text-[14px] lg:text-2xl underline-offset-1 font-mono"
                onClick={() => getPrevPathUrl()}
            >
                {"<- "}
                {"Previous Project"}
            </button>
            <Link
                to={getHome()}
                className="text-[14px] lg:text-2xl underline-offset-1"
            >
                See all work
            </Link>
            <button
                className="text-[14px] lg:text-2xl underline-offset-1 font-mono"
                onClick={() => getNextPathUrl()}
            >
                {"Next Project "}
                {"->"}
            </button>
        </div>
    );
}

export default Navigation;