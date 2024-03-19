import React, { useState } from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Dialog } from './Dialog';

const DialogComponent: React.FC = () => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <button onClick={() => setShowDialog(true)}>Click Me</button>
      <Dialog
        show={showDialog}
        onClose={() => setShowDialog(false)}
        title='This is a dialog'
        actions={<button onClick={() => setShowDialog(false)}>Close</button>}
      />
    </>
  );
};

describe('Dialog', () => {
  it('should open and close the dialog', async () => {
    render(<DialogComponent />);

    // Should not show by default
    expect(screen.queryByText('This is a dialog')).not.toBeInTheDocument();

    // Should show after clicking button
    await userEvent.click(screen.getByRole('button', { name: 'Click Me' }));
    await screen.findByText('This is a dialog');

    // Should hide after clicking Close
    await userEvent.click(screen.getByRole('button', { name: 'Close' }));
    await waitForElementToBeRemoved(() => screen.queryByText('This is a dialog'));
  });
});
