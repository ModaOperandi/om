import React from 'react';

import { States } from '../../utilities/States';
import { Expandable } from './Expandable';

export default { title: 'Components|Expandable' };

export const Default = () => (
  <States states={[null, { expanded: true }]}>
    <Expandable name='Editor’s Note'>
      Mark Cross' 'Cole' duffle bag is crafted from textured grain leather with ample space for your
      long-haul travels. It opens to reveal red twill lining and ample compartments for your
      essentials. It has polished silver-tone palladium hardware and is stamped with the label's
      signature foil logo along the front. Adjust the removable shoulder strap for easy navigation
      through busy airport terminals.
    </Expandable>
  </States>
);
