import React from "react";
import { space } from "@moda/tokens";

import { Stack } from "./Stack";

export default { title: "Components|Stack" };

export const Default = () => (
  <Stack>
    <p>
      Defaults to {`space={4}`} === {space.scale[4]}
    </p>

    <span>Notice the different element tags</span>

    <div>They stack with only interior margins</div>
  </Stack>
);

export const Direction = () => (
  <Stack direction="horizontal" space={8}>
    <div>direction="horizontal"</div>
    <div>spaces things</div>
    <div>horizontally</div>
  </Stack>
);

export const Spacing = () => {
  return (
    <>
      {space.scale.map((value, index) => {
        return (
          <Stack
            style={{ border: "1rem solid red", margin: "1rem" }}
            space={index}
          >
            <p
              style={{ border: "1px solid green" }}
            >{`space={${index}} === ${value}`}</p>
            <p
              style={{ border: "1px solid green" }}
            >{`space={${index}} === ${value}`}</p>
            <p
              style={{ border: "1px solid green" }}
            >{`space={${index}} === ${value}`}</p>
            <p
              style={{ border: "1px solid green" }}
            >{`space={${index}} === ${value}`}</p>
          </Stack>
        );
      })}
    </>
  );
};
