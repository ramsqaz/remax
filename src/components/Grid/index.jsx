import React from "react";
import classNames from "classnames";

import "./styles.scss";

const Grid = ({ children, columns = 1, gap = { x: 20, y: 20 }, className }) => {

    return (
        <div
            className={classNames("grid", className)}
            style={{
                gridTemplateColumns: `repeat(${columns} , 1fr)`,
                gap: typeof gap === "number" ? `${gap}px` : `${gap.y}px ${gap.x}px`
            }}
        >
            {children}
        </div>
    );
};

export default Grid;