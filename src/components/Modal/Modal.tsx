import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FocusOn } from 'react-focus-on';
import classNames from 'classnames';
import { Overlay } from '../Overlay';

import './Modal.scss';

export type ModalProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose(): void;
  overlay?: boolean;
};

export const Modal: React.FC<ModalProps> = ({ className, children, onClose, overlay, ...rest }) => {
  const wrapper = useRef(null);
  const el = useRef(document.createElement('div'));

  useEffect(() => {
    const _el = el.current;

    document.body.appendChild(_el);

    return () => {
      _el && _el.parentElement && _el.parentElement.removeChild(_el);
    };
  }, []);

  const Component = overlay ? Overlay : 'div';

  return createPortal(
    <Component className={classNames('Modal', className)} ref={wrapper} {...rest}>
      <FocusOn onClickOutside={onClose} onEscapeKey={onClose}>
        {children}
      </FocusOn>
    </Component>,
    el.current
  );
};
