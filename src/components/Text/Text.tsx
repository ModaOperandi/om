import React from 'react';
import classNames from 'classnames';
import { typography, colors } from '@moda/tokens';

import './Text.scss';

export interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  treatment?: keyof typeof typography['text-treatments'];
  color?: keyof typeof colors.all;
  family?: keyof typeof typography.fonts;
}

export const Text: React.FC<Props> = ({
  className,
  treatment = 'body1',
  color = 'ink',
  family,
  children,
  style,
  ...rest
}) => (
  <span
    className={classNames(`Text Text--${treatment} ${family ? `Text--${family}` : ''}`, className)}
    style={{ color: colors.all[color], ...style }}
    {...rest}
  >
    {children}
  </span>
);
