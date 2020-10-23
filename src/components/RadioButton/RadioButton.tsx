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
}) => {
  return (
    <label
      role='radio'
      tabIndex={tabIndex || 0}
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
        tabIndex={-1}
        className='RadioButton__input'
        type='radio'
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
};
