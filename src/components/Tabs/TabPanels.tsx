import React from 'react';
import { Tab } from './Tab';
import { TabPanel } from './TabPanel';
import './TabPanels.scss';

export type TabPanelsProps = {
  panels: Tab[];
  activePanel: string;
};

export const TabPanels: React.FC<TabPanelsProps> = ({ panels, activePanel }) => {
  return (
    <div className='TabPanels'>
      {panels
        .filter(tab => tab.name === activePanel)
        .map(tab => (
          <TabPanel key={tab.name}>{tab.panel}</TabPanel>
        ))}
    </div>
  );
};
