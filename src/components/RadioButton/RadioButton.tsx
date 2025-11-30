import React, { JSX } from 'react';
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
  disabled,
  ...rest
}) => {
  return (
    <label
      className={classNames('RadioButton', className, {
        'RadioButton--checked': checked,
        'RadioButton--disabled': disabled
      })}
    >
      <span
        aria-hidden='true'
        className={classNames('RadioButton__indicator', {
          'RadioButton__indicator--checked': checked,
          'RadioButton__indicator--unchecked': !checked,
          'RadioButton__indicator--disabled': disabled
        })}
      />
      <input
        className='RadioButton__input'
        type='radio'
        checked={checked}
        value={value}
        disabled={disabled}
        {...rest}
      />
      {children && <span className='RadioButton__label'>{children}</span>}
    </label>
  );
};
