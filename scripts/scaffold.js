const fs = require("fs");

const [componentName] = process.argv.slice(2);

const STYLES = `
@import "~moda-themes";

.${componentName} {
  // Hello
}
`;

const COMPONENT = `
import React from "react";

import "./${componentName}.scss";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const ${componentName}: React.FC<Props> = ({ ...rest }) => (
  <div className="${componentName}" {...rest}>
    Hello
  </div>
);
`;

const STORIES = `
import React from "react";

import { ${componentName} } from "./${componentName}";

export default { title: "${componentName}" };

export const Default = () => (
  <${componentName} />
);
`;

const TESTS = `
import React from "react";
import { shallow } from "enzyme";

import { ${componentName} } from "./${componentName}";

describe("${componentName}", () => {
  it("renders correctly", () => {
    const component = shallow(<${componentName} />);
    expect(component.text()).toEqual("Hello");
  });
});
`;

const FILES = {
  "index.ts": `export * from "./${componentName}";`,
  [`${componentName}.tsx`]: COMPONENT,
  [`${componentName}.scss`]: STYLES,
  [`${componentName}.stories.tsx`]: STORIES,
  [`${componentName}.test.tsx`]: TESTS
};

fs.mkdir(`./src/components/${componentName}`, { recursive: true }, err => {
  if (err) throw err;

  Object.entries(FILES).forEach(([fileName, fileSource]) => {
    const filePath = `./src/components/${componentName}/${fileName}`;

    fs.writeFile(filePath, fileSource, err => {
      console.log(`Wrote: ${filePath}`);
      if (err) console.error(err);
    });
  });
});
