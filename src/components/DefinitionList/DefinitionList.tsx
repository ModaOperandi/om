import React from 'react';
import classNames from 'classnames';

import './DefinitionList.scss';

export interface Props extends React.HTMLAttributes<HTMLDListElement> {
  term: string;
  children: React.ReactNode;
}

export const DefinitionList: React.FC<Props> = ({ term, children, className, ...rest }) => (
  <dl className={classNames('DefinitionList', className)} {...rest}>
    <dt>{term}</dt>
    <dd>{children}</dd>
  </dl>
);
