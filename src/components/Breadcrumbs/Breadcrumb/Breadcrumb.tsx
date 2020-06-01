import React from 'react';

import './Breadcrumb.scss';

export const Breadcrumb: React.FC = ({ children }) => (
  <li
    className='Breadcrumb'
    itemProp='itemListElement'
    itemScope
    itemType='http://schema.org/ListItem'
  >
    {children}
  </li>
);
