import React from 'react';
import { States } from 'storybook-states';
import { Loading, LoadingProps } from './Loading';

export default { title: 'Components|Loading' };

export const Default = () => (
  <States<LoadingProps> states={[{ speed: 100 }, { speed: 250 }, { speed: 500 }]}>
    <Loading />
  </States>
);
