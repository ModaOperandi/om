import React from 'react';
import classNames from 'classnames';
import { typography, colors } from '@moda/tokens';
import './Text.scss';

export type TextTreatment = keyof typeof typography['text-treatments'];
export type TextColor = keyof typeof colors.all;
export type TextFontFamily = keyof typeof typography.fonts;

export type TextProps = React.HTMLAttributes<HTMLSpanElement> & {
  treatment?: TextTreatment;
  color?: TextColor;
  family?: TextFontFamily;
};

export const Text: React.FC<TextProps> = ({
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
