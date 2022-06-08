import React from 'react';
import { render, screen } from '@testing-library/react';

import { Loading } from './Loading';

describe('Loading', () => {
  it('renders correctly', () => {
    render(<Loading aria-label='Loading' />);
    expect(screen.getByLabelText('Loading')).toBeVisible();
  });
});
