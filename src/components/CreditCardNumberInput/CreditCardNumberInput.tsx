import React, { useState, useEffect, useCallback, useMemo } from 'react';
import InputMask from '@mona-health/react-input-mask';
import { Props as InputMaskProps } from 'react-input-mask';
import creditCardType from 'credit-card-type';
import { FieldProps } from '../Field';
import { CreditCardNumberInputField } from './CreditCardNumberInputField';

export type CreditCardNumberInputProps = Omit<
  InputMaskProps & FieldProps,
  'mask' | 'value' | 'defaultValue'
> & {
  value?: string;
  defaultValue?: string;
};

const DEFAULT_MASK = '9999 9999 9999 9999';

export const CreditCardNumberInput: React.FC<CreditCardNumberInputProps> = ({
  value: propsValue,
  disabled,
  readOnly,
  defaultValue,
  maskChar,
  alwaysShowMask,
  onMouseDown,
  onFocus,
  onBlur,
  onChange,
  ...rest
}) => {
  const [value, setValue] = useState(propsValue ?? defaultValue ?? '');

  const mask = useMemo(() => {
    const cardType = creditCardType(value)[0];
    if (!cardType) return DEFAULT_MASK;

    const { gaps, lengths } = cardType;
    if (!gaps || !lengths) return DEFAULT_MASK;

    const length = lengths[lengths.length - 1];
    const digits = Array(length).fill('9');
    return gaps
      .reduceRight(
        (mask, gapIndex) => [...mask.slice(0, gapIndex), ' ', ...mask.slice(gapIndex)],
        digits
      )
      .join('');
  }, [value]);

  useEffect(() => {
    if (propsValue != null && value !== propsValue) setValue(propsValue);
  }, [propsValue, value, setValue]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      onChange?.(event.target.value);
    },
    [setValue, onChange]
  );

  return (
    <InputMask
      mask={mask}
      maskPlaceholder={maskChar}
      alwaysShowMask={alwaysShowMask}
      disabled={disabled}
      readOnly={readOnly}
      value={value}
      onChange={handleChange}
      onMouseDown={onMouseDown}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <CreditCardNumberInputField {...rest} />
    </InputMask>
  );
};
