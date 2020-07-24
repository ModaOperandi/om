import React from 'react';
import { useBreakpoint, discriminate } from '../../hooks/useBreakpoint';

import './Breakpoint.scss';

type At = { at: string };
type GreaterThan = { gt: string };
type LessThan = { lt: string };

export type BreakpointProps = At | GreaterThan | LessThan;

export const Breakpoint: React.FC<BreakpointProps> = ({ children, ...rest }) => {
  const { mode, breakpoint } = discriminate(rest);
  const { matches } = useBreakpoint(rest);

  return matches ? (
    <div className={`Breakpoint Breakpoint--${mode}-${breakpoint}`}>{children}</div>
  ) : null;
};
