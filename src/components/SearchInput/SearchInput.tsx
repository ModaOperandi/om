import React, { useCallback, useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import ExitIcon from '@moda/icons/exit-20';
import SearchIcon from '@moda/icons/search-20';
import { TextInput, TextInputProps } from '../TextInput';
import { Clickable } from '../Clickable';
import './SearchInput.scss';

export type SearchInputProps = TextInputProps & {
  value?: string;
  onClear?(): void;
  roundBorders?: boolean;
  noBorders?: boolean;
};

const DEFAULT_INPUT_VALUE = '';

export const SearchInput: React.FC<SearchInputProps> = ({
  className,
  onChange,
  onClear,
  roundBorders = false,
  noBorders = false,
  value = DEFAULT_INPUT_VALUE,
  ...rest
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const [controlledValue, setValue] = useState(value);

  const handleClear = useCallback(() => {
    setValue(DEFAULT_INPUT_VALUE);
    onChange?.(DEFAULT_INPUT_VALUE);
    onClear?.();
    ref.current?.focus();
  }, [onClear, onChange]);

  const handleChange = useCallback(
    (value: string) => {
      onChange?.(value);
      setValue(value);
    },
    [onChange, setValue]
  );

  useEffect(() => setValue(value), [value]);

  return (
    <div className={classNames('SearchInput', className)}>
      <div className='SearchInput__icon'>
        <SearchIcon />
      </div>

      <TextInput
        className={classNames('SearchInput__input', {
          'SearchInput__input--round-borders': roundBorders,
          'SearchInput__input--no-borders': noBorders
        })}
        onChange={handleChange}
        value={controlledValue}
        ref={ref}
        {...rest}
      />

      {controlledValue && (
        <Clickable className='SearchInput__clear' onClick={handleClear} type='reset'>
          <ExitIcon />
        </Clickable>
      )}
    </div>
  );
};
