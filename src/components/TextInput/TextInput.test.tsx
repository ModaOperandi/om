import React from 'react';
import { render, screen } from '@testing-library/react';

import { TextInput } from './TextInput';

describe('TextInput', () => {
  it('renders correctly', () => {
    render(<TextInput placeholder='Hello' />);
    expect(screen.getByRole('textbox')).toHaveValue('');
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Hello');
  });
});
