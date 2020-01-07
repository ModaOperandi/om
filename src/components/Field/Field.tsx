import React from 'react';
import classNames from 'classnames';
import WarningIcon from '@moda/icons/warning-16';
import { TextInput, InputProps } from '../TextInput';
import './Field.scss';

export type FieldProps = {
  children?: JSX.Element;
};

export type Props = InputProps & FieldProps & React.InputHTMLAttributes<HTMLInputElement>;

export const Field = React.forwardRef(
  (
    { className, children, error, label, placeholder, ...rest }: Props,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <label className={classNames('Field', className)}>
        {label && <span className='Field__label'>{label}</span>}

        {/* TODO: Codify some kind of IconWrapper component */}
        <span className='Field__context'>
          {children ? (
            React.cloneElement(children, {
              ref,
              error,
              placeholder,
              label,
              ...rest,
              ...children.props
            })
          ) : (
            <TextInput ref={ref} placeholder={placeholder} label={label} error={error} {...rest} />
          )}

          {error && (
            <span className='Field__icon'>
              <WarningIcon />
            </span>
          )}
        </span>

        {error && <span className='Field__error'>{error}</span>}
      </label>
    );
  }
);

Field.displayName = 'Field';
