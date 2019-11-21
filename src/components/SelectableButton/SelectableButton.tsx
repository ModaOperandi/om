import React from 'react';
import classNames from 'classnames';

import './SelectableButton.scss';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hover?: boolean;
  selected?: boolean;
  unavailable?: boolean;
}

export const SelectableButton: React.FC<Props> = ({
  className,
  hover,
  selected,
  unavailable,
  children,
  ...rest
}) => (
  <button
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
  </button>
);
