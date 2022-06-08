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
    expect(onClose).toBeCalledTimes(0);
    expect(onClickButton).toBeCalledTimes(1);

    await userEvent.click(modal);
    expect(onClose).toBeCalledTimes(1);
    expect(onClickButton).toBeCalledTimes(1);
  });
});
