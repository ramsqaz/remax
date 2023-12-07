import classNames from "classnames";
import React from "react";

// variant: primary, secondary
// size: sm, md
// color: red, blue

import "./styles.scss";

const Button = ({ children, variant, size = "md", startIcon, color, fullWidth = false, ...props }) => (
    <button className={classNames("button", variant, size, color, { fullWidth })} {...props}>
        {startIcon && <div className="icon-container">{startIcon}</div>}
        <div>{children}</div>
    </button>
);

export default Button;