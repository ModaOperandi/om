import React from 'react';
import classNames from 'classnames';

export type RadioGroupProps = React.HTMLAttributes<HTMLDivElement>;

export const RadioGroup: React.FC<RadioGroupProps> = ({ className, children, ...rest }) => (
  <div className={classNames('RadioGroup', className)} role='radiogroup' {...rest}>
    {children}
  </div>
);
