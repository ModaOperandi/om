import React from "react";
import { space } from "@moda/tokens";

import "./stack.stories.scss";

export default { title: "Mixins|stack" };

export const Default = () => (
  <div className="Story stack">
    <p>
      Defaults to {`$space: 4`} === {space.scale[4]}
    </p>

    <span>Notice the different element tags</span>

    <div>They stack with only interior margins</div>
  </div>
);

export const Horizontal = () => (
  <div className="Story stack stack--horizontal">
    <p>Accepts {`$direction: horizontal`}</p>

    <span>Notice the different element tags</span>

    <div>They stack with only interior margins</div>
  </div>
);
