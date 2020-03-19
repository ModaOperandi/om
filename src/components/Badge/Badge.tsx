import React from 'react';
import classNames from 'classnames';

import './Badge.scss';

export const TRENDING_THEME = 'trending';
export const BESTSELLER_THEME = 'bestseller';
export const FALL_ESSENTIAL_THEME = 'fall-essential';

const THEMES = {
  [BESTSELLER_THEME]: 'Bestseller',
  [TRENDING_THEME]: 'Trending',
  [FALL_ESSENTIAL_THEME]: 'Fall Essential'
} as const;

type Theme = keyof typeof THEMES;
type CustomProps = { children: React.ReactNode; theme?: string }; //if a theme is passed in that is not an expected theme, treat this as a custom badge
type ThemeProps = { theme: Theme };

const isThemed = (props: CustomProps | ThemeProps): props is ThemeProps =>
  'theme' in props && props.theme !== undefined && Object.keys(THEMES).indexOf(props.theme) > -1;

export type BadgeProps = (CustomProps | ThemeProps) & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Badge: React.FC<BadgeProps> = ({ className, ...rest }) => {
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
