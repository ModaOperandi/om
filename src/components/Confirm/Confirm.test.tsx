import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ConfirmProvider, useConfirm } from './Confirm';

const ConfirmComponent: React.FC = () => {
  const { confirm } = useConfirm();

  return (
    <button onClick={() => confirm({ title: 'Are you sure?', confirmationText: 'Yes' })}>
      Click Me
    </button>
  );
};

describe('Dialog', () => {
  it('should show the confirmation and hide it on confirm/cancel', async () => {
    render(
      <ConfirmProvider>
        <ConfirmComponent />
      </ConfirmProvider>
    );

    // Should not show by default
    expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();

    // Should show after clicking button
    await userEvent.click(screen.getByRole('button', { name: 'Click Me' }));
    await screen.findByText('Are you sure?');

    // Should hide after clicking Yes
    await userEvent.click(screen.getByRole('button', { name: 'Yes' }));
    await waitForElementToBeRemoved(() => screen.queryByText('Are you sure?'));

    // Should show after clicking button
    await userEvent.click(screen.getByRole('button', { name: 'Click Me' }));
    await screen.findByText('Are you sure?');

    // Should hide after clicking Cancel
    await userEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    await waitForElementToBeRemoved(() => screen.queryByText('Are you sure?'));
  });
});
