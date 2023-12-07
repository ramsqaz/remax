import React from "react";

import "./styles.scss";

const Container = ({ children, as: ELement = "div", height, style, m, ...props }) => (
    <ELement className="container" style={{ height, margin: m, ...style }} {...props}>
        {children}
    </ELement>
);

export default Container;