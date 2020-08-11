import React, { useEffect, useMemo } from 'react';
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
  const element = useMemo(
    () => (typeof document !== 'undefined' ? document.createElement('div') : null),
    []
  );
  useEffect(() => {
    if (!element) return;

    document.body.appendChild(element);

    return () => {
      element?.parentElement?.removeChild(element);
    };
  }, [element]);

  if (!element) return null;

  return createPortal(
    <Overlay className={classNames('ModalOverlay', overlayClassName)} show={show} {...rest}>
      <Modal className={classNames('ModalOverlay__modal', className)} onClose={onClose}>
        <div className={classNames('ModalOverlay__content', contentClassName)}>{children}</div>
      </Modal>
    </Overlay>,
    element
  );
};
