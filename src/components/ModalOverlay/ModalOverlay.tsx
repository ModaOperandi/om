import React from 'react';
import classNames from 'classnames';
import { Modal, ModalProps } from '../Modal';
import { OverlayProps } from '../Overlay';

import './ModalOverlay.scss';

export type ModalOverlayProps = ModalProps & OverlayProps;

export const ModalOverlay: React.FC<ModalOverlayProps> = ({ children, className, ...rest }) => (
  <Modal overlay {...rest}>
    <div className={classNames('ModalOverlay', className)}>{children}</div>
  </Modal>
);
