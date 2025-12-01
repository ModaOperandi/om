import React, { useCallback, useRef, useEffect } from 'react';
import classNames from 'classnames';
import scrollIntoView from 'scroll-into-view-if-needed';
import { colors } from '@moda/tokens';
import { SelectableOption } from './Select';

import './SelectOption.scss';

export type SelectOptionProps = Omit<React.HTMLAttributes<HTMLLIElement>, 'onClick'> & {
  id?: string;
  active: boolean;
  selected: boolean;
  option: SelectableOption;
  onClick: (option: SelectableOption) => void;
  dataTestId?: string;
};

export const SelectOption: React.FC<SelectOptionProps> = ({
  id,
  active,
  selected,
  option,
  option: { disabled, colorSwatch, label },
  onClick,
  className,
  dataTestId
}) => {
  const ref = useRef<HTMLLIElement>(null);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLLIElement>) => {
      event.preventDefault();

      if (!disabled) onClick(option);
    },
    [disabled, onClick, option]
  );

  useEffect(() => {
    if (active && ref.current) {
      scrollIntoView(ref.current, { scrollMode: 'if-needed', block: 'nearest' });
    }
  }, [active, ref]);

  return (
    <li
      id={id}
      ref={ref}
      className={classNames('SelectOption', className, {
        'SelectOption--active': active,
        'SelectOption--selected': selected,
        'SelectOption--disabled': disabled
      })}
      onClick={handleClick}
      data-test-id={dataTestId ? `${dataTestId}--${label.replace(' ', '-')}` : undefined}
      aria-selected={selected}
      aria-disabled={disabled || undefined}
      role='option'
    >
      {colorSwatch && (
        <div
          className='SelectOption__color-swatch'
          style={{ backgroundColor: colors.all[colorSwatch] }}
        />
      )}

      {label}
    </li>
  );
};
