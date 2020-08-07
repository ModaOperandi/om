import React, { Children, cloneElement, isValidElement } from 'react';
import classNames from 'classnames';

import './Breadcrumbs.scss';

export type BreadcrumbsProps = React.OlHTMLAttributes<HTMLOListElement>;

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ children, className, ...rest }) => {
  let position = 0;

  return (
    <ol
      itemScope
      itemType='http://schema.org/BreadcrumbList'
      className={classNames('Breadcrumbs', className)}
      {...rest}
    >
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          position = position + 1;
          return cloneElement(
            child,
            { ...child.props, key: index, position },
            child.props.children
          );
        }
        return child;
      })}
    </ol>
  );
};
