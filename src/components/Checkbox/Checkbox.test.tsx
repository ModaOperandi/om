import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('works correctly with checked attribute (controlled)', () => {
    const handleChange = jest.fn();
    const { getByRole, getByTestId, rerender } = render(
      <Checkbox data-testid='checkbox' checked onChange={handleChange} />
    );

    expect((getByRole('checkbox') as HTMLInputElement).checked).toBe(true);

    userEvent.click(getByTestId('checkbox'));

    expect(handleChange).toBeCalled();
    expect((getByRole('checkbox') as HTMLInputElement).checked).toBe(true);

    rerender(<Checkbox data-testid='checkbox' checked={false} onChange={handleChange} />);

    expect((getByRole('checkbox') as HTMLInputElement).checked).toBe(false);
  });

  it('works correctly with defaultChecked attribute (uncontrolled)', () => {
    const handleChange = jest.fn();
    const { getByRole, getByTestId } = render(
      <Checkbox data-testid='checkbox' defaultChecked={false} onChange={handleChange} />
    );

    expect((getByRole('checkbox') as HTMLInputElement).checked).toBe(false);

    userEvent.click(getByTestId('checkbox'));

    expect(handleChange).toBeCalled();
    expect((getByRole('checkbox') as HTMLInputElement).checked).toBe(true);
  });
});
