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
  onChangeValue?(value: string): void;
};

const DEFAULT_INPUT_VALUE = '';

export const SearchInput: React.FC<SearchInputProps> = ({
  className,
  onChange,
  onChangeValue,
  onClear,
  value = DEFAULT_INPUT_VALUE,
  ...rest
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const [controlledValue, setValue] = useState(value);

  const handleClick = useCallback(() => {
    setValue(DEFAULT_INPUT_VALUE);
    onClear && onClear();
    if (ref.current) {
      ref.current.focus();
    }
  }, [onClear]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event);
      setValue(event.currentTarget.value);
    },
    [onChange, setValue]
  );

  useEffect(() => {
    onChangeValue && onChangeValue(controlledValue);
  }, [controlledValue, onChangeValue]);

  return (
    <div className={classNames('SearchInput', className)}>
      <div className='SearchInput__icon'>
        <SearchIcon />
      </div>

      <TextInput
        className='SearchInput__input'
        onChange={handleChange}
        value={controlledValue}
        ref={ref}
        {...rest}
      />

      {controlledValue && (
        <Clickable className='SearchInput__clear' onClick={handleClick}>
          <ExitIcon />
        </Clickable>
      )}
    </div>
  );
};
