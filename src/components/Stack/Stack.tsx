import React from 'react';
import classNames from 'classnames';

import './Stack.scss';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  space: number;
  direction?: 'vertical' | 'horizontal';
}

export const Stack: React.FC<Props> = ({
  className,
  children,
  space,
  direction = 'vertical',
  ...rest
}) => (
  <div className={classNames(`Stack Stack--${direction}-${space}`, className)} {...rest}>
    {children}
  </div>
);
