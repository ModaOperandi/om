import React from 'react';
import { Field, FieldProps } from '../Field';

export type CreditCardNumberInputFieldProps = Omit<FieldProps, 'onChange'> & {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export const CreditCardNumberInputField: React.FC<CreditCardNumberInputFieldProps> = ({
  onChange,
  ...rest
}) => <Field {...rest} onChangeEvent={onChange} />;
