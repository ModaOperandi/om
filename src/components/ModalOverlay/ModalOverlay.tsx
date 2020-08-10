import React from 'react';
import { Modal, ModalProps } from '../Modal';
import { OverlayProps, Overlay } from '../Overlay';
import classNames from 'classnames';

import './ModalOverlay.scss';

export type ModalOverlayProps = ModalProps & OverlayProps;

export const ModalOverlay: React.FC<ModalOverlayProps> = ({
  children,
  className,
  onClose,
  show,
  ...rest
}) => (
  <Overlay className={classNames('ModalOverlay', className)} show={show} {...rest}>
    <Modal className='ModalOverlay__modal' onClose={onClose}>
      <div className='ModalOverlay__content'>{children}</div>
    </Modal>
  </Overlay>
);
