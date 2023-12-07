import React, { forwardRef } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

import "./styles.scss";

const FlexBox = forwardRef(({ children, as: Element = "div", style, direction, gap, align, justify, height, width, mt, ml, mb, mr, m, mx, my, className, ...props }, ref) => (
    <Element
        className={classNames("flex-box", className)}
        style={{
            gap, height, width,
            flexDirection: direction,
            alignItems: align,
            justifyContent: justify,
            marginLeft: ml || mx || m,
            marginTop: mt || my || m,
            marginBottom: mb || my || m,
            marginRight: mr || mx || m,
            ...style
        }}
        ref={ref}
        {...props}
    >
        {children}
    </Element>
));

export const MFlexBox = motion(FlexBox);

export default FlexBox;