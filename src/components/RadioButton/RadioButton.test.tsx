import React from 'react';
import { render, screen } from '@testing-library/react';
import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
  it('renders correctly', () => {
    render(<RadioButton />);
    expect(screen.getByRole('radio')).toBeVisible();
  });

  it('supports checked', () => {
    render(<RadioButton checked readOnly />);
    expect(screen.getByRole('radio')).toBeVisible();
    expect(screen.getByRole('radio')).toBeChecked();
  });
});
