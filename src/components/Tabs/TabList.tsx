import React from 'react';
import { Tab } from '.';
import './TabList.scss';

interface Props {
  tabs: Tab[];
  onTabSelected(tabName: string): void;
  activePanel: string;
}

export const TabList: React.FC<Props> = ({ tabs, onTabSelected, activePanel }) => {
  return (
    <div className="TabList">
      {tabs.map(tab => (
        <Tab key={tab.name} tab={tab} onTabChosen={onTabSelected} activeTab={activePanel} />
      ))}
    </div>
  );
};
