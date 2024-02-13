import React, { useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router";
import { NavLink } from "react-router-dom";

import {
    Container,
    FlexBox,
    Text,
    Button,
    ButtonTel,
} from "../../../components";
import { PhoneIcon, Remax } from "../../../assets/icons";
import { SCROLL_NAVS } from "../../../constants/app";
import LocaleSelector from "../LocaleSelector";
import useTranslate from "../../../i18n/useTranslate"; 
import useNavScroll from "../../../hooks/useNavScroll"; 

import "./styles.scss";

const Header = () => {
    const navigate = useNavigate();
    const { locale } = useParams();
    const { pathname } = useLocation();
    const { nav } = useTranslate();
    useNavScroll();

    // const handleClick = (id) => () => {
    //     if (pathname === ("/" + locale)) {
    //         scrollTo(id);
    //     } else {
    //         navigate("/" + locale);
    //         const timeoutId = setTimeout(() => {
    //             scrollTo(id);
    //             clearTimeout(timeoutId);
                
    //         }, 500);
    //     }
    // };

    return (
        <header>
            <div style={{ margin: "0 50px" }}>
                <FlexBox
                    align="center"
                    height={80}
                    justify="space-between"
                    gap={50}
                >
                    <FlexBox height={34} gap={5} direction="column">
                        <Remax />
                        <Text size={11.6} weight={600} lh={1} color="blue-500" uppperCase>
                            Казахстан
                        </Text>
                    </FlexBox>
                    <FlexBox
                        width="100%"
                        align="center"
                        justify="center"
                        gap={30}
                    >
                        {SCROLL_NAVS.map(({ content, label, key }) => (
                            <NavLink
                                key={content}
                                to={`/${locale}?section=${content}`}
                            >
                                <Text>{nav[key]}</Text>
                            </NavLink>
                        ))}
                    </FlexBox>
                    <LocaleSelector />
                    <ButtonTel
                        variant="secondary"
                        size="sm"
                        startIcon={<PhoneIcon />}
                    >
                        +7 707 558 88 85
                    </ButtonTel>
                </FlexBox>
            </div>
        </header>
    );
};

export default Header;
