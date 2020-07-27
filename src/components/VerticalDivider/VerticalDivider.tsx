import React from 'react';
import classNames from 'classnames';

import './VerticalDivider.scss';

export type VerticalDividerProps = { double?: boolean } & React.HTMLAttributes<HTMLDivElement>;

export const VerticalDivider: React.FC<VerticalDividerProps> = ({ className, double, ...rest }) => (
  <div
    className={classNames('VerticalDivider', { 'VerticalDivider--double': double }, className)}
    {...rest}
  />
);
