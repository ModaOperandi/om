import React from "react";
import { Divider } from "./Divider";
import { Props as DividerProps } from "./Divider";

export const NoLineDivider: React.FC<DividerProps> = props => {
  return <Divider {...props} type={"no-line"} />;
};
