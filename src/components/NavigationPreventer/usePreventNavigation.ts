import { useEffect } from 'react';
import { preventNavigation } from '../../utilities/preventNavigation';

export const usePreventNavigation = (enabled = true) => {
  useEffect(() => {
    if (enabled) {
      window.addEventListener('beforeunload', preventNavigation);

      return () => window.removeEventListener('beforeunload', preventNavigation);
    }
  }, [enabled]);
};
