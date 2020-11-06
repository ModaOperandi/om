import React, { useState, useCallback, useEffect } from 'react';
import classNames from 'classnames';
import './Checkbox.scss';

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  children?: JSX.Element | string;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  defaultChecked,
  checked,
  children,
  value,
  onChange,
  disabled,
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState(checked ?? defaultChecked ?? false);

  useEffect(() => {
    if (typeof checked !== 'undefined') setIsChecked(checked);
  }, [checked]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (typeof checked === 'undefined') setIsChecked(event.currentTarget.checked);
      onChange && onChange(event);
    },
    [onChange, checked]
  );

  return (
    <label
      role='button'
      tabIndex={0}
      className={classNames('Checkbox', className, {
        'Checkbox--checked': isChecked,
        'Checkbox--disabled': disabled
      })}
    >
      <span
        tabIndex={-1}
        className={classNames('Checkbox__indicator', {
          'Checkbox__indicator--checked': isChecked,
          'Checkbox__indicator--unchecked': !isChecked,
          'Checkbox__indicator--disabled': disabled
        })}
      />

      <input
        tabIndex={-1}
        className='Checkbox__input'
        type='checkbox'
        checked={isChecked}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        {...rest}
      />

      {children && <span className='Checkbox__label'>{children}</span>}
    </label>
  );
};
