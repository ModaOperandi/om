import React from 'react';
import classNames from 'classnames';
import './ExceedConstrain.scss';

export type ExceedConstrainProps = React.HTMLAttributes<HTMLDivElement>;

export const ExceedConstrain: React.FC<ExceedConstrainProps> = ({
  className,
  children,
  ...rest
}) => (
  <div className={classNames('ExceedConstrain', className)} {...rest}>
    {children}
  </div>
);
