import React from 'react';
import classNames from 'classnames';
import { Modal, ModalProps } from '../Modal';
import './ModalOverlay.scss';

export type ModalOverlayProps = ModalProps;

export const ModalOverlay: React.FC<ModalOverlayProps> = ({ children, className, ...rest }) => {
  return (
    <Modal overlay {...rest}>
      <div className={classNames('ModalOverlay', className)}>{children}</div>
    </Modal>
  );
};
