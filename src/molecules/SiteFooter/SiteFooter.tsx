import React from 'react';

import { Breakpoint } from '../../components/Breakpoint';
import { SiteFooterDesktop } from './SiteFooterDesktop';
import { SiteFooterMobile } from './SiteFooterMobile';

import './SiteFooter.scss';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const SiteFooter: React.FC<Props> = ({ ...rest }) => (
  <div className='SiteFooter' {...rest}>
    <Breakpoint gt='sm'>
      <SiteFooterDesktop />
    </Breakpoint>

    <Breakpoint lt='sm'>
      <SiteFooterMobile />
    </Breakpoint>
  </div>
);
