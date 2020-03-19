import React from 'react';
import { Tab } from '.';
import './TabList.scss';

export type TabListProps = {
  tabs: Tab[];
  onTabSelected(tabName: string): void;
  activePanel: string;
};

export const TabList: React.FC<TabListProps> = ({ tabs, onTabSelected, activePanel }) => {
  return (
    <div className='TabList'>
      {tabs.map(tab => (
        <Tab key={tab.name} tab={tab} onTabChosen={onTabSelected} activeTab={activePanel} />
      ))}
    </div>
  );
};
