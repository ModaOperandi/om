import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tag } from './Tag';

describe('Tag', () => {
  it('works correctly', () => {
    const onRemove = jest.fn();
    render(<Tag onRemove={onRemove}>Hello</Tag>);

    expect(screen.getByText('Hello')).toBeTruthy();

    userEvent.click(screen.getByRole('button'));
    expect(onRemove).toBeCalled();
  });
});
