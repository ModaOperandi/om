import React from 'react';
import { render, screen } from '@testing-library/react';

import { AspectRatioBox } from './AspectRatioBox';

describe('AspectRatioBox', () => {
  it('renders correctly', () => {
    render(
      <AspectRatioBox maxHeight={100} maxWidth={100}>
        Hello
      </AspectRatioBox>
    );
    expect(screen.getByText('Hello')).toBeVisible();
  });
});
