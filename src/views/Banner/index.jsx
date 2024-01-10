import React from "react";
import { Link } from "react-scroll";

import { CONTENTS } from "../../constants/app";
import useAdaptive from "../../hooks/useAdaptive";
import { Button, Container, FlexBox, Text } from "../../components";

import mainBanner from "../../assets/images/main-banner.jpg";

import "./styles.scss";

const Banner = () => {
    const isMobile = useAdaptive();

    return (
        <div id={CONTENTS.MAIN}>
            <div className="banner">
                {isMobile ? (
                    <FlexBox direction="column" gap={20}>
                        <Container>
                            <Text
                                withAnimation
                                as={isMobile ? "h2" : "h1"}
                                color="black"
                                centered={isMobile}
                            >
                                Запустите прибыльное агентство недвижимости с
                                мировой франшизой
                            </Text>
                        </Container>
                        <img className="mobile-banner" src={mainBanner} />
                        <Container>
                            <Link to={CONTENTS.REQUEST} smooth offset={-80} spy>
                                <Button
                                    color="red"
                                    variant="primary"
                                    fullWidth={isMobile}
                                >
                                    Оставить заявку
                                </Button>
                            </Link>
                        </Container>
                    </FlexBox>
                ) : (
                    <>
                        <img className="desktop-banner" src={mainBanner} />
                        <FlexBox
                            className="content"
                            direction="column"
                            gap={30}
                            width={680}
                            height="100%"
                            mx={66}
                            align="flex-start"
                            justify="center"
                        >
                            <Text as="h1" color="white">
                                Откройте агентство недвижимости с мировой
                                франшизой
                            </Text>
                            <Link to={CONTENTS.REQUEST} smooth offset={-80} spy>
                                <Button color="red" variant="primary">
                                    Оставить заявку
                                </Button>
                            </Link>
                        </FlexBox>
                    </>
                )}
            </div>
        </div>
    );
};

export default Banner;
