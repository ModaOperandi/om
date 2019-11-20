import React, { Children } from 'react';
import classNames from 'classnames';

import './Breadcrumbs.scss';

export interface Props extends React.OlHTMLAttributes<HTMLOListElement> {}

export const Breadcrumbs: React.FC<Props> = ({ children, className, ...rest }) => (
  <ol
    itemScope
    itemType='http://schema.org/BreadcrumbList'
    className={classNames('Breadcrumbs', className)}
    {...rest}
  >
    {Children.map(children, (child, i) => (
      <li key={i} itemProp='itemListElement' itemScope itemType='http://schema.org/ListItem'>
        {child}
      </li>
    ))}
  </ol>
);
