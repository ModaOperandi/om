import React from 'react';
import classNames from 'classnames';

import './Button.scss';

type CommonProps = {
  secondary?: boolean;
  focus?: boolean;
  hover?: boolean;
  disabled?: boolean;
  loading?: boolean;
  success?: boolean;
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
  loading,
  success,
  className,
  children,
  ...rest
}) => {
  const cn = classNames(
    'Button',
    {
      'Button--secondary': secondary,
      'Button--hover': hover,
      'Button--focus': focus,
      'Button--disabled': disabled,
      'Button--loading': loading,
      'Button--success': success
    },
    className
  );

  const __children__ = (
    <>
      {loading && <div className='Button__loader' />}
      <span className='Button__children'>{children}</span>
    </>
  );

  if (isAnchor(rest)) {
    return (
      <a className={cn} {...rest}>
        {__children__}
      </a>
    );
  }

  if (isButton(rest)) {
    return (
      <button disabled={disabled} className={cn} {...rest}>
        {__children__}
      </button>
    );
  }

  return null;
};
