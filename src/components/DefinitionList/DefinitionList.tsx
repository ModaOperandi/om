import React from 'react';

import './DefinitionList.scss';

export interface Props extends React.HTMLAttributes<HTMLDListElement> {
  term: string;
  children: React.ReactNode;
}

export const DefinitionList: React.FC<Props> = ({ term, children, ...rest }) => (
  <dl className='DefinitionList' {...rest}>
    <dt>{term}</dt>
    <dd>{children}</dd>
  </dl>
);
