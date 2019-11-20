import React from 'react';
import classNames from 'classnames';

import './Button.scss';

type CommonProps = {
  secondary?: boolean;
  focus?: boolean;
  hover?: boolean;
  disabled?: boolean;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const isAnchor = (props: ButtonProps | AnchorProps): props is AnchorProps => 'href' in props;
const isButton = (props: ButtonProps | AnchorProps): props is ButtonProps => !('href' in props);

export const Button: React.FC<CommonProps & (ButtonProps | AnchorProps)> = ({
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
