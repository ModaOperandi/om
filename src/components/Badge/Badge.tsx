import React from 'react';
import classNames from 'classnames';
import { Clickable } from '../Clickable';

import './Badge.scss';

export type BadgeTheme = 'bestseller' | 'trending' | 'fall-essential' | 'fall-25';

export type BadgeProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  theme?: BadgeTheme;
};

export const Badge: React.FC<BadgeProps> = ({ className, theme, children, ...rest }) => (
  <Clickable className={classNames('Badge', theme && `Badge--${theme}`, className)} {...rest}>
    {children}
  </Clickable>
);
