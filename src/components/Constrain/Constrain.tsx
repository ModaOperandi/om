import React from 'react';
import classNames from 'classnames';
import './Constrain.scss';

export type ConstrainSize = 'medium' | 'wide';

export type ConstrainProps = React.HTMLAttributes<HTMLDivElement> & { size?: ConstrainSize };

export const Constrain: React.FC<ConstrainProps> = ({
  className,
  children,
  size = 'medium',
  ...rest
}) => (
  <div
    className={classNames('Constrain', { 'Constrain--wide': size === 'wide' }, className)}
    {...rest}
  >
    {children}
  </div>
);
