import React from 'react';
import classNames from 'classnames';
import { Modal, Props } from '../Modal';
import './ModalOverlay.scss';

export const ModalOverlay: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <Modal overlay {...rest}>
      <div className={classNames('ModalOverlay', className)}>{children}</div>
    </Modal>
  );
};
