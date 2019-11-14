import React from "react";

import { Divider } from "./Divider";

export default { title: "Molecules|Divider" };

export const Default = () => (
  <Divider text="Default Divider"/>
);

export const withNoLine = () => (
    <Divider noLine={true} text="Divider with No Line"/>
);

export const withDoubleLine = () => (
    <Divider doubleLine={true} text="Divider with Double Line"/>
);

