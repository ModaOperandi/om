import React from 'react';
import { render, screen } from '@testing-library/react';

import { Constrain } from './Constrain';

describe('Constrain', () => {
  it('renders correctly', () => {
    render(<Constrain>Hello</Constrain>);
    expect(screen.getByText('Hello')).toBeVisible();
  });
});
