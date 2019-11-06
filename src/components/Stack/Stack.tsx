import React from "react";

import "./Stack.scss";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "vertical" | "horizontal";
  space?: number;
}

export const Stack: React.FC<Props> = ({
  children,
  space = 5,
  direction = "vertical",
  ...rest
}) => (
  <div className={`Stack Stack--${space} Stack--${direction}`} {...rest}>
    {children}
  </div>
);
