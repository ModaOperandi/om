import React from 'react';
import classNames from 'classnames';
import { Clickable, ClickableProps } from '../Clickable';

import './ControlLink.scss';

export type ControlLinkProps = ClickableProps & {
  disabled?: boolean;
  underlined?: boolean;
};

export const ControlLink: React.FC<ControlLinkProps> = ({
  className,
  disabled,
  children,
  underlined = true,
  onClick,
  ...rest
}) => (
  <Clickable
    {...rest}
    className={classNames(
      'ControlLink',
      { 'ControlLink--underlined': underlined },
      { 'ControlLink--disabled': disabled },
      className
    )}
    onClick={disabled ? undefined : onClick}
  >
    {children}
  </Clickable>
);
