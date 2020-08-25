import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toast } from './Toast';

describe('Toast', () => {
  it('works correctly', () => {
    const onRemove = jest.fn();
    render(
      <Toast theme='success' onRemove={onRemove}>
        Hello
      </Toast>
    );

    expect(screen.getByText('Hello')).toBeTruthy();

    userEvent.click(screen.getByRole('button', { name: 'Remove' }));
    expect(onRemove).toBeCalled();
  });
});
