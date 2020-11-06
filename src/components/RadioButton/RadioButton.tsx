import React, { useRef } from 'react';
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
  disabled,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <label
      tabIndex={tabIndex ?? 0}
      onKeyPress={({ key }) => (key === 'Enter' || key === ' ') && inputRef.current?.click()}
      className={classNames('RadioButton', className, {
        'RadioButton--checked': checked,
        'RadioButton--disabled': disabled
      })}
    >
      <span
        tabIndex={-1}
        className={classNames('RadioButton__indicator', {
          'RadioButton__indicator--checked': checked,
          'RadioButton__indicator--unchecked': !checked,
          'RadioButton__indicator--disabled': disabled
        })}
      />
      <input
        ref={inputRef}
        tabIndex={-1}
        className='RadioButton__input'
        type='radio'
        role='radio'
        checked={checked}
        value={value}
        disabled={disabled}
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
