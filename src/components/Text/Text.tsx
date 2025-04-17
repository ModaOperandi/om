import React, { HTMLElementType } from 'react';
import classNames from 'classnames';
import { typography, colors } from '@moda/tokens';
import './Text.scss';

export type TextTreatment = keyof (typeof typography)['text-treatments'];
export type TextColor = keyof typeof colors.all;
export type TextFontFamily = keyof typeof typography.fonts;

export type TextProps = React.HTMLAttributes<HTMLSpanElement> & {
  as?: HTMLElementType;
  treatment?: TextTreatment;
  color?: TextColor;
  family?: TextFontFamily;
};

export const Text: React.FC<TextProps> = ({
  as: Component = 'span',
  className,
  treatment = 'body1',
  color = 'ink',
  family,
  children,
  style,
  ...rest
}) => (
  <Component
    className={classNames(`Text Text--${treatment} ${family ? `Text--${family}` : ''}`, className)}
    style={{ color: colors.all[color], ...style }}
    {...rest}
  >
    {children}
  </Component>
);
