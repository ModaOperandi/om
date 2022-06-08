import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SearchInput } from './SearchInput';

describe('SearchInput', () => {
  it('clears the input when the button is clicked', async () => {
    render(<SearchInput value='Hello' />);

    expect(screen.getByRole('textbox')).toHaveValue('Hello');

    await userEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('textbox')).toHaveValue('');
  });
});
