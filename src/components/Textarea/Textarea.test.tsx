import React from 'react';
import { render, screen } from '@testing-library/react';

import { Textarea } from './Textarea';

describe('Textarea', () => {
  it('renders correctly', () => {
    render(<Textarea placeholder='Placeholder' defaultValue='Hello' />);

    expect(screen.getByRole('textbox')).toHaveValue('Hello');
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Placeholder');
  });

  it('renders with an error', () => {
    render(<Textarea placeholder='Placeholder' defaultValue='Hello' label='Label' error='Error' />);

    expect(screen.getByRole('textbox')).toHaveValue('Hello');
    expect(screen.getByRole('textbox')).toHaveClass('Textarea--error');
  });

  it('renders with a className', () => {
    render(
      <Textarea className='Custom' placeholder='Placeholder' defaultValue='Hello' label='Label' />
    );

    expect(screen.getByRole('textbox')).toHaveValue('Hello');
    expect(screen.getByRole('textbox')).toHaveClass('Custom');
  });
});
