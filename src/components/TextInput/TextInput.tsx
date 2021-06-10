import React from 'react';
import classNames from 'classnames';
import './TextInput.scss';

export type InputProps = {
  disabled?: boolean;
  error?: boolean | string;
  focus?: boolean;
  label?: string;
  onChange?: (value: string) => void;
  onChangeEvent?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TextInputProps = InputProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

export const TextInput = React.forwardRef(
  (
    {
      className,
      disabled,
      error,
      focus,
      placeholder,
      label,
      onChange,
      onChangeEvent,
      ...rest
    }: TextInputProps,
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
        onChange={event => {
          onChange?.(event.target.value);
          onChangeEvent?.(event);
        }}
        {...rest}
      />
    );
  }
);

TextInput.displayName = 'TextInput';
