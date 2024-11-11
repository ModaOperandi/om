import React from 'react';
import { usePreventNavigation } from './usePreventNavigation';

interface Props {
  message?: string;
  enabled: boolean | undefined;
}

export const NavigationPreventer: React.FC<Props> = ({
  enabled = false
  // message = 'Changes that you made may not be saved.'
}) => {
  usePreventNavigation(enabled);

  // TODO: implement this with next.js https://github.com/vercel/next.js/discussions/32231
  return null;
};
