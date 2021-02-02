import classNames from 'classnames';
import React from 'react';
import { ControlLink, ControlLinkProps } from '../../ControlLink';

import './Breadcrumb.scss';

export type BreadcrumbProps = ControlLinkProps & {
  position?: number;
  to?: string;
  href?: string;
};

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  children,
  position,
  className,
  ...rest
}) => (
  <li
    className={classNames('Breadcrumb', className)}
    itemProp='itemListElement'
    itemScope
    itemType='http://schema.org/ListItem'
  >
    {rest.to || rest.href ? (
      <ControlLink itemProp='item' {...rest}>
        <span itemProp='name'>{children}</span>
      </ControlLink>
    ) : (
      <span itemProp='name'>{children}</span>
    )}
    {position != null && <meta itemProp='position' content={String(position)} />}
  </li>
);
