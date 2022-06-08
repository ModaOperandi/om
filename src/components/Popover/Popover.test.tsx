import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Popover } from './Popover';

describe('Popover', () => {
  it('renders correctly', async () => {
    render(
      <Popover content={<div>Secret</div>}>
        <span>Hover</span>
      </Popover>
    );

    expect(screen.queryByText('Secret')).not.toBeInTheDocument();

    await userEvent.hover(screen.getByText('Hover'));

    expect(screen.getByText('Secret')).toBeVisible();
  });
});
