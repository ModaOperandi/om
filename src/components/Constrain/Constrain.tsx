import React from 'react';
import classNames from 'classnames';
import './Constrain.scss';

export type ConstrainProps = React.HTMLAttributes<HTMLDivElement>;

export const Constrain: React.FC<ConstrainProps> = ({ className, children, ...rest }) => (
  <div className={classNames('Constrain', className)} {...rest}>
    {children}
  </div>
);
