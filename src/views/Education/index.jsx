import React from "react";

import { Container, FlexBox, Grid, Text, Title } from "../../components";
import { CONTENTS } from "../../constants/app";
import education1 from "../../assets/images/education-1.jpeg";
import education2 from "../../assets/images/education-2.jpeg";
import education3 from "../../assets/images/education-3.jpeg";

import "./styles.scss";
import useAdaptive from "../../hooks/useAdaptive";

const Education = () => {
    const isMobile = useAdaptive();

    return (
        <div id={CONTENTS.EDUCATION}>
            <Container>
                <FlexBox direction="column" gap={30} align="center">
                    <Title>Обучение</Title>
                    <Text withAnimation width={isMobile ? "100%" : "50%"} centered as={isMobile ? "h2" : "h1"} color="black" mb={20}>Обучение RE/MAX - это обмен опытом и синергия всей сети</Text>
                    <Grid columns={isMobile ? 1 : 3}>
                        <div className="card">
                            <img src={education1} />
                            <FlexBox direction="column" gap={20} mx={40}>
                                <Text size={36} lh={1.2} ls={-1.08}>Брокер</Text>
                                <FlexBox align="center" gap={30}>
                                    <Text as="h2" color="gray-200">01</Text>
                                    <Text>Руководство по открытию и управлению офисом</Text>
                                </FlexBox>
                                <FlexBox align="center" gap={30}>
                                    <Text as="h2" color="gray-200">02</Text>
                                    <Text>Рекрутинг и содержание агентов</Text>
                                </FlexBox>
                                <FlexBox align="center" gap={30}>
                                    <Text as="h2" color="gray-200">03</Text>
                                    <Text>Инструменты RE/MAX</Text>
                                </FlexBox>
                                <FlexBox align="center" gap={30}>
                                    <Text as="h2" color="gray-200">04</Text>
                                    <Text>Процедуры, отчетность, особенности сотрудничества</Text>
                                </FlexBox>
                            </FlexBox>
                        </div>
                        <div className="card">
                            <img src={education2} />
                            <FlexBox direction="column" gap={20} mx={40}>
                                <Text size={36} lh={1.2} ls={-1.08}>Агент</Text>
                                <FlexBox align="center" gap={30}>
                                    <Text as="h2" color="gray-200">01</Text>
                                    <Text>Все аспекты ведения риэлторского бизнеса</Text>
                                </FlexBox>
                                <FlexBox align="center" gap={30}>
                                    <Text as="h2" color="gray-200">02</Text>
                                    <Text>Групповое и индивидуальное обучение в офисе и online</Text>
                                </FlexBox>
                                <FlexBox align="center" gap={30}>
                                    <Text as="h2" color="gray-200">03</Text>
                                    <Text>Методические материалы для использования</Text>
                                </FlexBox>
                                <FlexBox align="center" gap={30}>
                                    <Text as="h2" color="gray-200">04</Text>
                                    <Text>Участие в конференциях RE/MAX и риелторов Казахстана</Text>
                                </FlexBox>
                            </FlexBox>
                        </div>
                        <div className="card">
                            <img src={education3} />
                            <FlexBox direction="column" gap={20} mx={40}>
                                <Text size={36} lh={1.2} ls={-1.08}>Университет</Text>
                                <FlexBox align="center" gap={30}>
                                    <Text as="h2" color="gray-200">01</Text>
                                    <Text>Ресурс для самостоятельного развития и роста профессионализма агентов и брокеров</Text>
                                </FlexBox>
                                <FlexBox align="center" gap={30}>
                                    <Text as="h2" color="gray-200">02</Text>
                                    <Text>Доступ к курсам и программам обучения online</Text>
                                </FlexBox>
                                <FlexBox align="center" gap={30}>
                                    <Text as="h2" color="gray-200">03</Text>
                                    <Text>1000 видео, охватывающих все аспекты рынка недвижимости</Text>
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