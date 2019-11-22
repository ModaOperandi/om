import React from 'react';

import { Expandable } from '../../components/Expandable';
import { Button } from '../../components/Button';
import { ShippingAndReturns, AboutModa, HowToShop } from './SiteFooterLinks';

import './SiteFooterMobile.scss';

export const SiteFooterMobile: React.FC = () => {
  return (
    <div className='SiteFooterMobile'>
      <h3>Contact Client Services</h3>

      <div className='SiteFooterMobile__buttons'>
        <Button>Call</Button>
        <Button href='mailto:care@modaoperandi.com'>Email</Button>
      </div>

      <Expandable className='SiteFooterMobile__more' name='More Information' expanded>
        <div className='SiteFooterMobile__more-links'>
          <ShippingAndReturns />
          <AboutModa />
          <HowToShop />
        </div>
      </Expandable>

      <a
        className='SiteFooterMobile__download'
        href='https://itunes.apple.com/us/app/moda-operandi/id781702094'
      >
        Download the Moda App
      </a>

      <div className='SiteFooterMobile__open-hours'>
        <div className='SiteFooterInlineItem'>Monday-Friday 8am-8pm EST</div>
        <div className='SiteFooterInlineItem'>Saturday-Sunday 9am-6pm EST</div>
      </div>

      <div className='SiteFooterMobile__basement'>
        © 2019 Moda Operandi, Inc. All Rights Reserved.
      </div>
    </div>
  );
};
