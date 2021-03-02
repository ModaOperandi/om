import { useState, useCallback, useEffect, useContext } from 'react';
import {
  generateMediaQuery,
  getMediaQueryBounds,
  MediaQueryBounds,
  Mode as ModeType,
  Breakpoint as BreakpointType
} from '../components/Breakpoint/generateMediaQuery';
import { BreakpointContext } from '../components/Breakpoint/BreakpointProvider';

type At = { at: string };
type GreaterThan = { gt: string };
type LessThan = { lt: string };

export const discriminate = (
  props: At | GreaterThan | LessThan
): { mode: ModeType; breakpoint: BreakpointType } => {
  if ('at' in props) return { mode: 'at' as ModeType, breakpoint: props.at as BreakpointType };
  if ('lt' in props) return { mode: 'lt' as ModeType, breakpoint: props.lt as BreakpointType };
  return { mode: 'gt' as ModeType, breakpoint: props.gt as BreakpointType };
};

const isBetweenBounds = ({ min = 0, max = Infinity }: MediaQueryBounds, width: number) =>
  min <= width && width <= max;

export const useBreakpoint = (props: At | GreaterThan | LessThan) => {
  const { mode, breakpoint } = discriminate(props);
  const { defaultWidth } = useContext(BreakpointContext);
  const mediaQuery = generateMediaQuery({ mode, breakpoint });

  const [matches, setMatches] = useState(
    typeof defaultWidth === 'number'
      ? isBetweenBounds(getMediaQueryBounds({ mode, breakpoint }), defaultWidth)
      : defaultWidth === 'auto' && typeof window !== 'undefined'
      ? window.matchMedia(mediaQuery).matches
      : true
  );

  const handleChange = useCallback(
    ({ matches }: MediaQueryListEvent): void => setMatches(matches),
    []
  );

  useEffect(() => {
    const mql = window.matchMedia(mediaQuery);
    mql.addListener(handleChange);
    setMatches(mql.matches);
    return (): void => mql.removeListener(handleChange);
  }, [handleChange, mediaQuery]);

  return {
    matches
  };
};
