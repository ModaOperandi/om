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
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <label
      tabIndex={tabIndex ?? 0}
      onKeyPress={({ key }) => (key === 'Enter' || key === ' ') && inputRef.current?.click()}
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
        ref={inputRef}
        tabIndex={-1}
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
};
