import { useEffect } from "react";
import { useLocation } from "react-router";
const OnPageChange = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        // window.scrollTo(0, 0);
        window.scrollTo({ top: -10, left: 0, behavior: "smooth" });
    }, [pathname]);
    return null;
};

export default OnPageChange;
