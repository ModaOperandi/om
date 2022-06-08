import React from 'react';
import { render, screen } from '@testing-library/react';

import { VerticalDivider } from './VerticalDivider';

describe('VerticalDivider', () => {
  it('renders correctly', () => {
    render(<VerticalDivider aria-label='Divider' />);

    expect(screen.getByLabelText('Divider')).toBeVisible();
  });

  it('renders correctly - double', () => {
    render(<VerticalDivider aria-label='Divider' double />);

    expect(screen.getByLabelText('Divider')).toBeVisible();
    expect(screen.getByLabelText('Divider')).toHaveClass('VerticalDivider--double');
  });
});
