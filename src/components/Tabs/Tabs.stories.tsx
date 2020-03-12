import React from 'react';

import { Tabs } from './Tabs';

export default { title: 'Components|Tabs' };

const tabList = [
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

export const Basic = () => <Tabs tabs={tabList} />;
