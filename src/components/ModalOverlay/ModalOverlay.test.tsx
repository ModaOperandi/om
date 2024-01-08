import React, { useState } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ModalOverlay } from './ModalOverlay';

const ModalComponent: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return showModal ? (
    <ModalOverlay data-testid='modal' onClose={() => setShowModal(false)}>
      Modal Content
    </ModalOverlay>
  ) : (
    <button data-testid='button' onClick={() => setShowModal(true)}>
      Click Me
    </button>
  );
};

describe('ModalOverlay', () => {
  it('renders correctly', () => {
    render(<ModalOverlay onClose={() => {}}>Hello</ModalOverlay>);

    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('should open and close the modal', async () => {
    render(<ModalComponent />);

    // Should not show by default
    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();

    // Should show after clicking button
    await userEvent.click(screen.getByTestId('button'));
    await screen.findByText('Modal Content');

    // Should hide after clicking wrapper
    await userEvent.click(screen.getByTestId('modal'));
    await waitFor(() => expect(screen.queryByText('Modal Content')).not.toBeInTheDocument());
  });
});
