import React from 'react';
import { render, screen } from '@testing-library/react';

import { Tabs } from './Tabs';

describe('Tabs', () => {
  const testList = [
    {
      name: 'tab1',
      title: 'Tab 1',
      panel: <div className='test'>I am a panel</div>
    },
    {
      name: 'tab2',
      title: 'Tab 2',
      panel: <div className='test'>I am also a panel</div>
    }
  ];

  it('renders correctly with first tab displayed', () => {
    render(<Tabs tabs={testList} />);

    expect(screen.getByRole('button', { name: 'Tab 1' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Tab 2' })).toBeVisible();
  });
});
