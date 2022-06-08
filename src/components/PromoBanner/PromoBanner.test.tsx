import React from 'react';
import { render, screen } from '@testing-library/react';

import { PromoBanner } from './PromoBanner';

describe('PromoBanner', () => {
  it('renders correctly', () => {
    render(
      <PromoBanner>
        <span>Hello</span>
      </PromoBanner>
    );
    expect(screen.getByText('Hello')).toBeVisible();
  });
});
