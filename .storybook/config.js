import { configure, addDecorator } from "@storybook/react";
import { globalStyles } from "./decorators/globalStyles";

addDecorator(globalStyles);

configure(require.context("../src", true, /\.stories\.js$/), module);
