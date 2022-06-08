import React from 'react';
import { render, screen } from '@testing-library/react';

import { ControlLink } from './ControlLink';

describe('ControlLink', () => {
  it('renders correctly', () => {
    render(<ControlLink> click me! </ControlLink>);
    expect(screen.getByRole('button', { name: 'click me!' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'click me!' })).toBeEnabled();
  });

  it('renders correctly while disabled', () => {
    render(<ControlLink disabled> do not click me! </ControlLink>);
    expect(screen.getByRole('button', { name: 'do not click me!' })).toBeDisabled();
  });

  it('renders correctly while underlined', () => {
    render(<ControlLink underlined> click me! </ControlLink>);
    expect(screen.getByRole('button', { name: 'click me!' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'click me!' })).toHaveClass(
      'ControlLink--underlined'
    );
  });
});
