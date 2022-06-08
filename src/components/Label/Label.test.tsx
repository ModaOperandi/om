import React from 'react';
import { render, screen } from '@testing-library/react';

import { Label } from './Label';

describe('Label', () => {
  it('renders correctly', () => {
    render(<Label>Hello</Label>);
    expect(screen.getByText('Hello')).toBeVisible();
  });
});
