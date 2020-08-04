import React from 'react';
import { useBreakpoint } from '../../hooks/useBreakpoint';

type At = { at: string };
type GreaterThan = { gt: string };
type LessThan = { lt: string };

export type BreakpointProps = At | GreaterThan | LessThan;

export const Breakpoint: React.FC<BreakpointProps> = ({ children, ...rest }) => {
  const { matches } = useBreakpoint(rest);

  return matches ? <>{children}</> : null;
};
