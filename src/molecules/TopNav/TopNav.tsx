import React from 'react';
import LogoHorizontalIcon from '@moda/icons/logo-horizontal-189-x-12';

import { NavBar, Props as NavBarProps } from '../NavBar';

import './TopNav.scss';

export interface Props extends NavBarProps {}

export const TopNav: React.FC<Props> = ({ sections, ...rest }) => {
  return (
    <div className='TopNav' {...rest}>
      <a className='TopNav__logo' href='/'>
        <LogoHorizontalIcon width='100%' height='100%' />
      </a>

      <NavBar sections={sections} />
    </div>
  );
};
