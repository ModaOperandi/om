import React from 'react';

import { DefinitionList } from './DefinitionList';
import { Text } from '../Text';

export default { title: 'Components|DefinitionList' };

export const Default = () => (
  <>
    <DefinitionList term='Color'>Black</DefinitionList>
    <DefinitionList term='Size'>Please select a size</DefinitionList>
    <DefinitionList term='Size'>
      US 2 — <Text color='code-red'>Only 2 Left</Text>
    </DefinitionList>
    <DefinitionList term='Supports'>
      <a href='#link'>Links</a>
    </DefinitionList>
  </>
);
