import React from 'react';
import classNames from 'classnames';
import { InputProps } from '../TextInput';
import './Textarea.scss';

export type Props = InputProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef(
  (
    { className, disabled, error, focus, placeholder, ...rest }: Props,
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
        aria-label={placeholder}
        ref={ref}
        {...rest}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
