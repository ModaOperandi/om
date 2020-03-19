import React from 'react';
import './TabPanel.scss';

export type TabPanelProps = {
  children: React.ReactNode;
};

export const TabPanel: React.FC<TabPanelProps> = ({ children }) => {
  return <div className='TabPanel'>{children}</div>;
};
