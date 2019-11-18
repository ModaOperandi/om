import React from 'react';
import {
  generateMediaQuery,
  Mode as ModeType,
  Breakpoint as BreakpointType
} from './generateMediaQuery';

import './Breakpoint.scss';

type At = { at: string };
type GreaterThan = { gt: string };
type LessThan = { lt: string };

const discriminate = (
  props: At | GreaterThan | LessThan
): { mode: ModeType; breakpoint: BreakpointType } => {
  if ('at' in props) return { mode: 'at' as ModeType, breakpoint: props.at as BreakpointType };
  if ('lt' in props) return { mode: 'lt' as ModeType, breakpoint: props.lt as BreakpointType };
  return { mode: 'gt' as ModeType, breakpoint: props.gt as BreakpointType };
};

export const Breakpoint: React.FC<At | GreaterThan | LessThan> = ({ children, ...rest }) => {
  const { mode, breakpoint } = discriminate(rest);
  const mediaQuery = generateMediaQuery({ mode, breakpoint });

  const [matches, setMatches] = React.useState(true);

  const handleChange = React.useCallback(
    ({ matches }: MediaQueryListEvent): void => setMatches(matches),
    []
  );

  React.useEffect(() => {
    const mql = window.matchMedia(mediaQuery);
    mql.addListener(handleChange);
    return (): void => mql.removeListener(handleChange);
  }, [handleChange, mediaQuery]);

  return matches ? (
    <div className={`Breakpoint Breakpoint--${mode}-${breakpoint}`}>{children}</div>
  ) : null;
};
