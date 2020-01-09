import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import classNames from 'classnames';

import './Modal.scss';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  onClose(): void;
  overlay?: boolean;
}

export const Modal: React.FC<Props> = ({ className, children, onClose, overlay, ...rest }) => {
  const wrapper = useRef(null);
  const el = useRef(document.createElement('div'));

  const handleKeydown = React.useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          return onClose();
        default:
          break;
      }
    },
    [onClose]
  );

  const handleWrapperClick = React.useCallback(
    (e: React.MouseEvent) => {
      if (e.target === wrapper.current) {
        onClose();
      }
    },
    [onClose, wrapper]
  );

  useEffect(() => {
    const _el = el.current;

    document.body.appendChild(_el);
    disableBodyScroll(_el);
    window.addEventListener('keydown', handleKeydown);

    return () => {
      _el && _el.parentElement && _el.parentElement.removeChild(_el);
      clearAllBodyScrollLocks();
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [handleKeydown]);

  return createPortal(
    <div
      className={classNames('Modal', className, { 'Modal--overlay': overlay })}
      onClick={handleWrapperClick}
      ref={wrapper}
      {...rest}
    >
      {children}
    </div>,
    el.current
  );
};
