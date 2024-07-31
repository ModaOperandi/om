import React from 'react';
import { Prompt, PromptProps } from 'react-router-dom';
import { usePreventNavigation } from './usePreventNavigation';

interface Props {
  message?: PromptProps['message'];
  enabled: boolean | undefined;
}

export const NavigationPreventer: React.FC<Props> = ({
  enabled = false,
  message = 'Changes that you made may not be saved.'
}) => {
  usePreventNavigation(enabled);

  return <Prompt when={enabled} message={message} />;
};
