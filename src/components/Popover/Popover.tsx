import React, { useState, useCallback, useEffect, useRef, ReactNode, JSX } from 'react';
import classNames from 'classnames';
import './Popover.scss';

export type PopoverProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> & {
  content: ReactNode;
  children: JSX.Element;
  open?: boolean;
  anchor?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
  zIndex?: number;
  autoPreview?: boolean;
  smoothTransitioning?: boolean;
};

export const POPOVER_MOUSEOUT_DELAY_MS = 200;
const THREE_QUARTER_SECOND_DELAY = 750;
const ONE_SECOND_DELAY = 1000;
const FIVE_SECOND_DELAY = 5000;

enum Mode {
  Opening = 'opening',
  Open = 'open',
  Closing = 'closing',
  AutoOpening = 'autoOpening',
  AutoOpen = 'autoOpen',
  Closed = 'closed'
}

export const Popover: React.FC<PopoverProps> = ({
  className,
  children,
  content,
  open,
  anchor = 'topLeft',
  zIndex,
  autoPreview = false,
  smoothTransitioning = false,
  ...rest
}) => {
  const [mode, setMode] = useState(() => {
    if (open && smoothTransitioning) {
      return Mode.Opening;
    }

    if (open && !smoothTransitioning) {
      return Mode.Open;
    }

    if (autoPreview) {
      return Mode.AutoOpening;
    }

    return Mode.Closed;
  });

  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleOpen = useCallback(() => {
    if (smoothTransitioning) setMode(Mode.Opening);

    if (!smoothTransitioning) setMode(Mode.Open);
  }, [smoothTransitioning]);

  const handleClose = useCallback(() => {
    if (smoothTransitioning) setMode(Mode.Closing);

    if (!smoothTransitioning) setMode(Mode.Closed);
  }, [smoothTransitioning]);

  const handleMouseEnter = useCallback(() => {
    if (!open) {
      if (timeout.current) clearTimeout(timeout.current);
      handleOpen();
    }
  }, [handleOpen, open]);

  const handleMouseLeave = useCallback(() => {
    if (open) return;

    timeout.current = setTimeout(handleClose, POPOVER_MOUSEOUT_DELAY_MS);
  }, [handleClose, open]);

  useEffect(() => {
    if (mode !== Mode.Closing) return;

    const closingTimeout = setTimeout(() => setMode(Mode.Closed), THREE_QUARTER_SECOND_DELAY);

    return () => clearTimeout(closingTimeout);
  }, [mode]);

  useEffect(() => {
    if (mode !== Mode.AutoOpening) return;

    const openingTimeout = setTimeout(() => setMode(Mode.AutoOpen), ONE_SECOND_DELAY);

    return () => clearTimeout(openingTimeout);
  }, [mode]);

  useEffect(() => {
    if (mode !== Mode.Opening) return;

    const openingTimeout = setTimeout(() => setMode(Mode.Open), THREE_QUARTER_SECOND_DELAY);

    return () => clearTimeout(openingTimeout);
  }, [mode]);

  useEffect(() => {
    if (mode !== Mode.AutoOpen) return;

    const stayingTimeout = setTimeout(handleClose, FIVE_SECOND_DELAY);

    return () => clearTimeout(stayingTimeout);
  }, [handleClose, mode, smoothTransitioning]);

  useEffect(() => {
    if (open === undefined) return;

    if (open) {
      handleOpen();
    } else {
      handleClose();
    }
  }, [handleClose, handleOpen, open]);

  const isOpen =
    mode === Mode.AutoOpen || mode === Mode.Opening || mode === Mode.Open || mode === Mode.Closing;

  return (
    <div
      className={classNames(`Popover Popover--anchor-${anchor}`, className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      <span className='Popover__trigger'>
        {isOpen && (
          <div
            className={classNames('Popover__box', {
              'Popover__box--opening': mode === Mode.Opening,
              'Popover__box--closing': mode === Mode.Closing
            })}
          >
            <div
              className='Popover__caret'
              style={{ zIndex: zIndex != null ? zIndex + 1 : undefined }}
            />

            <div className='Popover__content' style={{ zIndex }}>
              {content}
            </div>
          </div>
        )}

        {children}
      </span>
    </div>
  );
};
