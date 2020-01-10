import React, { useState } from 'react';
import { render, wait } from '@testing-library/react';
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
    const { queryByText } = render(<ModalOverlay onClose={() => {}}>Hello</ModalOverlay>);

    expect(queryByText('Hello')).not.toBeNull();
  });

  it('should open and close the modal', async () => {
    const { getByTestId, queryByText } = render(<ModalComponent />);

    // Should not show by default
    expect(queryByText('Modal Content')).toBeNull();

    // Should show after clicking button
    userEvent.click(getByTestId('button'));
    await wait(() => expect(queryByText('Modal Content')).not.toBeNull());

    // Should hide after clicking wrapper
    userEvent.click(getByTestId('modal'));
    await wait(() => expect(queryByText('Modal Content')).toBeNull());
  });
});
