import classNames from "classnames";
import React from "react";

// variant: primary, secondary
// size: sm, md
// color: red, blue

import "./styles.scss";

const ButtonTel = ({
    children,
    variant,
    size = "md",
    startIcon,
    color,
    fullWidth = false,
    ...props
}) => (
    <a
        className={classNames("button", variant, size, color, { fullWidth })}
        {...props}
        href={`tel:${children.replaceAll(" ", "")}`}
    >
        {startIcon && <div className="icon-container">{startIcon}</div>}
        <div>{children}</div>
    </a>
);

export default ButtonTel;
