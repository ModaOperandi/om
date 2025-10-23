import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Tab } from './Tab';
import { TabList } from './TabList';
import { TabPanels } from './TabPanels';
import './Tabs.scss';

export type TabsProps = React.HTMLAttributes<HTMLDivElement> & {
  tabs: Tab[];
  onTabClicked?: (tabName: string) => void;
  defaultActiveTab?: string;
  activeTab?: string;
};

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  onTabClicked,
  defaultActiveTab,
  activeTab,
  className,
  ...rest
}) => {
  const [activePanel, setActivePanel] = useState(activeTab || defaultActiveTab || tabs[0].name);

  const handleTabClick = (tabName: string) => {
    if (!activeTab) setActivePanel(tabName);
    if (onTabClicked) onTabClicked(tabName);
  };

  useEffect(() => {
    if (activeTab) setActivePanel(activeTab);
  }, [activeTab]);

  return (
    <div className={classNames('Tabs', className)} {...rest}>
      <TabList tabs={tabs} onTabSelected={handleTabClick} activePanel={activePanel} />
      <TabPanels panels={tabs} activePanel={activePanel} />
    </div>
  );
};
