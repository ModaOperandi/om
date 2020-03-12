import React from 'react';
import './TabPanel.scss';

interface Props {
  children: React.ReactNode;
}

export const TabPanel: React.FC<Props> = ({ children }) => {
  return <div className="TabPanel">{children}</div>;
};
