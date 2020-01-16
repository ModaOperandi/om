import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import CheckboxCheckedIcon from '@moda/icons/checkbox-checked-12';
import CheckboxUncheckedIcon from '@moda/icons/checkbox-unchecked-12';
import './Checkbox.scss';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: JSX.Element | string;
}

export const Checkbox: React.FC<Props> = ({
  className,
  defaultChecked,
  checked,
  children,
  value,
  onChange,
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked || checked);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.currentTarget.checked);
      onChange && onChange(event);
    },
    [onChange]
  );

  return (
    <label
      className={classNames('Checkbox', className, {
        'Checkbox--checked': checked
      })}
    >
      <span className='Checkbox__indicator'>
        {isChecked ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />}
      </span>

      <input
        className='Checkbox__input'
        type='checkbox'
        checked={isChecked}
        value={value}
        onChange={handleChange}
        {...rest}
      />

      {children && <span className='Checkbox__label'>{children}</span>}
    </label>
  );
};
