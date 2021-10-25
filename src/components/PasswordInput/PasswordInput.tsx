import React, { forwardRef, useState } from 'react';
import { Clickable } from '../Clickable';
import { Input, FieldProps } from '../Field';
import { Text } from '../Text';

import './PasswordInput.scss';

export type PasswordInputProps = FieldProps;

export const PasswordInput = forwardRef(
  ({ ...rest }: PasswordInputProps, ref: React.Ref<HTMLInputElement>) => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };

    return (
      <div className='PasswordInput'>
        <Input
          className='PasswordInput__editor'
          ref={ref}
          type={passwordShown ? 'text' : 'password'}
          {...rest}
        />

        <Clickable
          className='PasswordInput__password-action'
          onClick={togglePasswordVisiblity}
          type='button'
        >
          {passwordShown ? (
            <Text treatment='eyebrow'>HIDE</Text>
          ) : (
            <Text treatment='eyebrow'>SHOW</Text>
          )}
        </Clickable>
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';
