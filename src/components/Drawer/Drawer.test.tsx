import React from 'react';
import { render, screen } from '@testing-library/react';

import { Drawer } from './Drawer';

describe('Drawer', () => {
  it('renders its children', () => {
    render(<Drawer open>Hello</Drawer>);
    expect(screen.getByText('Hello')).toBeVisible();
  });

  it('toggles the open class based on the open prop', () => {
    const { rerender } = render(<Drawer open={false}>Hello</Drawer>);
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('Hello').parentNode).not.toHaveClass('Drawer--open');

    rerender(<Drawer open>Hello</Drawer>);
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('Hello').parentNode).toHaveClass('Drawer--open');
  });
});
