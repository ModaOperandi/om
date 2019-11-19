import React, { useCallback, useState } from 'react';
import classNames from 'classnames';

import './Expandable.scss';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  expanded?: boolean;
  children: React.ReactNode;
}

export const Expandable: React.FC<Props> = ({
  name,
  expanded: __expanded__ = false,
  children,
  ...rest
}) => {
  const [expanded, setExpanded] = useState(__expanded__);
  const handleClick = useCallback(() => setExpanded(expanded => !expanded), []);

  return (
    <div
      className={classNames('Expandable', {
        'Expandable--expanded': expanded
      })}
      {...rest}
    >
      <button className='Expandable__name' onClick={handleClick}>
        {name}
      </button>
      <div className='Expandable__contents'>{children}</div>
    </div>
  );
};
