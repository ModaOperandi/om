import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Expandable } from './Expandable';

describe('Expandable', () => {
  it('expands when clicked', async () => {
    const user = userEvent.setup();

    render(
      <Expandable virtual name='Hello'>
        Goodbye
      </Expandable>
    );

    expect(screen.getByText('Hello')).toBeVisible();
    expect(screen.queryByText('Goodbye')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button'));

    expect(screen.getByText('Goodbye')).toBeVisible();
  });
});
