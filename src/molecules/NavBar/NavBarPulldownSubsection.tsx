import React from "react";

import "./NavBarPulldownSubsection.scss";

export type Link = {
  label: string;
  href: string;
};

export type Thumb = Link & {
  src: string;
};

export type DefaultSubsection = {
  type: "default";
  label: string;
  links: Link[];
};

export type HighlightedSubsection = {
  type: "highlighted";
  label: string;
  links: Thumb[];
};

export type Subsection = DefaultSubsection | HighlightedSubsection;

export interface Props {
  subsection: Subsection;
}

export const NavBarPulldownSubsection: React.FC<Props> = ({
  subsection,
  ...rest
}) => {
  return (
    <div
      className={`NavBarPulldownSubsection NavBarPulldownSubsection--${subsection.type}`}
      {...rest}
    >
      <h3>{subsection.label}</h3>

      {subsection.type === "default" &&
        subsection.links.map(link => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}

      {subsection.type === "highlighted" && (
        <div className="NavBarPulldownSubsection__links">
          {subsection.links.map(link => (
            <a key={link.href} href={link.href}>
              <img src={link.src} alt={link.label} />

              <h4>{link.label}</h4>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
