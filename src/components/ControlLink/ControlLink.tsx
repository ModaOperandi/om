import React from 'react';
import classNames from 'classnames';
import { Clickable, ClickableProps } from '../Clickable';

import './ControlLink.scss';

export type ControlLinkProps = ClickableProps & {
  color?: 'cement' | 'ink';
  disabled?: boolean;
  underlined?: boolean;
};

export const ControlLink: React.FC<ControlLinkProps> = ({
  className,
  color = 'cement',
  disabled,
  children,
  underlined,
  onClick
}) => (
  <Clickable
    className={classNames(
      'ControlLink',
      { 'ControlLink--underlined': underlined },
      { 'ControlLink--disabled': disabled },
      `ControlLink--${color}`,
      className
    )}
    disabled={disabled}
    onClick={disabled ? undefined : onClick}
  >
    {children}
  </Clickable>
);
