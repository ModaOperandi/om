import React from "react";
import { shallow } from "enzyme";

import { Stack } from "./Stack";

describe("Stack", () => {
  const vertical = shallow(
    <Stack space={6}>
      <p>first</p>
      <p>last</p>
    </Stack>
  );

  const horizontal = shallow(
    <Stack space={6} direction="horizontal">
      <p>first</p>
      <p>last</p>
    </Stack>
  );

  it("adds spacing props", () => {
    expect(vertical.hasClass("Stack--6")).toBe(true);
  });

  it("renders the children", () => {
    expect(vertical.children().length).toBe(2);
  });

  it("adds direction props", () => {
    expect(vertical.hasClass("Stack--vertical")).toBe(true);
    expect(horizontal.hasClass("Stack--horizontal")).toBe(true);
  });
});
