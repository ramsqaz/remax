import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

import "./styles.scss";

const Text = ({ as: Element = "div", withSlash = false, children, as, color = "gray-900", size, lh, ls, align, weight, style, withAnimation = false, uppperCase = false, centered = false, width, mb, mt, ...props }) => withAnimation
? (
    <motion.div
        className={classNames("text", as, color)}
        style={{
            width,
            fontSize: size,
            lineHeight: lh,
            letterSpacing: ls,
            fontWeight: weight,
            textTransform: uppperCase ? "uppercase" : undefined,
            textAlign: centered ? "center" : align,
            marginBottom: mb,
            marginTop: mt,
            ...style,
        }}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { delay: 0.5, bounce: 0.3 } }}
        viewport={{ amount: 0.3, once: true }}
        {...props}
    >
        {children}
    </motion.div>
)
: (
    <div
        className={classNames("text", as, color)}
        style={{
            width,
            fontSize: size,
            lineHeight: lh,
            letterSpacing: ls,
            fontWeight: weight,
            textTransform: uppperCase ? "uppercase" : undefined,
            textAlign: centered ? "center" : undefined,
            marginBottom: mb,
            marginTop: mt,
            ...style,
        }}
        {...props}
    >
        {children}
    </div>
);

export default Text;