import React from 'react';
import { render, screen } from '@testing-library/react';

import { Clickable } from './Clickable';

describe('Clickable', () => {
  it('renders correctly', () => {
    render(<Clickable>Hello</Clickable>);
    expect(screen.getByRole('button', { name: 'Hello' })).toBeVisible();
  });
});
