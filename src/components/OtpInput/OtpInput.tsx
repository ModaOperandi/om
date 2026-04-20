import React from 'react';
import classNames from 'classnames';
import ReactOtpInput, {
  OTPInputProps as ReactOtpInputProps,
  InputProps as ReactOtpInputInputProps
} from 'react-otp-input';

import './OtpInput.scss';

type OtpInputHTMLProps = Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  'aria-describedby' | 'aria-label' | 'autoComplete' | 'id' | 'name' | 'required'
>;

export type OtpInputProps = Omit<
  ReactOtpInputProps,
  'containerStyle' | 'inputStyle' | 'renderInput' | 'skipDefaultStyles'
> &
  OtpInputHTMLProps & {
    className?: string;
    disabled?: boolean;
    error?: boolean | string;
    focus?: boolean;
    inputClassName?: string;
    label?: string;
  };

const getInputAriaLabel = (
  index: number,
  inputCount: number,
  ariaLabel?: string,
  label?: string
) => {
  const baseLabel = ariaLabel || label || 'One-time password digit';

  return `${baseLabel} ${index + 1} of ${inputCount}`;
};

export const OtpInput: React.FC<OtpInputProps> = ({
  'aria-describedby': ariaDescribedBy,
  'aria-label': ariaLabel,
  autoComplete = 'one-time-code',
  className,
  disabled,
  error,
  focus,
  id,
  inputClassName,
  inputType = 'tel',
  label,
  name,
  numInputs = 4,
  onChange,
  onPaste,
  placeholder,
  renderSeparator,
  required,
  shouldAutoFocus,
  value = '',
  ...rest
}) => {
  return (
    <>
      <input type='hidden' name={name} value={value} />
      <ReactOtpInput
        {...rest}
        containerStyle={classNames('OtpInput', className)}
        inputType={inputType}
        numInputs={numInputs}
        onChange={onChange}
        onPaste={onPaste}
        placeholder={placeholder}
        renderSeparator={renderSeparator}
        shouldAutoFocus={shouldAutoFocus}
        skipDefaultStyles
        value={value}
        renderInput={(inputProps: ReactOtpInputInputProps, index: number) => (
          <input
            {...inputProps}
            id={id ? `${id}-${index + 1}` : undefined}
            autoComplete={autoComplete}
            aria-describedby={ariaDescribedBy}
            aria-invalid={error ? true : undefined}
            aria-label={getInputAriaLabel(index, numInputs, ariaLabel, label)}
            className={classNames(inputProps.className, 'OtpInput__input', inputClassName, {
              'OtpInput__input--disabled': disabled,
              'OtpInput__input--error': error,
              'OtpInput__input--focus': focus
            })}
            disabled={disabled}
            required={required}
          />
        )}
      />
    </>
  );
};

OtpInput.displayName = 'OtpInput';
