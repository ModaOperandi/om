const fs = require("fs");

const [mixinName] = process.argv.slice(2);

const MIXIN = `
@import "~@moda/tokens";

@mixin ${mixinName}() {
  // Hello
}
`;

const STORIES_TSX = `
import React from "react";

import "./${mixinName}.stories.scss";

export default { title: "Mixins|${mixinName}" };

export const Default = () => (
  <div className="Story ${mixinName}">
    Hello
  </div>
);
`;

const STORIES_SCSS = `
@import "./${mixinName}";

.Story.${mixinName} {
  @include ${mixinName}();
}
`;

const FILES = {
  "index.scss": `@import "${mixinName}";`,
  [`_${mixinName}.scss`]: MIXIN,
  [`${mixinName}.stories.tsx`]: STORIES_TSX,
  [`${mixinName}.stories.scss`]: STORIES_SCSS
};

fs.mkdir(`./src/mixins/${mixinName}`, { recursive: true }, err => {
  if (err) throw err;

  Object.entries(FILES).forEach(([fileName, fileSource]) => {
    const filePath = `./src/mixins/${mixinName}/${fileName}`;

    fs.writeFile(filePath, fileSource, err => {
      console.log(`Wrote: ${filePath}`);
      if (err) console.error(err);
    });
  });
});
