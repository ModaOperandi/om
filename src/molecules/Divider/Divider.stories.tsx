import React from 'react';

import { Divider, NoLineDivider, TwoLineDivider } from './';

export default { title: 'Molecules|Divider' };

export const Default = () => <Divider style={{ padding: '30px 0' }} text='Default Divider' />;

export const withNoLine = () => <NoLineDivider text='Divider with No Line' />;

export const withDoubleLine = () => <TwoLineDivider text='Divider with Double Line' />;
