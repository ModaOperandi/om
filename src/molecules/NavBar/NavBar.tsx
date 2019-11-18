import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { NavBarPulldown } from './NavBarPulldown';
import { Subsection, Link } from './NavBarPulldownSubsection';

import './NavBar.scss';

export type Section = Link & {
  subsections?: Subsection[];
};

export interface Props {
  sections: Section[];
}

export const NavBar: React.FC<Props> = ({ sections, ...rest }) => {
  const [isInitialized, initialize] = useState(false);

  useEffect(() => {
    initialize(true);
  }, []);

  return (
    <nav
      className={classNames('NavBar', {
        'NavBar--initialized': isInitialized
      })}
      {...rest}
    >
      {sections.map(section => (
        <div className='NavBar__section' key={section.href}>
          <a href={section.href}>{section.label}</a>

          {section.subsections && (
            <div className='NavBar__pulldown'>
              <NavBarPulldown subsections={section.subsections} />
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};
