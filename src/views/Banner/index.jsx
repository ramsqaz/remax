import React from "react";

import { CONTENTS } from "../../constants/app";
import useAdaptive from "../../hooks/useAdaptive";
import { Button, Container, FlexBox, Text } from "../../components";

import mainBanner from "../../assets/images/main-banner.jpg";
import useTranslate from "../../i18n/useTranslate";

import "./styles.scss";
import useNavScroll from "../../hooks/useNavScroll";

const Banner = () => {
    const isMobile = useAdaptive();
    const { banner } = useTranslate();
    const { scrollTo } = useNavScroll();

    return (
        <div id={CONTENTS.MAIN} style={{ scrollMarginTop: 80 }}>
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
                                {banner.h1}
                            </Text>
                        </Container>
                        <img className="mobile-banner" src={mainBanner} />
                        <Container>
                            <Button
                                color="red"
                                variant="primary"
                                fullWidth={isMobile}
                                onClick={() => scrollTo(CONTENTS.REQUEST)}
                            >
                                {banner.btn}
                            </Button>
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
                                {banner.h1}
                            </Text>
                            <Button color="red" variant="primary" onClick={() => scrollTo(CONTENTS.REQUEST)}>
                                {banner.btn}
                            </Button>
                        </FlexBox>
                    </>
                )}
            </div>
        </div>
    );
};

export default Banner;
