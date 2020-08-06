import React from 'react';
import { States } from 'storybook-states';
import { Text } from '../Text';
import { Popover, PopoverProps } from './Popover';

export default { title: 'Components|Popover' };

const LOREM =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, inventore provident distinctio delectus debitis quasi modi adipisci unde esse corrupti molestiae eveniet iste ea illo ad sit fugit officiis explicabo!';

const Content = (
  <div style={{ width: '16rem', padding: '0.5rem' }}>
    <Text>{LOREM}</Text>
  </div>
);

export const Default = () => (
  <div style={{ textAlign: 'center' }}>
    <States<Partial<PopoverProps>>
      states={[
        {},
        { anchor: 'topCenter' },
        { anchor: 'topRight' },
        { anchor: 'bottomLeft' },
        { anchor: 'bottomCenter' },
        { anchor: 'bottomRight' },
        { open: true }
      ]}
    >
      <Popover content={Content} style={{ display: 'inline-block' }}>
        <Text>
          <a href='https://www.modaoperandi.com/women'>Hover on Link</a>
        </Text>
      </Popover>
    </States>
  </div>
);
