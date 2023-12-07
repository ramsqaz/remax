import React from "react";

import "./styles.scss";

const Input = ({ className, onChange, ...props }) => (
    <input className="input-style" onChange={(e) => onChange && onChange(e.target?.value)} {...props} />
);

export default Input;