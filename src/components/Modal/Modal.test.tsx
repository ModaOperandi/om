import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Modal } from './Modal';

describe('Modal', () => {
  it('renders correctly', () => {
    render(<Modal onClose={() => {}}>Hello</Modal>);
    expect(screen.getByText('Hello')).toBeVisible();
  });

  it('should only close when the modal wrapper is clicked', async () => {
    const onClose = jest.fn();
    const onClickButton = jest.fn();
    render(
      <Modal data-testid='modal' onClose={onClose}>
        <button data-testid='button' onClick={onClickButton}>
          Click Me
        </button>
      </Modal>
    );
    const modal = screen.getByTestId('modal');
    const button = screen.getByTestId('button');

    await userEvent.click(button);
    expect(onClose).toHaveBeenCalledTimes(0);
    expect(onClickButton).toHaveBeenCalledTimes(1);

    await userEvent.click(modal);
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(onClickButton).toHaveBeenCalledTimes(1);
  });
});
