import { useEffect, useState } from "react";

const useAdaptive = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1240);

    const checkIsMobile = () => {
        setIsMobile(window.innerWidth <= 1240);
    };

    useEffect(() => {
        window.addEventListener("resize", checkIsMobile);

        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    }, [checkIsMobile]);

    return isMobile;
};

export default useAdaptive;