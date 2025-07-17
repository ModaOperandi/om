import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('works correctly with checked attribute (controlled)', async () => {
    const handleChange = jest.fn();
    const { rerender } = render(
      <Checkbox data-testid='checkbox' checked onChange={handleChange} />
    );

    expect(screen.getByRole('checkbox') as HTMLInputElement).toBeChecked();

    await userEvent.click(screen.getByTestId('checkbox'));

    expect(handleChange).toHaveBeenCalled();
    expect(screen.getByRole('checkbox') as HTMLInputElement).toBeChecked();

    rerender(<Checkbox data-testid='checkbox' checked={false} onChange={handleChange} />);

    expect(screen.getByRole('checkbox') as HTMLInputElement).not.toBeChecked();
  });

  it('works correctly with defaultChecked attribute (uncontrolled)', async () => {
    const handleChange = jest.fn();
    render(<Checkbox data-testid='checkbox' defaultChecked={false} onChange={handleChange} />);

    expect(screen.getByRole('checkbox') as HTMLInputElement).not.toBeChecked();

    await userEvent.click(screen.getByTestId('checkbox'));

    expect(handleChange).toHaveBeenCalled();
    expect(screen.getByRole('checkbox') as HTMLInputElement).toBeChecked();
  });
});
