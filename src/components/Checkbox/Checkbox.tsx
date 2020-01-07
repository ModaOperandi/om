import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import CheckboxCheckedIcon from '@moda/icons/checkbox-checked-12';
import CheckboxUncheckedIcon from '@moda/icons/checkbox-unchecked-12';
import './Checkbox.scss';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox: React.FC<Props> = ({
  className,
  defaultChecked,
  checked,
  label,
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
      {isChecked ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />}

      <input
        className='Checkbox__input'
        type='checkbox'
        checked={isChecked}
        value={value}
        onChange={handleChange}
        {...rest}
      />

      {label && <span className='Checkbox__label'>{label}</span>}
    </label>
  );
};
