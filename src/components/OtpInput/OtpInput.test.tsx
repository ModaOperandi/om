import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { OtpInput } from './OtpInput';

const SIX_INPUTS = 6;
const FOUR_INPUTS = 4;

describe('OtpInput', () => {
  it('renders the requested number of inputs', () => {
    render(
      <OtpInput label='Verification code' numInputs={SIX_INPUTS} onChange={jest.fn()} value='' />
    );

    expect(screen.getAllByRole('textbox')).toHaveLength(SIX_INPUTS);
  });

  it('calls onChange with the combined code as the user types', async () => {
    const onChange = jest.fn();

    const TestComponent = () => {
      const [value, setValue] = useState('');

      return (
        <OtpInput
          label='Verification code'
          numInputs={FOUR_INPUTS}
          onChange={nextValue => {
            setValue(nextValue);
            onChange(nextValue);
          }}
          value={value}
        />
      );
    };

    render(<TestComponent />);

    await userEvent.type(screen.getAllByRole('textbox')[0], '1234');

    expect(onChange).toHaveBeenLastCalledWith('1234');
    expect(screen.getAllByRole('textbox')).toHaveLength(FOUR_INPUTS);
  });
});
