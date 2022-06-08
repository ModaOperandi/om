import React from 'react';
import { render, screen } from '@testing-library/react';

import { Badge } from './Badge';

describe('Badge', () => {
  it('supports custom children', () => {
    render(<Badge>Custom Text - 1</Badge>);
    expect(screen.getByText('Custom Text - 1')).toBeVisible();
  });

  it('supports custom themes and children', () => {
    render(<Badge theme='klein-blue'>Custom Text - 2</Badge>);
    expect(screen.getByText('Custom Text - 2')).toHaveClass('Badge--klein-blue');
  });
});
