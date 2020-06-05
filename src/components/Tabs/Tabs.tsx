import React, { useState } from 'react';
import classNames from 'classnames';
import { Tab, TabList, TabPanels } from '.';
import './Tabs.scss';

export type TabsProps = React.HTMLAttributes<HTMLDivElement> & {
  tabs: Tab[];
  onTabClicked?: (tabName: string) => void;
};

export const Tabs: React.FC<TabsProps> = ({ tabs, onTabClicked, className, ...rest }) => {
  const [activePanel, setActivePanel] = useState(tabs[0].name);
  const handleTabClick = (tabName: string) => {
    setActivePanel(tabName);
    if (onTabClicked) onTabClicked(tabName);
  };

  return (
    <div className={classNames('Tabs', className)} {...rest}>
      <TabList tabs={tabs} onTabSelected={handleTabClick} activePanel={activePanel} />
      <TabPanels panels={tabs} activePanel={activePanel} />
    </div>
  );
};
