import React from 'react';
import { render, screen } from '@testing-library/react';

import { Stack } from './Stack';

describe('Stack', () => {
  it('renders correctly', () => {
    render(
      <Stack space={6} direction='horizontal'>
        <div>Hello</div>
        <div>World</div>
      </Stack>
    );

    expect(screen.getByText('Hello')).toBeVisible();
    expect(screen.getByText('World')).toBeVisible();
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('Hello').parentNode).toHaveClass('Stack--horizontal-6');
  });
});
