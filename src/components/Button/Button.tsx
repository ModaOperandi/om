import React from 'react';
import classNames from 'classnames';

import './Button.scss';

type CommonProps = {
  secondary?: boolean;
  focus?: boolean;
  hover?: boolean;
  disabled?: boolean;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
};

const hasHref = (props: ButtonProps | AnchorProps): props is AnchorProps => 'href' in props;

export const Button: React.FC<CommonProps & (ButtonProps | AnchorProps)> = ({
  secondary,
  hover,
  focus,
  disabled,
  ...rest
}) => {
  const className = classNames('Button', {
    'Button--secondary': secondary,
    'Button--hover': hover,
    'Button--focus': focus,
    'Button--disabled': disabled
  });

  return hasHref(rest) ? (
    <a className={className} {...rest} />
  ) : (
    <button disabled={disabled} className={className} {...rest} />
  );
};
