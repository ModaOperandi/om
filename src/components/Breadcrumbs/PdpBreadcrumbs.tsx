import React, { Children } from 'react';
import { BreadcrumbsProps, Breadcrumbs } from './Breadcrumbs';
import { Breakpoint } from '../Breakpoint';

export const PdpBreadcrumbs: React.FC<BreadcrumbsProps> = ({ children }) => (
  <>
    <Breakpoint lt='sm'>
      <Breadcrumbs>
        {Children.toArray(children).filter((_, index) => index < Children.count(children) - 1)}
      </Breadcrumbs>
    </Breakpoint>

    <Breakpoint gt='sm'>
      <Breadcrumbs>{children}</Breadcrumbs>
    </Breakpoint>
  </>
);
