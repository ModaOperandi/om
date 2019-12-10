import React from 'react';

import { States } from '../../utilities/States';
import { Text } from '../Text';
import { Popover } from './Popover';

export default { title: 'Components|Popover' };

const LOREM =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, inventore provident distinctio delectus debitis quasi modi adipisci unde esse corrupti molestiae eveniet iste ea illo ad sit fugit officiis explicabo!';

const Content = (
  <div style={{ width: '16rem', padding: '0.5rem' }}>
    <Text>{LOREM}</Text>
  </div>
);

export const Default = () => (
  <States states={[null, { anchor: 'right' }, { open: true }]}>
    <Popover content={Content}>
      <Text>Hover over me</Text>
    </Popover>
  </States>
);
