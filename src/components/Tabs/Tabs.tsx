import React, { useState } from 'react';
import classNames from 'classnames';
import { Tab, TabList, TabPanels } from '.';
import './Tabs.scss';

export type TabsProps = React.HTMLAttributes<HTMLDivElement> & {
  tabs: Tab[];
};

export const Tabs: React.FC<TabsProps> = ({ tabs, className, ...rest }) => {
  const [activePanel, setActivePanel] = useState(tabs[0].name);

  return (
    <div className={classNames('Tabs', className)} {...rest}>
      <TabList tabs={tabs} onTabSelected={setActivePanel} activePanel={activePanel} />
      <TabPanels panels={tabs} activePanel={activePanel} />
    </div>
  );
};
