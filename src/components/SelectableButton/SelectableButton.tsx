import React from 'react';
import classNames from 'classnames';
import { Clickable, Props as ClickableProps } from '../Clickable';

import './SelectableButton.scss';

export interface Props extends ClickableProps {
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
