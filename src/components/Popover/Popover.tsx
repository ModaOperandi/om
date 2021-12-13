import React, { useState, useCallback, useEffect, useRef } from 'react';
import classNames from 'classnames';
import './Popover.scss';

export type PopoverProps = React.HTMLAttributes<HTMLDivElement> & {
  content: JSX.Element;
  children: JSX.Element;
  open?: boolean;
  anchor?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
  zIndex?: number;
  autoPreview?: boolean;
  smoothTransitioning?: boolean;
};

export const POPOVER_MOUSEOUT_DELAY_MS = 200;

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
  open = false,
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

  const handleMouseEnter = useCallback(() => {
    if (!open) {
      timeout.current && clearTimeout(timeout.current);
      setMode(smoothTransitioning ? Mode.Opening : Mode.Open);
    }
  }, [open, smoothTransitioning]);

  const handleMouseLeave = useCallback(() => {
    if (open) return;

    timeout.current = setTimeout(
      () => setMode(smoothTransitioning ? Mode.Closing : Mode.Closed),
      POPOVER_MOUSEOUT_DELAY_MS
    );
  }, [open, smoothTransitioning]);

  useEffect(() => {
    if (mode !== Mode.Closing) return;

    const closingTimeout = setTimeout(() => setMode(Mode.Closed), 750);

    return () => clearTimeout(closingTimeout);
  }, [mode]);

  useEffect(() => {
    if (mode !== Mode.AutoOpening) return;

    const openingTimeout = setTimeout(() => setMode(Mode.AutoOpen), 1000);

    return () => clearTimeout(openingTimeout);
  }, [mode]);

  useEffect(() => {
    if (mode !== Mode.Opening) return;

    const openingTimeout = setTimeout(() => setMode(Mode.Open), 750);

    return () => clearTimeout(openingTimeout);
  }, [mode]);

  useEffect(() => {
    if (mode !== Mode.AutoOpen) return;

    const stayingTimeout = setTimeout(
      () => setMode(smoothTransitioning ? Mode.Closing : Mode.Closed),
      5000
    );

    return () => clearTimeout(stayingTimeout);
  }, [mode, smoothTransitioning]);

  useEffect(() => {
    if (open && smoothTransitioning) {
      setMode(Mode.Opening);
    }

    if (open && !smoothTransitioning) {
      setMode(Mode.Open);
    }

    if (!open && smoothTransitioning) {
      setMode(Mode.Closing);
    }

    if (!open && !smoothTransitioning) {
      setMode(Mode.Closed);
    }
  }, [mode, open, smoothTransitioning]);

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
