import React from "react";

import { CONTENTS } from "../../constants/app";
import { Block, Container, FlexBox, Grid, Text } from "../../components";
import useAdaptive from "../../hooks/useAdaptive";

const Advantages = () => {
    const isMobile = useAdaptive();

    return (
        <div id={CONTENTS.ADVANTAGES} style={{ margin: isMobile ? "20px 0" : "130px 0" }}>
            <Container>
                <Grid columns={isMobile ? 1 : 3} gap={20}>
                    <Block p={isMobile ? 30 : 50} color="gray-100" height={isMobile ? "max-content" : 450}>
                        <FlexBox height="100%" direction="column" justify="space-between" gap={30}>
                            <Text as="h2" color="gray-300" withAnimation={isMobile}>01</Text>
                            <FlexBox direction="column" gap={20}>
                                <Text size={36} lh={1.2} ls={-1.08}>Лучшая в мире бизнес-модель</Text>
                                <Text>Ноу-хау и отработанная система помогает RE/MAX уже 50 лет сохранять лидерские позиции в более чем 119 странах мира.</Text>
                            </FlexBox>
                        </FlexBox>
                    </Block>
                    <Block p={isMobile ? 30 : 50} color="gray-100" height={isMobile ? "max-content" : 450}>
                        <FlexBox height="100%" direction="column" justify="space-between" gap={30}>
                            <Text as="h2" color="gray-300" withAnimation={isMobile}>02</Text>
                            <FlexBox direction="column" gap={20}>
                                <Text size={36} lh={1.2} ls={-1.08}>Постоянное обучение агентов и брокеров</Text>
                                <Text>Тренинги являются ключем к нашему успеху. Лучшие тренеры и успешные брокеры обучают владельцев офисов и наших агентов регулярно - лично и онлайн 24/7.</Text>
                            </FlexBox>
                        </FlexBox>
                    </Block>
                    <Block p={isMobile ? 30 : 50} color="gray-100" height={isMobile ? "max-content" : 450}>
                        <FlexBox height="100%" direction="column" justify="space-between" gap={30}>
                            <Text as="h2" color="gray-300" withAnimation={isMobile}>03</Text>
                            <FlexBox direction="column" gap={20}>
                                <Text size={36} lh={1.2} ls={-1.08}>Поддержка на каждом шагу</Text>
                                <Text>Профессиональная поддержка на этапе становления собственного бизнеса – основа для стабильного развития.</Text>
                            </FlexBox>
                        </FlexBox>
                    </Block>
                    <Block p={isMobile ? 30 : 50} color="gray-100" height={isMobile ? "max-content" : 450}>
                        <FlexBox height="100%" direction="column" justify="space-between" gap={30}>
                            <Text as="h2" color="gray-300" withAnimation={isMobile}>04</Text>
                            <FlexBox direction="column" gap={20}>
                                <Text size={36} lh={1.2} ls={-1.08}>Всемирно известный бренд</Text>
                                <Text>RE/MAX является одним из самых узнаваемых и уважаемых брендов в мире недвижимости.</Text>
                            </FlexBox>
                        </FlexBox>
                    </Block>
                    <Block p={isMobile ? 30 : 50} color="gray-100" height={isMobile ? "max-content" : 450}>
                        <FlexBox height="100%" direction="column" justify="space-between" gap={30}>
                            <Text as="h2" color="gray-300" withAnimation={isMobile}>05</Text>
                            <FlexBox direction="column" gap={20}>
                                <Text size={36} lh={1.2} ls={-1.08}>Привлечение лучших агентов</Text>
                                <Text>Эффективная система для привлечения и подготовки успешных брокеров.</Text>
                            </FlexBox>
                        </FlexBox>
                    </Block>
                    <Block p={isMobile ? 30 : 50} color="gray-100" height={isMobile ? "max-content" : 450}>
                        <FlexBox height="100%" direction="column" justify="space-between" gap={30}>
                            <Text as="h2" color="gray-300" withAnimation={isMobile}>06</Text>
                            <FlexBox direction="column" gap={20}>
                                <Text size={36} lh={1.2} ls={-1.08}>Сеть профессионалов</Text>
                                <Text>Сеть RE/MAX объединяет более 140 000 профессиональных агентов во всем мире.</Text>
                            </FlexBox>
                        </FlexBox>
                    </Block>
                </Grid>
            </Container>
        </div>
    );
};

export default Advantages;