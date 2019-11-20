import React from 'react';
import classNames from 'classnames';

import './Badge.scss';

const THEMES = {
  bestseller: 'Bestseller',
  trending: 'Trending',
  'fall-essential': 'Fall Essential'
} as const;

type Theme = keyof typeof THEMES;
type CustomProps = { children: React.ReactNode };
type ThemeProps = { theme: Theme };

const isThemed = (props: CustomProps | ThemeProps): props is ThemeProps => 'theme' in props;

export const Badge: React.FC<(CustomProps | ThemeProps) &
  React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ className, ...rest }) => {
  if (isThemed(rest)) {
    const { theme, ...remaining } = rest;
    return (
      <a className={classNames(`Badge Badge--${theme}`, className)} {...remaining}>
        {THEMES[theme]}
      </a>
    );
  }
  return <a className={classNames('Badge', className)} {...rest} />;
};
