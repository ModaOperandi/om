import React from 'react';
import { render, screen } from '@testing-library/react';

import { Overlay } from './Overlay';

describe('Overlay', () => {
  it('renders correctly', () => {
    const text = 'test-Text';
    render(<Overlay>{text}</Overlay>);
    expect(screen.getByText(text)).toBeVisible();
  });
});
