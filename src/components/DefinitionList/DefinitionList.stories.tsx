import React from 'react';

import { States } from '../../utilities/States';
import { DefinitionList } from './DefinitionList';
import { Text } from '../Text';

export default { title: 'Components|DefinitionList' };

export const Default = () => (
  <States
    states={[
      { term: 'Color', children: 'Black' },
      { term: 'Size', children: 'Please select a size' },
      {
        term: 'Size',
        children: (
          <>
            US 2 — <Text color='code-red'>Only 2 Left</Text>
          </>
        )
      },
      {
        term: 'Supports',
        children: <a href='#link'>Links</a>
      }
    ]}
  >
    {props => <DefinitionList {...props} />}
  </States>
);
