import React from 'react';
import classNames from 'classnames';

import './Button.scss';

type CommonProps = {
  secondary?: boolean;
  focus?: boolean;
  hover?: boolean;
  disabled?: boolean;
};

type ButtonElProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorElProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const isAnchor = (props: ButtonElProps | AnchorElProps): props is AnchorElProps => 'href' in props;
const isButton = (props: ButtonElProps | AnchorElProps): props is ButtonElProps =>
  !('href' in props);

export type ButtonProps = CommonProps & (ButtonElProps | AnchorElProps);

export const Button: React.FC<ButtonProps> = ({
  secondary,
  hover,
  focus,
  disabled,
  className,
  ...rest
}) => {
  const cn = classNames(
    'Button',
    {
      'Button--secondary': secondary,
      'Button--hover': hover,
      'Button--focus': focus,
      'Button--disabled': disabled
    },
    className
  );

  if (isAnchor(rest)) return <a className={cn} {...rest} />;
  if (isButton(rest)) return <button disabled={disabled} className={cn} {...rest} />;

  return null;
};
