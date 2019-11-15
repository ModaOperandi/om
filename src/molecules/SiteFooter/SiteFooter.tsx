import React from 'react';
import SocialPhoneIcon from '@moda/icons/social-phone-16';
import MailIcon from '@moda/icons/mail-16';
import SocialFacebookIcon from '@moda/icons/social-facebook-16';
import SocialInstagramIcon from '@moda/icons/social-instagram-16';
import SocialPinterestIcon from '@moda/icons/social-pinterest-16';
import SocialTwitterIcon from '@moda/icons/social-twitter-16';

import './SiteFooter.scss';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const SiteFooter: React.FC<Props> = ({ ...rest }) => (
  <div className='SiteFooter' {...rest}>
    <h3>Contact Client Services</h3>

    <div>
      <div className='SiteFooterInlineItem'>Domestic: 1 (800) 707-9898</div>
      <div className='SiteFooterInlineItem'>International: +1 (212) 729-0984</div>
      <div className='SiteFooterInlineItem'>Monday-Friday 8am–8pm EST</div>
      <div className='SiteFooterInlineItem'>Saturday-Sunday 9am-6pm EST</div>
      <div className='SiteFooterInlineItem'>Reception Desk Direct Number +1 (646) 741-1853</div>
    </div>

    <div>
      <div className='SiteFooterInlineItem'>
        <a href='mailto:care@modaoperandi.com'>Email Client Services</a>
      </div>

      <div className='SiteFooterInlineItem'>
        <a href='mailto:care@modaoperandi.com'>Consult with a Personal Stylist</a>
      </div>
    </div>

    <div className='SiteFooter__sections'>
      <div className='SiteFooterSection'>
        <h3>Shipping &amp; Returns</h3>
        <a href='http://help.modaoperandi.com/hc/en-us/articles/210056706-Tracking-Your-Order'>
          Track An Order
        </a>
        <a href='http://help.modaoperandi.com/hc/en-us/articles/211521863-Return-Policy'>
          Return Policy
        </a>
        <a href='http://help.modaoperandi.com/hc/en-us/articles/210056806-Returning-Your-Order'>
          Return An Order
        </a>
        <a href='http://help.modaoperandi.com/hc/en-us/articles/211521843-Shipping-Times-Costs'>
          Shipping Times &amp; Costs
        </a>
      </div>

      <div className='SiteFooterSection'>
        <h3>About Moda</h3>
        <a href='/about#careers'>Careers</a>
        <a href='/about#brand'>Our Brand</a>
        <a href='/about#leader'>Our Leader</a>
        <a href='/about#affiliates'>Affiliates</a>
        <a href='/about#contact'>Contact</a>
      </div>

      <div className='SiteFooterSection'>
        <h3>Shipping &amp; Returns</h3>
        <a href='/rewards'>Moda Rewards</a>
        <a href='http://help.modaoperandi.com/hc/en-us'>FAQs</a>
        <a href='/editorial/our-locations'>Our Locations</a>
      </div>

      <div className='SiteFooterSection'>
        <h3>Join our list for daily style inspiration &amp; first access to global fashion.</h3>
      </div>
    </div>

    <div className='SiteFooterSub'>
      <a
        className='SiteFooterInlineItem'
        href='https://itunes.apple.com/us/app/moda-operandi/id781702094'
        target='_blank'
      >
        <SocialPhoneIcon className='SiteFooterSub__icon' />
        Download the Moda App
      </a>

      <div className='SiteFooterInlineItem'>
        <a href='mailto:care@modaoperandi.com'>
          <MailIcon className='SiteFooterSub__icon' />
        </a>
        <a href='https://www.instagram.com/modaoperandi/' target='_blank'>
          <SocialFacebookIcon className='SiteFooterSub__icon' />
        </a>
        <a href='http://www.facebook.com/ModaOperandi' target='_blank'>
          <SocialInstagramIcon className='SiteFooterSub__icon' />
        </a>
        <a href='http://twitter.com/modaoperandi' target='_blank'>
          <SocialPinterestIcon className='SiteFooterSub__icon' />
        </a>
        <a href='http://www.pinterest.com/modaoperandi' target='_blank'>
          <SocialTwitterIcon className='SiteFooterSub__icon' />
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
    </div>
  </div>
);
