import { breakpoints } from '@moda/tokens';

export type Mode = 'at' | 'gt' | 'lt';
export type Breakpoint = keyof typeof breakpoints;

export interface GenerateMediaQuery {
  mode: Mode;
  breakpoint: Breakpoint;
}

const breakpointKeys = Object.keys(breakpoints);

const ONE_PIXEL = 1 / 16;

export const generateMediaQuery = ({ mode, breakpoint }: GenerateMediaQuery): string => {
  switch (mode) {
    case 'at': {
      const prevIndex = breakpointKeys.indexOf(breakpoint) - 1;
      const prevWidth =
        prevIndex === -1
          ? 0
          : `${parseInt(breakpoints[breakpointKeys[prevIndex] as Breakpoint], 10) + ONE_PIXEL}rem`;

      return `(min-width: ${prevWidth}) and (max-width: ${breakpoints[breakpoint]})`;
    }
    case 'gt':
      return `(min-width: ${parseInt(breakpoints[breakpoint], 10) + ONE_PIXEL}rem)`;
    case 'lt':
      return `(max-width: ${breakpoints[breakpoint]})`;
  }
};
