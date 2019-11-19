import React from 'react';

import { DefinitionList } from './DefinitionList';

export default { title: 'Components|DefinitionList' };

export const Default = () => (
  <>
    <DefinitionList term='Color'>Black</DefinitionList>
    <DefinitionList term='Size'>Please select a size</DefinitionList>
    <DefinitionList term='Size'>US 2</DefinitionList>
    <DefinitionList term='Supports'>
      <a href='#link'>Links</a>
    </DefinitionList>
  </>
);
