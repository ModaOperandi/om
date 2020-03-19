import React from 'react';
import { States } from 'storybook-states';
import { Text } from '../Text';
import { Tabs, TabsProps } from './Tabs';

export default { title: 'Components|Tabs' };

const TAB_LIST = [
  {
    name: 'tab1',
    title: 'Tab 1',
    panel: <Text>First panel</Text>
  },
  {
    name: 'tab2',
    title: 'Tab 2',
    panel: <Text>SecondPanel</Text>
  }
];

export const Basic = () => (
  <States<TabsProps>>
    <Tabs tabs={TAB_LIST} />
  </States>
);
