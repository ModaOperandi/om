import 'focus-visible';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { breakpoints } from '@moda/tokens';

import { globalStyles } from './decorators/globalStyles';

addDecorator(globalStyles);

const viewports = Object.entries(breakpoints).reduce(
  (memo, [key, width]) => ({
    ...memo,
    [key]: {
      name: `breakpoint('${key}')`,
      styles: {
        width,
        height: `90vh`,
      },
    },
  }),
  {}
);

addParameters({
  viewport: {
    viewports: {
      ...viewports,
      ...INITIAL_VIEWPORTS,
    },
    defaultViewport: 'reset',
  },
});

configure(require.context('../src', true, /\.stories\.tsx$/), module);
