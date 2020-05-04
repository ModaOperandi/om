import React from 'react';
import classNames from 'classnames';
import './Stack.scss';
import * as CSS from 'csstype';

const defaultProperty = 'flex-start';

export type StackProps = React.HTMLAttributes<HTMLDivElement> & {
  space: number;
  direction?: 'vertical' | 'horizontal';
  alignItems?: CSS.AlignItemsProperty;
  justifyContent?: CSS.JustifyContentProperty;
  style?: undefined;
};

export const Stack: React.FC<StackProps> = ({
  className,
  children,
  space,
  direction = 'vertical',
  alignItems = defaultProperty,
  justifyContent = defaultProperty,
  ...rest
}) => (
  <div
    className={classNames(`Stack Stack--${direction}-${space}`, className)}
    style={{ alignItems, justifyContent }}
    {...rest}
  >
    {children}
  </div>
);
