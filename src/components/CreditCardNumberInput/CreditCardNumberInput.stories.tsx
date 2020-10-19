import React from 'react';
import { States } from 'storybook-states';
import { CreditCardNumberInput, CreditCardNumberInputProps } from './CreditCardNumberInput';

export default { title: 'Components/CreditCardNumberInput' };

export const Default = () => (
  <States<CreditCardNumberInputProps>
    states={[
      {},
      { alwaysShowMask: true },
      { alwaysShowMask: true, maskChar: '-' },
      { maskChar: '' }
    ]}
  >
    <CreditCardNumberInput label='Card Number' />
  </States>
);
