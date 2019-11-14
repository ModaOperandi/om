import React from "react";

import {Divider, NoLineDivider, TwoLineDivider} from "./";

export default {title: "Molecules|Divider"};

export const Default = () => (
  <Divider text="Default Divider"/>
);

export const withNoLine = () => (
  <NoLineDivider text="Divider with No Line"/>
);

export const withDoubleLine = () => (
  <TwoLineDivider text="Divider with Double Line"/>
);

