import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CreditCardNumberInput } from './CreditCardNumberInput';

describe('credit card number input', () => {
  it('renders without errors', () => {
    const { getByLabelText } = render(<CreditCardNumberInput label='Card Number' />);
    const input = getByLabelText('Card Number');
    expect(input).toBeTruthy();
  });

  it('does not allow non-numeric characters', () => {
    const { getByLabelText } = render(<CreditCardNumberInput label='Card Number' />);
    const input = getByLabelText('Card Number') as HTMLInputElement;

    userEvent.type(input, 'foo1234');

    expect(input.value).toBe('1234 ____ ____ ____');
  });

  it('puts spaces between the numbers', () => {
    const { getByLabelText } = render(<CreditCardNumberInput label='Card Number' />);
    const input = getByLabelText('Card Number') as HTMLInputElement;

    userEvent.type(input, '5510000000000000');

    expect(input.value).toBe('5510 0000 0000 0000');
  });

  it('does not allow more characters than required', () => {
    const { getByLabelText } = render(<CreditCardNumberInput label='Card Number' />);
    const input = getByLabelText('Card Number') as HTMLInputElement;

    userEvent.type(input, '5510000000000000251');

    expect(input.value).toBe('5510 0000 0000 0000');
  });
});
