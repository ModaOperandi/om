import React from 'react';
import classNames from 'classnames';

import './Badge.scss';

export type BadgeTheme = 'forest-green' | 'klein-blue' | 'brick' | 'dark-fuchsia';

export type BadgeProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  theme?: BadgeTheme;
};

export const Badge: React.FC<BadgeProps> = ({ className, theme, children, ...rest }) => (
  <span className={classNames('Badge', theme && `Badge--${theme}`, className)} {...rest}>
    {children}
  </span>
);
