import React from "react";

import { CONTENTS } from "../../constants/app";
import { Block, Container, FlexBox, Grid, Text } from "../../components";
import useAdaptive from "../../hooks/useAdaptive";
import useTranslate from "../../i18n/useTranslate";

const Advantages = () => {
    const isMobile = useAdaptive();
    const { advantages } = useTranslate();

    return (
        <div id={CONTENTS.ADVANTAGES} style={{ margin: isMobile ? "20px 0" : "130px 0", scrollMarginTop: 80 }}>
            <Container>
                <Grid columns={isMobile ? 1 : 3} gap={20}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Block p={isMobile ? 30 : 50} color="gray-100" height={isMobile ? "max-content" : 450}>
                            <FlexBox height="100%" direction="column" justify="space-between" gap={30}>
                                <Text as="h2" color="gray-300" withAnimation={isMobile}>{`0${index + 1}`}</Text>
                                <FlexBox direction="column" gap={20}>
                                    <Text size={36} lh={1.2} ls={-1.08}>{advantages[`block${index + 1}`].h1}</Text>
                                    <Text>{advantages[`block${index + 1}`].p}</Text>
                                </FlexBox>
                            </FlexBox>
                        </Block>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Advantages;