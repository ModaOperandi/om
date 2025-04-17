import React, { useEffect, useCallback } from 'react';

export const useClickOutside = (
  ref: React.RefObject<HTMLElement | null>,
  onClickOutside: () => void
) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) onClickOutside();
    },
    [onClickOutside, ref]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};
