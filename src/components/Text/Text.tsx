import React from "react";

import "./Text.scss";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  font?: "sans" | "serif";
}

export const Text: React.FC<Props> = ({ children, font = "sans", ...rest }) => (
  <div className={`Text Text--${font}`} {...rest}>
    <div className="Text__baseline">{children}</div>
  </div>
);
