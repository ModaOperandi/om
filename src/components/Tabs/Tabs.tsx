import React, { useState } from 'react';
import classNames from 'classnames';
import { TabList, TabPanels } from '.';
import './Tabs.scss';

interface Tab {
  name: string;
  title: string;
  panel: JSX.Element;
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  tabs: Tab[];
}

export const Tabs: React.FC<Props> = ({ tabs, className, ...rest }) => {
  const [activePanel, setActivePanel] = useState(tabs[0].name);

  return (
    <div className={classNames('Tabs', className)} {...rest}>
      <TabList tabs={tabs} onTabSelected={setActivePanel} activePanel={activePanel} />
      <TabPanels panels={tabs} activePanel={activePanel} />
    </div>
  );
};
