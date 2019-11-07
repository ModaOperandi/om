import React from "react";

import { NavBarPulldown } from "./NavBarPulldown";
import { Subsection, Link } from "./NavBarPulldownSubsection";

import "./NavBar.scss";

export type Section = Link & {
  subsections?: Subsection[];
};

export interface Props {
  sections: Section[];
}

export const NavBar: React.FC<Props> = ({ sections, ...rest }) => {
  return (
    <nav className="NavBar" {...rest}>
      {sections.map(section => (
        <div className="NavBar__section" key={section.href}>
          <a href={section.href}>{section.label}</a>

          {section.subsections && (
            <div className="NavBar__pulldown">
              <NavBarPulldown subsections={section.subsections} />
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};
