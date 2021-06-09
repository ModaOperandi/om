import React from 'react';
import classNames from 'classnames';
import { InputProps } from '../TextInput';
import './Textarea.scss';

export type TextareaProps = InputProps &
  Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'>;

export const Textarea = React.forwardRef(
  (
    { className, disabled, error, focus, placeholder, label, onChange, ...rest }: TextareaProps,
    ref: React.Ref<HTMLTextAreaElement>
  ) => {
    return (
      <textarea
        className={classNames('Textarea', className, {
          'Textarea--focus': focus,
          'Textarea--disabled': disabled,
          'Textarea--error': error
        })}
        disabled={disabled}
        placeholder={placeholder}
        aria-label={label || placeholder}
        ref={ref}
        onChange={event => onChange?.(event.target.value)}
        {...rest}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
