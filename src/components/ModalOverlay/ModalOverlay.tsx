import React, { useRef, useEffect } from 'react';
import { Modal, ModalProps } from '../Modal';
import { OverlayProps, Overlay } from '../Overlay';
import classNames from 'classnames';

import './ModalOverlay.scss';
import { createPortal } from 'react-dom';

export type ModalOverlayProps = ModalProps &
  OverlayProps & { overlayClassName?: string; contentClassName?: string };

export const ModalOverlay: React.FC<ModalOverlayProps> = ({
  children,
  className,
  contentClassName,
  onClose,
  overlayClassName,
  show = true,
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
    <Overlay className={classNames('ModalOverlay', overlayClassName)} show={show} {...rest}>
      <Modal className={classNames('ModalOverlay__modal', className)} onClose={onClose}>
        <div className={classNames('ModalOverlay__content', contentClassName)}>{children}</div>
      </Modal>
    </Overlay>,
    el.current
  );
};
