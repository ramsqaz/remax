import { useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";

const useNavScroll = () => {
    const { locale } = useParams();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const isFirstMount = useRef(true);

    const sectionToScroll = searchParams.get("section");

    const scrollTo = (id) => {
        navigate(`/${locale}?section=${id}`);
    };
    useEffect(() => {
        if (sectionToScroll) {
            const elementToScroll = document.getElementById(sectionToScroll);
            if (elementToScroll) {
                elementToScroll.scrollIntoView({ behavior: isFirstMount.current ? "auto" : "smooth" });
            }
            isFirstMount.current = false;
        }
    }, [sectionToScroll, isFirstMount]);

    return { scrollTo };
};

export default useNavScroll;