import React from "react";
import { useNavigate } from "react-router";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouteLink } from "react-router-dom";

import {
    Container,
    FlexBox,
    Text,
    Button,
    ButtonTel,
} from "../../../components";
import { PhoneIcon, Remax } from "../../../assets/icons";
import { SCROLL_NAVS } from "../../../constants/app";

import "./styles.scss";
import useAdaptive from "../../../hooks/useAdaptive";

const Footer = () => {
    const navigate = useNavigate();
    const isMobile = useAdaptive();
    const callToPhone = () => {
        window.open("tel:+7 707 558 88 85", "_self");
    };

    return (
        <footer>
            <Container>
                <FlexBox direction="column" gap={isMobile ? 20 : 50}>
                    <FlexBox
                        align="center"
                        direction={isMobile ? "column" : "row"}
                        justify="space-between"
                        gap={isMobile ? 30 : 50}
                    >
                        <FlexBox height={34} gap={5} direction="column">
                            <Remax />
                            <Text size={11.6} weight={600} lh={1}>
                                Казахстан
                            </Text>
                        </FlexBox>
                        {isMobile && (
                            <ButtonTel
                                variant="secondary"
                                size="sm"
                                startIcon={<PhoneIcon />}
                                onClick={callToPhone}
                            >
                                +7 707 558 88 85
                            </ButtonTel>
                        )}
                        <FlexBox
                            width="100%"
                            direction={isMobile ? "column" : "row"}
                            align="center"
                            justify="center"
                            gap={30}
                        >
                            {SCROLL_NAVS.map(({ content, label }) => (
                                <ScrollLink
                                    key={content}
                                    to={content}
                                    spy
                                    offset={-80}
                                    smooth
                                    onClick={() => navigate("/")}
                                >
                                    <Text color="gray-300">{label}</Text>
                                </ScrollLink>
                            ))}
                        </FlexBox>
                        {!isMobile && (
                            <ButtonTel
                                variant="secondary"
                                size="sm"
                                startIcon={<PhoneIcon />}
                                onClick={callToPhone}
                            >
                                +7 707 558 88 85
                            </ButtonTel>
                        )}
                    </FlexBox>
                    <hr />
                    <FlexBox gap={20} justify="space-between" align="center" direction={isMobile ? "column" : "row"}>
                        <Text
                            color="gray-300"
                            centered={isMobile}
                            size={12}
                            lh="16px"
                            mb={isMobile ? 0 : 20}
                        >
                            ©2023, RE/MAX Казахстан. Все права защищены. Частная
                            компания NEU Ltd.
                        </Text>
                        <hr style={{ height: "100%", width: 1 }} />
                        <RouteLink to="/privacy-policy">
                            <Text
                                style={{ textDecoration: "none" }}
                                color="gray-300"
                                centered={isMobile}
                                size={12}
                                lh="16px"
                                mb={isMobile ? 0 : 20}
                            >
                                Политика конфиденциальности
                            </Text>
                        </RouteLink>
                    </FlexBox>
                </FlexBox>
            </Container>
        </footer>
    );
};

export default Footer;
