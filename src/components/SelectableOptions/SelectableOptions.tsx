import React, { useCallback, useState, useEffect } from 'react';
import classNames from 'classnames';

import { SelectableButton } from '../SelectableButton';

import './SelectableOptions.scss';

export type SelectableOption = {
  label: string;
  value: string | number;
  unavailable?: boolean;
};

export interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  options: SelectableOption[];
  selected?: SelectableOption;
  onSelect(option: SelectableOption): void;
}

export const SelectableOptions: React.FC<Props> = ({
  className,
  selected,
  onSelect,
  options,
  ...rest
}) => {
  const [selectedOption, selectOption] = useState(selected);
  const handleClick = useCallback((option: SelectableOption) => selectOption(option), []);
  useEffect(() => selectedOption && onSelect(selectedOption), [selectedOption]);

  return (
    <div className={classNames('SelectableOptions', className)} {...rest}>
      {options.map(option => {
        return (
          <SelectableButton
            key={option.value}
            unavailable={option.unavailable}
            selected={option.value === (selectedOption && selectedOption.value)}
            onClick={() => handleClick(option)}
          >
            {option.label}
          </SelectableButton>
        );
      })}
    </div>
  );
};
