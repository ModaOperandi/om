import React from 'react';
import classNames from 'classnames';
import { Clickable, ClickableProps } from '../Clickable';

import './Button.scss';

export type ButtonProps = {
  secondary?: boolean;
  chip?: boolean;
  focus?: boolean;
  hover?: boolean;
  disabled?: boolean;
} & ClickableProps;

export const Button: React.FC<ButtonProps> = ({
  secondary,
  chip,
  hover,
  focus,
  disabled,
  className,
  ...rest
}) => {
  const cn = classNames(
    'Button',
    {
      'Button--chip': chip,
      'Button--secondary': secondary,
      'Button--hover': hover,
      'Button--focus': focus,
      'Button--disabled': disabled
    },
    className
  );

  return <Clickable className={cn} styleless {...rest} />;
};
