import 'focus-visible';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { breakpoints } from '@moda/tokens';
import { globalStyles } from './decorators/globalStyles';

const viewports = Object.entries(breakpoints).reduce(
  (memo, [key, width]) => ({
    ...memo,
    [key]: {
      name: `breakpoint('${key}')`,
      styles: {
        width,
        height: `90vh`
      }
    }
  }),
  {}
);

export const decorators = [globalStyles];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  viewport: {
    viewports: {
      ...viewports,
      ...INITIAL_VIEWPORTS
    },
    defaultViewport: 'reset'
  }
};
