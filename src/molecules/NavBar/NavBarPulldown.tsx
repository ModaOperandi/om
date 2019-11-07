import React from 'react';

import { NavBarPulldownSubsection, Subsection } from './NavBarPulldownSubsection';

import './NavBarPulldown.scss';

export interface Props {
  subsections: Subsection[];
}

export const NavBarPulldown: React.FC<Props> = ({ subsections, ...rest }) => {
  return (
    <div className='NavBarPulldown' {...rest}>
      {subsections.map(subsection => (
        <NavBarPulldownSubsection key={subsection.label} subsection={subsection} />
      ))}
    </div>
  );
};
