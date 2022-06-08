import React from 'react';
import { render, screen } from '@testing-library/react';

import { ColorSwatch } from './ColorSwatch';

describe('ColorSwatch', () => {
  it('renders correctly', () => {
    render(<ColorSwatch color='nude' />);
    expect(screen.getByRole('button')).toBeVisible();
  });
});
