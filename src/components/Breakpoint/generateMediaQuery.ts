import { breakpoints } from '@moda/tokens';

export type Mode = 'at' | 'gt' | 'lt';
export type Breakpoint = keyof typeof breakpoints;

export interface GenerateMediaQuery {
  mode: Mode;
  breakpoint: Breakpoint;
}

export interface MediaQueryBounds {
  min?: number;
  max?: number;
}

const breakpointKeys = Object.keys(breakpoints);

const ONE_PIXEL = 1 / 16;

export const getMediaQueryBounds = ({ mode, breakpoint }: GenerateMediaQuery): MediaQueryBounds => {
  switch (mode) {
    case 'at': {
      const prevIndex = breakpointKeys.indexOf(breakpoint) - 1;
      const prevWidth =
        prevIndex === -1
          ? 0
          : parseInt(breakpoints[breakpointKeys[prevIndex] as Breakpoint]) + ONE_PIXEL;

      return {
        min: prevWidth,
        max: parseInt(breakpoints[breakpoint])
      };
    }
    case 'gt':
      return {
        min: parseInt(breakpoints[breakpoint]) + ONE_PIXEL
      };
    case 'lt':
      return {
        max: parseInt(breakpoints[breakpoint])
      };
  }
};

export const generateMediaQuery = ({ mode, breakpoint }: GenerateMediaQuery): string => {
  const { min, max } = getMediaQueryBounds({ mode, breakpoint });

  return [min && `(min-width: ${min}rem)`, max && `(max-width: ${max}rem)`]
    .filter(Boolean)
    .join(' and ');
};
