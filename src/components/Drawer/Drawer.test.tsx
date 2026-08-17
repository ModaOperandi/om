import React from 'react';
import { render, screen } from '@testing-library/react';

import { Drawer } from './Drawer';

describe('Drawer', () => {
  it('renders its children', () => {
    render(<Drawer open>Hello</Drawer>);
    expect(screen.getByText('Hello')).toBeVisible();
  });

  it('toggles the open class based on the open prop', () => {
    const { rerender } = render(
      <Drawer open={false} data-testid='drawer'>
        Hello
      </Drawer>
    );
    expect(screen.getByTestId('drawer')).not.toHaveClass('Drawer--open');

    rerender(
      <Drawer open data-testid='drawer'>
        Hello
      </Drawer>
    );
    expect(screen.getByTestId('drawer')).toHaveClass('Drawer--open');
  });
});
