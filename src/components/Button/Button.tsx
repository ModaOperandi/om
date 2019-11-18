import React from 'react';
import classNames from 'classnames';

import './Button.scss';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
  focus?: boolean;
  hover?: boolean;
}

export const Button: React.FC<Props> = ({ children, secondary, hover, focus, ...rest }) => (
  <button
    className={classNames('Button', {
      'Button--secondary': secondary,
      'Button--hover': hover,
      'Button--focus': focus
    })}
    {...rest}
  >
    {children}
  </button>
);
