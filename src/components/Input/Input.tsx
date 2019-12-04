import React from 'react';
import classNames from 'classnames';

import './Input.scss';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  focus?: boolean;
  disabled?: boolean;
  valid?: boolean;
  error?: boolean;
}

export const Input: React.FC<Props> = ({ className, focus, disabled, valid, error, ...rest }) => {
  return (
    <input
      className={classNames(
        'Input',
        {
          'Input--focus': focus,
          'Input--disabled': disabled,
          'Input--valid': valid,
          'Input--error': error
        },
        className
      )}
      disabled={disabled}
      {...rest}
    />
  );
};
