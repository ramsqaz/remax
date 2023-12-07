import React from "react";
import { motion } from "framer-motion";

import { CONTENTS } from "../../constants/app";
import { FlexBox, Title, Text } from "../../components";
import background from "../../assets/images/background.png";

import "./styles.scss";
import useAdaptive from "../../hooks/useAdaptive";

const AboutCompany = () => {
    const isMobile = useAdaptive();

    return (
        <div id={CONTENTS.ABOUT_COMPANY}>
            <motion.div
                className="bg-container"
            >
                <img src={background} />
            </motion.div>
            <FlexBox direction="column" gap={30} align="center" width={isMobile ? "100%" : 660} mx="auto">
                <Title>О компании</Title>
                <Text withAnimation as={isMobile ? "h2" : "h1"} color="black" centered>120 стран работают по франшизе</Text>
                <Text withAnimation color="gray-900" centered>Запуск франшизы и использование передовых цифровых технологий сделало компанию мировым лидером среди агентств недвижимости.</Text>
            </FlexBox>
        </div>
    );
};

export default AboutCompany;