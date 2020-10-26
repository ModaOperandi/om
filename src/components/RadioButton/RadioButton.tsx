import React from 'react';
import classNames from 'classnames';
import './RadioButton.scss';

export type RadioButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  children?: JSX.Element | string;
};

export const RadioButton: React.FC<RadioButtonProps> = ({
  className,
  checked,
  children,
  value,
  tabIndex,
  ...rest
}) => (
  <label
    tabIndex={-1}
    className={classNames('RadioButton', className, {
      'RadioButton--checked': checked
    })}
  >
    <span
      tabIndex={-1}
      className={`RadioButton__indicator RadioButton__indicator--${
        checked ? 'checked' : 'unchecked'
      }`}
    />

    <input
      tabIndex={tabIndex != null ? tabIndex : 0}
      className='RadioButton__input'
      type='radio'
      role='radio'
      checked={checked}
      value={value}
      {...rest}
    />

    {children && (
      <span className='RadioButton__label' tabIndex={-1}>
        {children}
      </span>
    )}
  </label>
);
