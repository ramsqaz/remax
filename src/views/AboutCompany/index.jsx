import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

import { CONTENTS } from "../../constants/app";
import { FlexBox, Title, Text } from "../../components";
import background from "../../assets/images/background.png";

import "./styles.scss";
import useAdaptive from "../../hooks/useAdaptive";

const AboutCompany = () => {
    const isMobile = useAdaptive();
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    return (
        <div id={CONTENTS.ABOUT_COMPANY} ref={ref}>
            <motion.div
                className="bg-container"
                style={{ scale: scrollYProgress, y: scrollYProgress }}
            >
                <img src={background} />
            </motion.div>
            <FlexBox
                direction="column"
                gap={30}
                align="center"
                width={isMobile ? "100%" : 660}
                mx="auto"
            >
                <Title>О компании</Title>
                <Text
                    withAnimation
                    as={isMobile ? "h2" : "h1"}
                    color="black"
                    centered
                >
                    120 стран работают по франшизе
                </Text>
                <Text withAnimation color="gray-900" centered>
                    Запуск франшизы и использование передовых цифровых
                    технологий сделало компанию мировым лидером среди агентств
                    недвижимости.
                </Text>
            </FlexBox>
        </div>
    );
};

export default AboutCompany;
