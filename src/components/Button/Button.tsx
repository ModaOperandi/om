import React from 'react';
import classNames from 'classnames';
import { Clickable, ClickableProps } from '../Clickable';

import './Button.scss';

export type ButtonProps = {
  secondary?: boolean;
  tertiary?: boolean;
  elevated?: boolean;
  chip?: boolean;
  focus?: boolean;
  hover?: boolean;
  disabled?: boolean;
} & ClickableProps;

export const Button: React.FC<ButtonProps> = ({
  secondary,
  tertiary,
  elevated,
  chip,
  hover,
  focus,
  disabled,
  className,
  ...rest
}) => (
  <Clickable
    className={classNames(
      'Button',
      {
        'Button--chip': chip,
        'Button--secondary': secondary,
        'Button--tertiary': tertiary,
        'Button--elevated': elevated,
        'Button--hover': hover,
        'Button--focus': focus,
        'Button--disabled': disabled
      },
      className
    )}
    styleless
    {...rest}
  />
);
