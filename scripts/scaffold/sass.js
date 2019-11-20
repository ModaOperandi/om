const fs = require('fs');

const [sassType, sassName] = process.argv.slice(2);

if (!sassName) {
  console.error(`Please name your ${sassType.slice(0, -1)}!`);
  return;
}

const SCSS = `
@import '~@moda/tokens';

@${sassType.toLowerCase().slice(0, -1)} ${sassName}() {
  // Hello
}
`;

const STORIES_TSX = `
import React from 'react';

import './${sassName}.stories.scss';

export default { title: '${sassType}|${sassName}' };

export const Default = () => (
  <div className='Story ${sassType} ${sassName}'>
    Hello
  </div>
);
`;

const STORIES_SCSS = `
@import './${sassName}';

.Story.${sassName} {
  @include ${sassName}();
}
`;

const FILES = {
  [`_${sassName}.scss`]: SCSS,
  [`${sassName}.stories.tsx`]: STORIES_TSX,
  [`${sassName}.stories.scss`]: STORIES_SCSS
};

fs.mkdir(`./src/${sassType.toLowerCase()}/${sassName}`, { recursive: true }, err => {
  if (err) throw err;

  Object.entries(FILES).forEach(([fileName, fileSource]) => {
    const filePath = `./src/${sassType.toLowerCase()}/${sassName}/${fileName}`;

    fs.writeFile(filePath, fileSource, err => {
      console.log(`Wrote: ${filePath}`);
      if (err) console.error(err);
    });
  });
});

const indexFilePath = `./src/${sassType.toLowerCase()}/_${sassType.toLowerCase()}.scss`;

fs.readFile(indexFilePath, 'utf8', (err, data) => {
  if (err) throw err;

  fs.writeFile(indexFilePath, data + `@import '${sassName}/${sassName}';\n`, err => {
    console.log(`Updated index.`);
    if (err) console.error(err);
  });
});
