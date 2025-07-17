import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tag } from './Tag';

describe('Tag', () => {
  it('works correctly', async () => {
    const onRemove = jest.fn();
    render(<Tag onRemove={onRemove}>Hello</Tag>);

    expect(screen.getByText('Hello')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button'));
    expect(onRemove).toHaveBeenCalled();
  });
});
