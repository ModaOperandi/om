import React, { Children } from 'react';
import classNames from 'classnames';
import { Breadcrumb } from './Breadcrumb';

import './Breadcrumbs.scss';

export type BreadcrumbsProps = React.OlHTMLAttributes<HTMLOListElement>;

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ children, className, ...rest }) => (
  <ol
    itemScope
    itemType='http://schema.org/BreadcrumbList'
    className={classNames('Breadcrumbs', className)}
    {...rest}
  >
    {Children.map(children, (child, i) => (
      <Breadcrumb key={i}>{child}</Breadcrumb>
    ))}
  </ol>
);
