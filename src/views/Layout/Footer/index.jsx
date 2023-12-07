import React from "react";
import { Link } from "react-scroll";

import { Container, FlexBox, Text, Button } from "../../../components";
import { PhoneIcon, Remax } from "../../../assets/icons";
import { SCROLL_NAVS } from "../../../constants/app";

import "./styles.scss";
import useAdaptive from "../../../hooks/useAdaptive";

const Footer = () => {
    const isMobile = useAdaptive();
    const callToPhone = () => {
        window.open("tel:+7 700 888 80 80", '_self');
    };

    return (
        <footer>
            <Container>
                <FlexBox direction="column" gap={isMobile ? 20 : 50}>
                    <FlexBox align="center" direction={isMobile ? "column" : "row"} justify="space-between" gap={isMobile ? 30 : 50}>
                        <FlexBox height={34} gap={5} direction="column">
                            <Remax />
                            <Text size={11.6} weight={600} lh={1}>Казахстан</Text>
                        </FlexBox>
                        {isMobile && (
                            <Button
                                variant="secondary"
                                size="sm"
                                startIcon={<PhoneIcon />}
                                onClick={callToPhone}
                            >
                                +7 700 888 80 80
                            </Button>
                        )}
                        <FlexBox width="100%" direction={isMobile ? "column" : "row"} align="center"  justify="center" gap={30}>
                            {SCROLL_NAVS.map(({ content, label }) => (
                                <Link
                                    key={content}
                                    to={content}
                                    spy
                                    offset={-80}
                                    smooth
                                >
                                    <Text color="gray-300">{label}</Text>
                                </Link>
                            ))}
                        </FlexBox>
                        {!isMobile && (
                            <Button
                                variant="secondary"
                                size="sm"
                                startIcon={<PhoneIcon />}
                                onClick={callToPhone}
                            >
                                +7 700 888 80 80
                            </Button>
                        )}
                    </FlexBox>
                    <hr />
                    <Text color="gray-300" centered={isMobile} size={12} lh="16px" mb={isMobile ? 0 : 20}>©2023, RE/MAX Казахстан. Все права защищены</Text>
                </FlexBox>
            </Container>
        </footer>
    )
};

export default Footer;