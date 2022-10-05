import React, { useState } from 'react';
import { Badge } from '../Badge';
import { Clickable } from '../Clickable';
import { Text } from '../Text';
import { Stack } from '../Stack';
import { SlidingPane } from './SlidingPane';
import RulerIcon from '@moda/icons/ruler-24';

export default { title: 'Components/SlidingPane' };

export const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Stack space={1} direction='horizontal' alignItems='center'>
        <RulerIcon />
        <Clickable onClick={handleOpen}>Size Guide</Clickable>
      </Stack>
      <SlidingPane onClose={handleClose} title='Size Guide' visible={isOpen}>
        <Stack space={2}>
          <Badge theme='noise'>Runs small we recommend sizing up one size.</Badge>
          <Text>
            Select your region to convert your size. Size and cut may vary between brands. Use this
            chart as a general guide.
          </Text>
        </Stack>
      </SlidingPane>
    </>
  );
};

Mobile.story = { parameters: { viewport: { defaultViewport: 'xs' } } };
