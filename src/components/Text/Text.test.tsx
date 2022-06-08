import React from 'react';
import { render, screen } from '@testing-library/react';

import { Text } from './Text';

describe('Text', () => {
  it('renders correctly', () => {
    render(
      <Text treatment='body2' color='money-good' family='serif'>
        Hello
      </Text>
    );
    expect(screen.getByText('Hello')).toBeVisible();
  });
});
