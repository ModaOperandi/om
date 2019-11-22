import React from 'react';
import LogoHorizontalIcon from '@moda/icons/logo-horizontal-189-x-12';

import { Constrain } from '../../components';
import { NavBar, Props as NavBarProps } from '../NavBar';

import './SiteNav.scss';

export interface Props extends NavBarProps {}

export const SiteNav: React.FC<Props> = ({ sections, ...rest }) => {
  return (
    <div className='SiteNav' {...rest}>
      <Constrain className='SiteNav__primary'>
        <a className='SiteNav__logo' href='/'>
          <LogoHorizontalIcon width='100%' height='100%' />
        </a>
      </Constrain>

      <NavBar sections={sections} />
    </div>
  );
};
