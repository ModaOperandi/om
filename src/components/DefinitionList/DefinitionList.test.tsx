import React from 'react';
import { render, screen } from '@testing-library/react';

import { DefinitionList } from './DefinitionList';

describe('DefinitionList', () => {
  it('renders correctly', () => {
    render(<DefinitionList term='Foo'>Bar</DefinitionList>);
    expect(screen.getByText('Foo')).toBeVisible();
    expect(screen.getByText('Bar')).toBeVisible();
  });
});
