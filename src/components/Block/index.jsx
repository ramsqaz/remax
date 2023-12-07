import classNames from "classnames";
import React from "react";

import "./styles.scss";

const Block = ({ className, children, color = "white", p = 40, style, height, radius,  width, ...props }) => (
    <div className={classNames("block", color, className)} style={{ padding: p, height, width, borderRadius: radius, ...style }} {...props}>
        {children}
    </div>
);

export default Block;