import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CreditCardNumberInput } from './CreditCardNumberInput';

describe('credit card number input', () => {
  it('renders without errors', () => {
    render(<CreditCardNumberInput label='Card Number' />);
    const input = screen.getByLabelText('Card Number');
    expect(input).toBeInTheDocument();
  });

  // TODO: userEvent.type does not work here for some reason
  xit('does not allow non-numeric characters', async () => {
    render(<CreditCardNumberInput label='Card Number' />);
    const input = screen.getByLabelText('Card Number') as HTMLInputElement;

    await userEvent.type(input, 'foo1234');

    expect(input.value).toBe('1234 ____ ____ ____');
  });

  // TODO: userEvent.type does not work here for some reason
  xit('puts spaces between the numbers', async () => {
    render(<CreditCardNumberInput label='Card Number' />);
    const input = screen.getByLabelText('Card Number') as HTMLInputElement;

    await userEvent.type(input, '5510000000000000');

    expect(input.value).toBe('5510 0000 0000 0000');
  });

  // TODO: userEvent.type does not work here for some reason
  xit('does not allow more characters than required', async () => {
    render(<CreditCardNumberInput label='Card Number' />);
    const input = screen.getByLabelText('Card Number') as HTMLInputElement;

    await userEvent.type(input, '5510000000000000251');

    expect(input.value).toBe('5510 0000 0000 0000');
  });
});
