import React from 'react';
import { render, screen } from '@testing-library/react';

import { SelectableButton } from './SelectableButton';

describe('SelectableButton', () => {
  it('renders correctly', () => {
    render(<SelectableButton>Click me</SelectableButton>);
    expect(screen.getByText('Click me')).toBeVisible();
  });
});
