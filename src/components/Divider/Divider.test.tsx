import React from 'react';
import { render, screen } from '@testing-library/react';

import { Divider } from './Divider';

describe('Divider', () => {
  it('renders correctly', () => {
    render(<Divider style={{ padding: '30px 0' }} text='Hello' />);
    expect(screen.getByText('Hello')).toBeVisible();
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('Hello').parentNode).toHaveStyle('padding: 30px 0px;');
  });
});
