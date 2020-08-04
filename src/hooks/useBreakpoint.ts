import { useState, useCallback, useEffect } from 'react';
import {
  generateMediaQuery,
  Mode as ModeType,
  Breakpoint as BreakpointType
} from '../components/Breakpoint/generateMediaQuery';

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

export const useBreakpoint = (props: At | GreaterThan | LessThan) => {
  const { mode, breakpoint } = discriminate(props);
  const mediaQuery = generateMediaQuery({ mode, breakpoint });
  const [matches, setMatches] = useState(true);

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
