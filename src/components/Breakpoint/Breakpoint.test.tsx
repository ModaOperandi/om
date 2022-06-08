import React from 'react';
import { render, screen } from '@testing-library/react';

import { Breakpoint } from './Breakpoint';

describe('Breakpoint', () => {
  it('renders correctly', () => {
    render(
      <>
        <Breakpoint gt='md'>Visible on mobile</Breakpoint>
        <Breakpoint lt='md'>Visible on desktop</Breakpoint>
      </>
    );
    expect(screen.getByText('Visible on desktop')).toBeVisible();
    expect(screen.queryByText('Visible on mobile')).not.toBeInTheDocument();
  });
});
