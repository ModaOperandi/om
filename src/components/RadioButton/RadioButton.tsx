import React from 'react';
import classNames from 'classnames';
import RadioSelectedIcon from '@moda/icons/radio-selected-16';
import RadioUnselectedIcon from '@moda/icons/radio-unselected-16';
import './RadioButton.scss';

export type RadioButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  children?: JSX.Element | string;
};

export const RadioButton: React.FC<RadioButtonProps> = ({
  className,
  checked,
  children,
  value,
  ...rest
}) => {
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

      {children && <span className='RadioButton__label'>{children}</span>}
    </label>
  );
};
