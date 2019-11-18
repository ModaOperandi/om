import React from 'react';

import './Sidebar.scss';

export const Sidebar: React.FC = () => {
  return (
    <div className='Sidebar'>
      <div className='Sidebar__section'>
        <h4>Tokens</h4>
        <a href='https://moda-tokens.netlify.com/' target='_blank'>
          @moda/tokens
        </a>
      </div>

      <div className='Sidebar__section'>
        <h4>Icons</h4>
        <a href='https://modaoperandi.github.io/icons/' target='_blank'>
          @moda/icons
        </a>
      </div>

      <div className='Sidebar__section'>
        <h4>Functions</h4>
        <a>spacing</a>
      </div>

      <div className='Sidebar__section'>
        <h4>Mixins</h4>
        <a>stack</a>
        <a>text</a>
      </div>

      <div className='Sidebar__section'>
        <h4>Components</h4>
        <a>Button</a>
      </div>

      <div className='Sidebar__section'>
        <h4>Molecules</h4>
        <a>NavBar</a>
        <a>TopNav</a>
      </div>
    </div>
  );
};
