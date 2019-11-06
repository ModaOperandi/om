import React from "react";
import { shallow } from "enzyme";

import { Text } from "./Text";

describe("Text", () => {
  const sans = shallow(<Text font="sans">Hello</Text>);
  const serif = shallow(<Text font="serif">Hello</Text>);

  it("adds font props", () => {
    expect(sans.hasClass("Text--sans")).toBe(true);
    expect(serif.hasClass("Text--serif")).toBe(true);
  });
});
