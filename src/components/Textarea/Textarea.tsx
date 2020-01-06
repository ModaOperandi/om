import React from 'react';
import classNames from 'classnames';

import './Textarea.scss';

export interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  disabled?: boolean;
  error?: boolean | string;
  focus?: boolean;
  label?: string;
  valid?: boolean;
}

export const Textarea = React.forwardRef(
  (
    { className, disabled, error, focus, label, placeholder, valid, ...rest }: Props,
    ref: React.Ref<HTMLTextAreaElement>
  ) => {
    return (
      <label className={classNames('Textarea', className)}>
        <textarea
          className={classNames('Textarea__textarea', {
            'Textarea__textarea--focus': focus,
            'Textarea__textarea--disabled': disabled,
            'Textarea__textarea--valid': valid,
            'Textarea__textarea--error': error
          })}
          disabled={disabled}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
        <span
          className={classNames('Textarea__label', {
            'Textarea__label--hidden': placeholder && !error && !label,
            'Textarea__label--error': error
          })}
        >
          {error || label || placeholder}
        </span>
      </label>
    );
  }
);

Textarea.displayName = 'Textarea';
