const fs = require('fs');

const [componentType = 'Components', componentName] = process.argv.slice(2);

if (!componentName) {
  console.error(`Please name your ${componentType.slice(0, -1)}!`);
  return;
}

const STYLES = `
@import '~om';

.${componentName} {
  // Hello
}
`;

const COMPONENT = `
import React from 'react';
import classNames from 'classnames';

import './${componentName}.scss';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const ${componentName}: React.FC<Props> = ({ className, ...rest }) => (
  <div className={classNames('${componentName}', className)} {...rest}>
    Hello
  </div>
);
`;

const STORIES = `
import React from 'react';

import { States } from '../../utilities/States';
import { ${componentName} } from './${componentName}';

export default { title: '${componentType}|${componentName}' };

export const Default = () => (
  <States>
    <${componentName} />
  </States>
);
`;

const TESTS = `
import React from 'react';
import { shallow } from 'enzyme';

import { ${componentName} } from './${componentName}';

describe('${componentName}', () => {
  it('renders correctly', () => {
    const component = shallow(<${componentName} />);
    expect(component.text()).toEqual('Hello');
  });
});
`;

const FILES = {
  'index.ts': `export * from './${componentName}';`,
  [`${componentName}.tsx`]: COMPONENT,
  [`${componentName}.scss`]: STYLES,
  [`${componentName}.stories.tsx`]: STORIES,
  [`${componentName}.test.tsx`]: TESTS
};

fs.mkdir(`./src/${componentType.toLowerCase()}/${componentName}`, { recursive: true }, err => {
  if (err) throw err;

  Object.entries(FILES).forEach(([fileName, fileSource]) => {
    const filePath = `./src/${componentType.toLowerCase()}/${componentName}/${fileName}`;

    fs.writeFile(filePath, fileSource, err => {
      console.log(`Wrote: ${filePath}`);
      if (err) console.error(err);
    });
  });
});

const indexFilePath = `./src/${componentType.toLowerCase()}/index.ts`;

fs.readFile(indexFilePath, 'utf8', (err, data) => {
  if (err) throw err;

  fs.writeFile(
    indexFilePath,
    data + `export { ${componentName} } from './${componentName}';\n`,
    err => {
      console.log(`Updated index.`);
      if (err) console.error(err);
    }
  );
});
