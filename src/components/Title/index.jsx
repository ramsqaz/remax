import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

import Text from "../Text";
import { MFlexBox } from "../FlexBox";
import { Slash } from "../../assets/icons";


import "./styles.scss";

const Title = ({ children, textColor = "red-500", iconColor = "blue-500", mt, mb, ...props }) => (
    <MFlexBox
        className="title-component"
        gap={10}
        align="center"
        mb={mb}
        mt={mt}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { delay: 0.2, bounce: 0.3 } }}
        viewport={{ amount: 0.1, once: true }}
        {...props}
    >
        <div className={classNames("icon-container", iconColor)}><Slash /></div>
        <Text uppperCase color={textColor} weight={700} size={12} lh={2}>{children}</Text>
    </MFlexBox>
);

export default Title;