import React from 'react';
import classNames from 'classnames';
import { Clickable, ClickableProps } from '../Clickable';
import './SelectableButton.scss';

export type SelectableButtonProps = ClickableProps & {
  hover?: boolean;
  selected?: boolean;
  unavailable?: boolean;
};

export const SelectableButton: React.FC<SelectableButtonProps> = ({
  className,
  hover,
  selected,
  unavailable,
  children,
  ...rest
}) => (
  <Clickable
    className={classNames(
      'SelectableButton',
      {
        'SelectableButton--hover': hover,
        'SelectableButton--selected': selected,
        'SelectableButton--unavailable': unavailable
      },
      className
    )}
    {...rest}
  >
    <span>{children}</span>
  </Clickable>
);
