import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SearchInput } from './SearchInput';

describe('SearchInput', () => {
  it('clears the input when the button is clicked', async () => {
    render(<SearchInput value='Hello' />);

    expect(screen.getByRole('searchbox')).toHaveValue('Hello');

    await userEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('searchbox')).toHaveValue('');
  });

  it('calls onChange when typing', async () => {
    const onChange = jest.fn();

    render(<SearchInput value='' onChange={onChange} />);

    await userEvent.type(screen.getByRole('searchbox'), 'Greetings');

    expect(onChange).toHaveBeenCalledWith('Greetings');

    await userEvent.click(screen.getByRole('button'));

    expect(onChange).toHaveBeenCalledWith('');
  });
});
