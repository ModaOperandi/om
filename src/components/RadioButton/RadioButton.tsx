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
  ...rest
}) => {
  return (
    <label
      className={classNames('RadioButton', className, {
        'RadioButton--checked': checked
      })}
    >
      <span
        className={`RadioButton__indicator RadioButton__indicator--${
          checked ? 'checked' : 'unchecked'
        }`}
      />

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
