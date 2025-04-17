import React, { useState, useCallback, useEffect, JSX } from 'react';
import classNames from 'classnames';
import CheckmarkIcon from '@moda/icons/checkmark-16';
import CircleIcon from '@moda/icons/circle-12';

import './Checkbox.scss';

const CHECKED_ITEM_PROPS = {
  className: 'Checkbox__check-mark',
  height: '85%',
  width: '85%'
};

export type ShowCheckedUsing = 'checkmark' | 'circle';

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  children?: JSX.Element | string;
  checkIcon?: ShowCheckedUsing;
  dataTestId?: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  defaultChecked,
  checked,
  children,
  value,
  onChange,
  disabled,
  checkIcon = 'checkmark',
  dataTestId,
  id,
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState(checked ?? defaultChecked ?? false);

  useEffect(() => {
    if (typeof checked !== 'undefined') setIsChecked(checked);
  }, [checked]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (typeof checked === 'undefined') setIsChecked(event.currentTarget.checked);
      onChange?.(event);
    },
    [onChange, checked]
  );

  return (
    <label
      htmlFor={id}
      tabIndex={0}
      className={classNames('Checkbox', className, {
        'Checkbox--disabled': disabled
      })}
      data-test-id={dataTestId && `${dataTestId}--label`}
    >
      <span
        tabIndex={-1}
        className={classNames('Checkbox__indicator', {
          'Checkbox__indicator--disabled': disabled
        })}
      >
        {isChecked && (
          <>
            {checkIcon === 'checkmark' && <CheckmarkIcon {...CHECKED_ITEM_PROPS} />}

            {checkIcon === 'circle' && <CircleIcon {...CHECKED_ITEM_PROPS} />}
          </>
        )}
      </span>

      <input
        id={id}
        tabIndex={-1}
        className='Checkbox__input'
        type='checkbox'
        checked={isChecked}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        data-test-id={dataTestId && `${dataTestId}--input`}
        {...rest}
      />

      {children && <span className='Checkbox__label'>{children}</span>}
    </label>
  );
};
