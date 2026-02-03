import React from 'react';
import classNames from 'classnames';
import { Tab } from './Tab';

import './TabList.scss';

export type TabListProps = {
  tabs: Tab[];
  onTabSelected(tabName: string): void;
  activePanel: string;
  className?: string;
};

export const TabList: React.FC<TabListProps> = ({
  tabs,
  onTabSelected,
  activePanel,
  className
}) => (
  <div className={classNames('TabList', className)}>
    {tabs.map(tab => (
      <Tab key={tab.name} tab={tab} onTabChosen={onTabSelected} activeTab={activePanel} />
    ))}
  </div>
);
