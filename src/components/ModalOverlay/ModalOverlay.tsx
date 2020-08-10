import React, { useRef, useEffect } from 'react';
import { Modal, ModalProps } from '../Modal';
import { OverlayProps, Overlay } from '../Overlay';
import classNames from 'classnames';

import './ModalOverlay.scss';
import { createPortal } from 'react-dom';

export type ModalOverlayProps = ModalProps & OverlayProps;

export const ModalOverlay: React.FC<ModalOverlayProps> = ({
  children,
  className,
  onClose,
  show,
  ...rest
}) => {
  const el = useRef(document.createElement('div'));

  useEffect(() => {
    const _el = el.current;
    document.body.appendChild(_el);
    return () => {
      _el && _el.parentElement && _el.parentElement.removeChild(_el);
    };
  }, []);

  return createPortal(
    <Overlay className={classNames('ModalOverlay', className)} show={show} {...rest}>
      <Modal className='ModalOverlay__modal' onClose={onClose}>
        <div className='ModalOverlay__content'>{children}</div>
      </Modal>
    </Overlay>,
    el.current
  );
};
