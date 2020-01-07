import React from 'react';
import classNames from 'classnames';
import './TextInput.scss';

export type InputProps = {
  disabled?: boolean;
  error?: boolean | string;
  focus?: boolean;
  label?: string;
};

export type Props = InputProps & React.InputHTMLAttributes<HTMLInputElement>;

export const TextInput = React.forwardRef(
  (
    { className, disabled, error, focus, placeholder, label, ...rest }: Props,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <input
        className={classNames('TextInput', className, {
          'TextInput--focus': focus,
          'TextInput--disabled': disabled,
          'TextInput--error': error
        })}
        disabled={disabled}
        placeholder={placeholder}
        aria-label={label || placeholder}
        ref={ref}
        {...rest}
      />
    );
  }
);

TextInput.displayName = 'TextInput';
