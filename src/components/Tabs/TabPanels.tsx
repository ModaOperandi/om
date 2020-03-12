import React from 'react';
import { Tab, TabPanel } from '.';
import './TabPanels.scss';

interface Props {
  panels: Tab[];
  activePanel: string;
}

export const TabPanels: React.FC<Props> = ({ panels, activePanel }) => {
  return (
    <div className="TabPanels">
      {panels
        .filter(tab => tab.name === activePanel)
        .map(tab => (
          <TabPanel key={tab.name}>{tab.panel}</TabPanel>
        ))}
    </div>
  );
};
