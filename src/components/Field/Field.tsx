import React, { JSX, useId, useMemo } from 'react';
import classNames from 'classnames';
import WarningIcon from '@moda/icons/warning-16';
import { TextInput, TextInputProps } from '../TextInput';
import { Select } from '../Select';
import { FormControlContext } from './FormControlContext';

import './Field.scss';

export type FieldProps = TextInputProps & {
  children?: JSX.Element;
};

export const Field = React.forwardRef(
  (
    { className, children, error, label, placeholder, ...rest }: FieldProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const id = useId();
    const errorId = `${id}-error`;
    const fieldContextValue = useMemo(() => ({ displaysError: Boolean(error) }), [error]);

    // Combine any existing aria-describedby with our error ID
    const ariaDescribedBy =
      [rest['aria-describedby'], error ? errorId : null].filter(Boolean).join(' ') || undefined;

    return (
      <FormControlContext.Provider value={fieldContextValue}>
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
                  'aria-describedby': ariaDescribedBy,
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
                  aria-describedby={ariaDescribedBy}
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

          {error && (
            <span id={errorId} className='Field__error' role='alert'>
              {error}
            </span>
          )}
        </label>
      </FormControlContext.Provider>
    );
  }
);

Field.displayName = 'Field';
