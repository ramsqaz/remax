import React from "react";

import { Container, FlexBox, Grid, Text, Title } from "../../components";
import { CONTENTS } from "../../constants/app";
import education1 from "../../assets/images/education-1.jpeg";
import education2 from "../../assets/images/education-2.jpeg";
import education3 from "../../assets/images/education-3.jpeg";

import "./styles.scss";
import useAdaptive from "../../hooks/useAdaptive";
import useTranslate from "../../i18n/useTranslate";

const Education = () => {
    const isMobile = useAdaptive();
    const { education } = useTranslate();

    return (
        <div id={CONTENTS.EDUCATION}>
            <Container>
                <FlexBox direction="column" gap={30} align="center">
                    <Title>{education.title}</Title>
                    <Text withAnimation width={isMobile ? "100%" : "50%"} centered as={isMobile ? "h2" : "h1"} color="black" mb={20}>{education.h1}</Text>
                    <Grid columns={isMobile ? 1 : 3}>
                        <div className="card">
                            <img src={education1} />
                            <FlexBox direction="column" gap={20} mx={40}>
                                <Text size={36} lh={1.2} ls={-1.08}>{education.card1.h1}</Text>
                                <FlexBox align="center" gap={30}>
                                    <Text as="h2" color="gray-200">01</Text>
                                    <Text>{education.card1.li1}</Text>
                                </FlexBox>
                                <FlexBox align="center" gap={30}>
                                    <Text as="h2" color="gray-200">02</Text>
                                    <Text>{education.card1.li2}</Text>
                                </FlexBox>
                                <FlexBox align="center" gap={30}>
                                    <Text as="h2" color="gray-200">03</Text>
                                    <Text>{education.card1.li3}</Text>
                                </FlexBox>
                                <FlexBox align="center" gap={30}>
                                    <Text as="h2" color="gray-200">04</Text>
                                    <Text>{education.card1.li4}</Text>
                                </FlexBox>
                            </FlexBox>
                        </div>
                        <div className="card">
                            <img src={education2} />
                            <FlexBox direction="column" gap={20} mx={40}>
                                <Text size={36} lh={1.2} ls={-1.08}>{education.card2.h1}</Text>
                                <FlexBox align="center" gap={30}>
                                    <Text as="h2" color="gray-200">01</Text>
                                    <Text>{education.card2.li1}</Text>
                                </FlexBox>
                                <FlexBox align="center" gap={30}>
                                    <Text as="h2" color="gray-200">02</Text>
                                    <Text>{education.card2.li2}</Text>
                                </FlexBox>
                                <FlexBox align="center" gap={30}>
                                    <Text as="h2" color="gray-200">03</Text>
                                    <Text>{education.card2.li3}</Text>
                                </FlexBox>
                                <FlexBox align="center" gap={30}>
                                    <Text as="h2" color="gray-200">04</Text>
                                    <Text>{education.card2.li4}</Text>
                                </FlexBox>
                            </FlexBox>
                        </div>
                        <div className="card">
                            <img src={education3} />
                            <FlexBox direction="column" gap={20} mx={40}>
                                <Text size={36} lh={1.2} ls={-1.08}>{education.card3.h1}</Text>
                                <FlexBox align="center" gap={30}>
                                    <Text as="h2" color="gray-200">01</Text>
                                    <Text>{education.card3.li1}</Text>
                                </FlexBox>
                                <FlexBox align="center" gap={30}>
                                    <Text as="h2" color="gray-200">02</Text>
                                    <Text>{education.card3.li2}</Text>
                                </FlexBox>
                                <FlexBox align="center" gap={30}>
                                    <Text as="h2" color="gray-200">03</Text>
                                    <Text>{education.card3.li3}</Text>
                                </FlexBox>
                            </FlexBox>
                        </div>
                    </Grid>
                </FlexBox>
            </Container>
        </div>
    );
};

export default Education;