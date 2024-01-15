import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

import { CONTENTS, SCROLL_NAVS } from "../../../constants/app";
import { Remax, PhoneIcon } from "../../../assets/icons";
import { FlexBox, Text, ButtonTel } from "../../../components";

import "./styles.scss";
import { useLocation, useNavigate, useParams } from "react-router";

const CrossIcon = () => (
    <svg
        width="21"
        height="19"
        viewBox="7 7 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M8.46458 15.5354L15.5356 8.46436"
            stroke="#1A3668"
            strokeWidth="2"
            strokeLinecap="butt"
        />
        <path
            d="M8.46458 8.46458L15.5356 15.5356"
            stroke="#1A3668"
            strokeWidth="2"
            strokeLinecap="butt"
        />
    </svg>
);
const FriesIcon = () => (
    <svg
        width="21"
        height="19"
        viewBox="0 0 21 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect x="0.860352" y="0.805786" width="20" height="4" fill="#1A3668" />
        <rect x="0.860352" y="7.80579" width="20" height="4" fill="#1A3668" />
        <rect x="0.860352" y="14.8058" width="20" height="4" fill="#1A3668" />
    </svg>
);

const MobileHeader = () => {
    const { pathname } = useLocation();
    const [isNavbarShown, setIsNavbarShown] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const navigate = useNavigate();

    const toggleNavbarShown = () => {
        setIsNavbarShown((prev) => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScrollStyle = {
        background: (scrollPosition > 550) || (pathname !== "/") ? "#ffffff" : "transparent",
    };

    return (
        <>
            <header
                className="mobile_header_wrapper"
                style={{ height: 80, ...handleScrollStyle }}
            >
                <div className="mobile_header">
                    <Link
                        className="go_back_btn"
                        to={CONTENTS.MAIN}
                        offset={-80}
                        smooth
                    >
                        <FlexBox height={34} gap={5} direction="column">
                            <Remax />
                            <Text size={11.6} weight={600} uppperCase lh={1}>
                                Казахстан
                            </Text>
                        </FlexBox>
                    </Link>
                    {SCROLL_NAVS && (
                        <button
                            className="menu_btn"
                            onClick={toggleNavbarShown}
                        >
                            {isNavbarShown ? <CrossIcon /> : <FriesIcon />}
                        </button>
                    )}
                </div>
                <AnimatePresence>
                    {isNavbarShown && (
                        <motion.div
                            className="mobile_navbar"
                            initial={{
                                backgroundColor: "transparent",
                                backdropFilter: "none",
                            }}
                            animate={{
                                backgroundColor: "rgba(0, 0, 0, 0.3)",
                                backdropFilter: "blur(1px)",
                            }}
                            exit={{
                                backgroundColor: "transparent",
                                backdropFilter: "none",
                            }}
                            onClick={toggleNavbarShown}
                        >
                            <motion.nav
                                initial={{
                                    x: "100%",
                                    transition: { bounce: 0.3 },
                                }}
                                animate={{ x: 0, transition: { bounce: 0.3 } }}
                                exit={{
                                    x: "100%",
                                    transition: { bounce: 0.3 },
                                }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {SCROLL_NAVS.map(
                                    ({ content, label }, index) => (
                                        <motion.li
                                            key={content}
                                            initial={{ y: 30, opacity: 0 }}
                                            animate={(custom) => ({
                                                y: 0,
                                                opacity: 1,
                                                transition: {
                                                    delay: custom * 0.1 + 0.2,
                                                    bounce: 0.2,
                                                },
                                            })}
                                            exit={{ y: 30, opacity: 0 }}
                                            custom={index + 1}
                                        >
                                            <Link
                                                to={content}
                                                offset={-80}
                                                onClick={() => {
                                                    navigate("/");
                                                    toggleNavbarShown();
                                                }}
                                                spy
                                                smooth
                                            >
                                                <Text
                                                    centered
                                                    color="black"
                                                    size={20}
                                                    lh={1.2}
                                                >
                                                    {label}
                                                </Text>
                                            </Link>
                                        </motion.li>
                                    )
                                )}
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={(custom) => ({
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            delay: 6 * 0.1 + 0.2,
                                            bounce: 0.2,
                                        },
                                    })}
                                    exit={{ y: 30, opacity: 0 }}
                                >
                                    <ButtonTel
                                        variant="secondary"
                                        size="sm"
                                        startIcon={<PhoneIcon />}
                                    >
                                        +7 707 558 88 85
                                    </ButtonTel>
                                </motion.div>
                            </motion.nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
};

export default MobileHeader;
