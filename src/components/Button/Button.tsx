import React from 'react';
import classNames from 'classnames';

import './Button.scss';

type CommonProps = {
  secondary?: boolean;
  focus?: boolean;
  hover?: boolean;
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
  ...rest
}) => {
  const className = classNames('Button', {
    'Button--secondary': secondary,
    'Button--hover': hover,
    'Button--focus': focus
  });

  return hasHref(rest) ? (
    <a className={className} {...rest} />
  ) : (
    <button className={className} {...rest} />
  );
};
