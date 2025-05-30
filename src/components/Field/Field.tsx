import React, { JSX } from 'react';
import classNames from 'classnames';
import WarningIcon from '@moda/icons/warning-16';
import { TextInput, TextInputProps } from '../TextInput';
import { Select } from '../Select';

import './Field.scss';

export type FieldProps = TextInputProps & {
  children?: JSX.Element;
};

export const Field = React.forwardRef(
  (
    { className, children, error, label, placeholder, ...rest }: FieldProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <label className={classNames('Field', className)}>
        {label && <span className='Field__label'>{label}</span>}

        {/* TODO: Codify some kind of IconWrapper component */}
        <span className='Field__context'>
          {children ? (
            <>
              {React.cloneElement(children, {
                ref,
                error,
                placeholder,
                label,
                shiftIconLeftwards: error && children.type === Select,
                ...rest,
                ...children.props
              })}

              {error && (
                <span className='Field__icon'>
                  <WarningIcon />
                </span>
              )}
            </>
          ) : (
            <>
              <TextInput
                ref={ref}
                placeholder={placeholder}
                label={label}
                error={error}
                {...rest}
              />
              {error && (
                <span className='Field__icon'>
                  <WarningIcon />
                </span>
              )}
            </>
          )}
        </span>

        {error && <span className='Field__error'>{error}</span>}
      </label>
    );
  }
);

Field.displayName = 'Field';
