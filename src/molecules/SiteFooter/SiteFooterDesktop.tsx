import React from 'react';
import SocialPhoneIcon from '@moda/icons/social-phone-16';
import MailIcon from '@moda/icons/mail-16';
import SocialFacebookIcon from '@moda/icons/social-facebook-16';
import SocialInstagramIcon from '@moda/icons/social-instagram-16';
import SocialPinterestIcon from '@moda/icons/social-pinterest-16';
import SocialTwitterIcon from '@moda/icons/social-twitter-16';

import { Constrain } from '../../components/Constrain';
import { ShippingAndReturns, AboutModa, HowToShop } from './SiteFooterLinks';

import './SiteFooterDesktop.scss';

export const SiteFooterDesktop = () => (
  <Constrain className='SiteFooterDesktop'>
    <h3>Contact Client Services</h3>

    <section>
      <div className='SiteFooterInlineItem'>Domestic: 1 (800) 707-9898</div>
      <div className='SiteFooterInlineItem'>International: +1 (212) 729-0984</div>
      <div className='SiteFooterInlineItem'>Monday-Friday 8am–8pm EST</div>
      <div className='SiteFooterInlineItem'>Saturday-Sunday 9am-6pm EST</div>
      <div className='SiteFooterInlineItem'>Reception Desk Direct Number +1 (646) 741-1853</div>
    </section>

    <section>
      <div className='SiteFooterInlineItem'>
        <a href='mailto:care@modaoperandi.com'>Email Client Services</a>
      </div>

      <div className='SiteFooterInlineItem'>
        <a href='mailto:care@modaoperandi.com'>Consult with a Personal Stylist</a>
      </div>
    </section>

    <section className='SiteFooterDesktop__categories'>
      <div className='SiteFooterDesktop__category'>
        <h3>Shipping &amp; Returns</h3>
        <ShippingAndReturns />
      </div>

      <div className='SiteFooterDesktop__category'>
        <h3>About Moda</h3>
        <AboutModa />
      </div>

      <div className='SiteFooterDesktop__category'>
        <h3>How to Shop</h3>
        <HowToShop />
      </div>

      <div className='SiteFooterDesktop__category'>
        <h3>Join our list for daily style inspiration &amp; first access to global fashion.</h3>
      </div>
    </section>

    <section className='SiteFooterDesktop__basement'>
      <a
        className='SiteFooterInlineItem'
        href='https://itunes.apple.com/us/app/moda-operandi/id781702094'
        target='_blank'
      >
        <SocialPhoneIcon className='SiteFooterDesktop__icon' />
        Download the Moda App
      </a>

      <div className='SiteFooterInlineItem'>
        <a href='mailto:care@modaoperandi.com'>
          <MailIcon className='SiteFooterDesktop__icon' />
        </a>
        <a href='https://www.instagram.com/modaoperandi/' target='_blank'>
          <SocialFacebookIcon className='SiteFooterDesktop__icon' />
        </a>
        <a href='http://www.facebook.com/ModaOperandi' target='_blank'>
          <SocialInstagramIcon className='SiteFooterDesktop__icon' />
        </a>
        <a href='http://twitter.com/modaoperandi' target='_blank'>
          <SocialPinterestIcon className='SiteFooterDesktop__icon' />
        </a>
        <a href='http://www.pinterest.com/modaoperandi' target='_blank'>
          <SocialTwitterIcon className='SiteFooterDesktop__icon' />
        </a>
      </div>

      <a className='SiteFooterInlineItem' href='/terms'>
        Terms &amp; Conditions
      </a>

      <a className='SiteFooterInlineItem' href='/privacy'>
        Privacy Policy
      </a>

      <div className='SiteFooterInlineItem'>
        © {new Date().getFullYear()} Moda Operandi, Inc. All Rights Reserved.
      </div>
    </section>
  </Constrain>
);
