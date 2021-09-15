import React, { useState } from 'react';
import { Clickable } from '../Clickable';
import { Input, FieldProps } from '../Field';
import { Text } from '../Text';

import './PasswordInput.scss';

export type PasswordInputProps = {
  dataTestId?: string;
} & FieldProps;

export const PasswordInput: React.FC<PasswordInputProps> = ({ ...rest }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className='PasswordInput'>
      <Input type={passwordShown ? 'text' : 'password'} {...rest} />
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
};
