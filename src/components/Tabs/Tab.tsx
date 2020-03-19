import React, { useCallback } from 'react';
import { Clickable } from '../Clickable';
import './Tab.scss';

export type Tab = {
  name: string;
  title: string;
  panel: JSX.Element;
};

export type TabProps = {
  tab: Tab;
  activeTab: string;
  onTabChosen(tabName: string): void;
};

export const Tab: React.FC<TabProps> = ({ tab, onTabChosen, activeTab }) => {
  const handleClick = useCallback(() => onTabChosen(tab.name), [tab.name, onTabChosen]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === 'Enter') {
        handleClick();
      }
    },
    [handleClick]
  );

  return (
    <Clickable
      className={`Tab ${activeTab === tab.name ? 'Tab--active' : ''}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {tab.title}
    </Clickable>
  );
};
