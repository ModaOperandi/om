import React, { HTMLAttributes } from 'react';
import { omit } from 'ramda';
import classNames from 'classnames';
import { useBreakpoint, discriminate } from '../../hooks/useBreakpoint';

import './Breakpoint.scss';

type At = { at: string };
type GreaterThan = { gt: string };
type LessThan = { lt: string };

export type BreakpointProps = (At | GreaterThan | LessThan) & HTMLAttributes<HTMLDivElement>;

export const Breakpoint: React.FC<BreakpointProps> = ({ children, className, ...rest }) => {
  const { mode, breakpoint } = discriminate(rest);
  const { matches } = useBreakpoint(rest);

  return matches ? (
    <div
      className={classNames('Breakpoint', `Breakpoint--${mode}-${breakpoint}`, className)}
      {...omit(['at', 'gt', 'lt'], rest)}
    >
      {children}
    </div>
  ) : null;
};
