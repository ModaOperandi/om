import React, { forwardRef, Ref, useState, useEffect } from 'react';
import classNames from 'classnames';

import './Overlay.scss';

export const UNMOUNT_DELAY_MS = 500;

export type OverlayProps = React.HTMLAttributes<HTMLDivElement> & {
  show?: boolean;
};

export const Overlay = forwardRef(
  (
    { className, children, show = true, ...rest }: OverlayProps,
    forwardedRef: Ref<HTMLDivElement>
  ) => {
    const [open, setOpen] = useState(show);

    useEffect(() => {
      if (show) {
        setOpen(true);

        return;
      }

      const timeout = setTimeout(() => setOpen(false), UNMOUNT_DELAY_MS);

      return () => clearTimeout(timeout);
    }, [show]);

    if (!open) return null;

    return (
      <div
        className={classNames('Overlay', { 'Overlay--closing': !show }, className)}
        ref={forwardedRef}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Overlay.displayName = 'Overlay';
