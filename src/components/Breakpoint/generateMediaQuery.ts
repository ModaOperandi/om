import { breakpoints } from '@moda/tokens';

export type Mode = 'at' | 'gt' | 'lt';
export type Breakpoint = keyof typeof breakpoints;

export interface GenerateMediaQuery {
  mode: Mode;
  breakpoint: Breakpoint;
}

const breakpointKeys = Object.keys(breakpoints);

export const generateMediaQuery = ({ mode, breakpoint }: GenerateMediaQuery): string => {
  switch (mode) {
    case 'at': {
      const prevIndex = breakpointKeys.indexOf(breakpoint) - 1;
      const prevWidth =
        prevIndex === -1
          ? 0
          : `${parseInt(breakpoints[breakpointKeys[prevIndex] as Breakpoint], 10) + 1}px`;

      return `(min-width: ${prevWidth}) and (max-width: ${breakpoints[breakpoint]})`;
    }
    case 'gt':
      return `(min-width: ${parseInt(breakpoints[breakpoint], 10) + 1}px)`;
    case 'lt':
      return `(max-width: ${breakpoints[breakpoint]})`;
  }
};
