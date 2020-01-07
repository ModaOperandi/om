import React from 'react';
import classNames from 'classnames';
import RadioSelectedIcon from '@moda/icons/radio-selected-16';
import RadioUnselectedIcon from '@moda/icons/radio-unselected-16';

import './RadioButton.scss';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const RadioButton: React.FC<Props> = ({ className, checked, label, value, ...rest }) => {
  return (
    <label
      className={classNames('RadioButton', className, {
        'RadioButton--checked': checked
      })}
    >
      <span className='RadioButton__indicator'>
        {checked ? <RadioSelectedIcon /> : <RadioUnselectedIcon />}
      </span>

      <input
        className='RadioButton__input'
        type='radio'
        checked={checked}
        value={value}
        {...rest}
      />

      {label && <span className='RadioButton__label'>{label}</span>}
    </label>
  );
};
