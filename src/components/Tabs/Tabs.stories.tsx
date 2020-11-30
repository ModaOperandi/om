import React, { useState } from 'react';
import { States } from 'storybook-states';
import { Text } from '../Text';
import { Tabs, TabsProps } from './Tabs';

export default { title: 'Components/Tabs' };

const TAB_LIST = [
  {
    name: 'tab1',
    title: 'Tab 1',
    panel: (
      <Text>
        FIRST PANEL:
        <br />
        Tabs accepts two parameters:
        <br />- tabs: And array of tab items
        <br />- onTabClicked: Optional callback when a tab is clicked. Returns the name of the tab
        that was clicked.
        <br />
        <br />
        <code>
          {"<Tabs tabs={[ { name: 'tab1', title: 'First Tab', panel: panelComponent } ]} />"}
        </code>
      </Text>
    )
  },
  {
    name: 'tab2',
    title: 'Tab 2',
    panel: <Text>Second panel</Text>
  }
];

export const Basic = () => (
  <States<TabsProps>>
    <Tabs tabs={TAB_LIST} />
  </States>
);

export const WithCallback = () => {
  const [tabName, setTabName] = useState('Tabname will be updated on click');
  const handleTabClick = (tabName: string) => {
    setTabName(tabName);
  };

  return (
    <States<TabsProps>>
      <>
        <Text treatment='h5'>Selected Tab:</Text>
        <Text> {tabName} </Text>
        <Tabs tabs={TAB_LIST} onTabClicked={handleTabClick} />
      </>
    </States>
  );
};
