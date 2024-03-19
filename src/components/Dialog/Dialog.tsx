import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { ModalOverlay, ModalOverlayProps } from '../ModalOverlay';
import { Stack } from '../Stack';
import { Text } from '../Text';

import './Dialog.scss';

export type DialogProps = Omit<ModalOverlayProps, 'title'> & {
  title?: ReactNode;
  message?: ReactNode;
  actions?: ReactNode;
};

export const Dialog: React.FC<DialogProps> = ({
  title,
  message,
  actions,
  contentClassName,
  ...rest
}) => (
  <ModalOverlay contentClassName={classNames('Dialog', contentClassName)} {...rest}>
    <Stack className='Dialog__content' space={6}>
      {title && <Text treatment='h5'>{title}</Text>}
      {message && <Text>{message}</Text>}
      {actions && (
        <Stack direction='horizontal' space={3} alignItems='center' justifyContent='center'>
          {actions}
        </Stack>
      )}
    </Stack>
  </ModalOverlay>
);
