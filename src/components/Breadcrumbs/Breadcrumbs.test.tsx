import React from 'react';
import { render, screen } from '@testing-library/react';

import { Breadcrumbs, Breadcrumb } from './index';

describe('Breadcrumbs', () => {
  it('wraps elements with microdata tags', () => {
    render(
      <Breadcrumbs>
        <Breadcrumb href='/one'>One</Breadcrumb>
        <Breadcrumb href='/two'>Two</Breadcrumb>
        <Breadcrumb>Three</Breadcrumb>
      </Breadcrumbs>
    );
    expect(screen.getAllByRole('listitem')[0]).toHaveAttribute('itemprop');
    expect(screen.getAllByRole('listitem')[0]).toHaveAttribute('itemscope');
    expect(screen.getAllByRole('listitem')[0]).toHaveAttribute('itemtype');
  });
});
