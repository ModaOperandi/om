import React from 'react';
import classNames from 'classnames';
import AlertIcon from '@moda/icons/alert-16';

import './Input.scss';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  error?: boolean | string;
  focus?: boolean;
  label?: string;
  valid?: boolean;
}

export const Input = React.forwardRef(
  (
    { className, disabled, error, focus, label, placeholder, valid, ...rest }: Props,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <label className={classNames('Input', className)}>
        <span className='Input__context'>
          <input
            className={classNames('Input__input', {
              'Input__input--focus': focus,
              'Input__input--disabled': disabled,
              'Input__input--valid': valid,
              'Input__input--error': error
            })}
            disabled={disabled}
            placeholder={placeholder}
            ref={ref}
            {...rest}
          />

          {error && (
            <span className='Input__icon'>
              <AlertIcon />
            </span>
          )}
        </span>

        <span
          className={classNames('Input__label', {
            'Input__label--hidden': placeholder && !error && !label,
            'Input__label--error': error
          })}
        >
          {error || label || placeholder}
        </span>
      </label>
    );
  }
);

Input.displayName = 'Input';
