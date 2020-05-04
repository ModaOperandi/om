import React from 'react';
import classNames from 'classnames';
import './Stack.scss';
import * as CSS from 'csstype';

export type StackProps = React.HTMLAttributes<HTMLDivElement> & {
  space: number;
  direction?: 'vertical' | 'horizontal';
  alignItems?: CSS.AlignItemsProperty;
  justifyContent?: CSS.JustifyContentProperty;
};

export const Stack: React.FC<StackProps> = ({
  className,
  children,
  space,
  direction = 'vertical',
  alignItems,
  justifyContent,
  style,
  ...rest
}) => (
  <div
    className={classNames(`Stack Stack--${direction}-${space}`, className)}
    style={{ ...style, alignItems, justifyContent }}
    {...rest}
  >
    {children}
  </div>
);
